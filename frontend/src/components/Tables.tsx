import { useState, useEffect, useRef } from "react";
import "../styles/Tables.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://agent-smark-backend.onrender.com";

interface ParlayLeg {
  id?: number;
  fixture_title: string;
  start_time: number;
  player_name: string;
  sport: string;
  prop_type: string;
  line: number;
  over_under: "over" | "under";
  odds?: number;
  current_value?: number;
  leg_status?: "pending" | "won" | "lost";
}

interface Parlay {
  id: number;
  user_id: number;
  stake: number;
  odds: number;
  status: "pending" | "won" | "lost";
  created_at: string;
  legs: ParlayLeg[];
}

interface PlayerProp {
  player_name: string;
  prop_type: string;
  line: number;
  over_odds: number;
  under_odds: number;
}

interface StreamInfo {
  source: string;
  source_id: string;
  embed_url: string;
}

interface Fixture {
  title: string;
  sport: string;
  start_time: number;
  streams: StreamInfo[];
  player_props: PlayerProp[];
}

interface UserData {
  username: string;
  balance: number;
}

interface NotificationItem {
  id: number;
  message: string;
}

export default function Tables() {
  // Auth state
  const [token, setToken] = useState<string | null>(localStorage.getItem("tables_token"));
  const [username, setUsername] = useState<string | null>(localStorage.getItem("tables_username"));
  const [balance, setBalance] = useState<number>(0);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Lobby and fixtures state
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [selectedFixture, setSelectedFixture] = useState<Fixture | null>(null);
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [currentTab, setCurrentTab] = useState<"lobby" | "props" | "parlays" | "leaderboard">("lobby");
  const [selectedPropsFixture, setSelectedPropsFixture] = useState<Fixture | null>(null);
  const [selectedStreamIdx, setSelectedStreamIdx] = useState<number>(0);
  const [loadedStreams, setLoadedStreams] = useState<number[]>([0]);

  useEffect(() => {
    setSelectedStreamIdx(0);
    setLoadedStreams([0]);
  }, [selectedFixture]);

  // Leaderboard state
  interface LeaderboardEntry {
    username: string;
    dopamine_points: number;
    win_rate: number;
    total_legs: number;
    won_legs: number;
  }

  interface LeaderboardData {
    by_money: LeaderboardEntry[];
    by_win_rate: LeaderboardEntry[];
  }

  const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null);
  const [leaderboardType, setLeaderboardType] = useState<"by_money" | "by_win_rate">("by_money");

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/tables/leaderboard`);
      if (res.ok) {
        const data: LeaderboardData = await res.json();
        setLeaderboard(data);
      }
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
    }
  };

  useEffect(() => {
    if (currentTab === "leaderboard") {
      fetchLeaderboard();
    }
  }, [currentTab]);
  const [loading, setLoading] = useState(false);

  // Parlay slip state
  const [parlaySlip, setParlaySlip] = useState<ParlayLeg[]>([]);
  const [stake, setStake] = useState<number>(10);

  // Parlays history state
  const [parlays, setParlays] = useState<Parlay[]>([]);
  const prevParlaysRef = useRef<Parlay[]>([]);

  // Notifications
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  // Messages
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Fetch User Info
  const fetchUserData = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      if (res.ok) {
        const data: UserData = await res.json();
        setBalance(data.balance);
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // Fetch Fixtures
  const fetchFixtures = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/tables/fixtures`);
      if (res.ok) {
        const data: Fixture[] = await res.json();
        setFixtures(data);
      }
    } catch (err) {
      console.error("Error fetching fixtures:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Parlays
  const fetchParlays = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_BASE_URL}/tables/parlays`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data: Parlay[] = await res.json();
        setParlays(data);
        prevParlaysRef.current = data;
      }
    } catch (err) {
      console.error("Error fetching parlays:", err);
    }
  };

  useEffect(() => {
    fetchFixtures();
    if (token) {
      fetchUserData();
      fetchParlays();
    }
  }, [token]);

  // Real-time loop for live stats updates while watching
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/tables/parlays`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) return;
        const data: Parlay[] = await res.json();

        if (prevParlaysRef.current.length > 0) {
          data.forEach((parlay) => {
            const prevParlay = prevParlaysRef.current.find((p) => p.id === parlay.id);
            if (prevParlay) {
              // Check if parlay settled
              if (parlay.status !== prevParlay.status && parlay.status !== "pending") {
                addNotification(
                  `Parlay Settle: Your ${parlay.legs.length}-leg parlay has ${parlay.status.toUpperCase()}! ${
                    parlay.status === "won" ? `+${(parlay.stake * parlay.odds).toFixed(2)} DP credited.` : ""
                  }`
                );
                fetchUserData();
              }
              // Check each leg value
              parlay.legs.forEach((leg) => {
                const prevLeg = prevParlay.legs.find((l) => l.player_name === leg.player_name && l.prop_type === leg.prop_type);
                if (prevLeg && leg.current_value !== undefined && prevLeg.current_value !== undefined && leg.current_value > prevLeg.current_value) {
                  addNotification(
                    `Leg Update: ${leg.player_name} (${leg.prop_type}) value increased to ${leg.current_value} (Line: ${leg.line})`
                  );
                }
              });
            }
          });
        }
        setParlays(data);
        prevParlaysRef.current = data;
      } catch (err) {
        console.error("Error updating live stats:", err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [token]);
  // Dopamine Points heartbeat
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/auth/dopamine/heartbeat`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.success && typeof data.balance === "number") {
            setBalance(data.balance);
          }
        }
      } catch (err) {
        console.error("Error in dopamine heartbeat:", err);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [token]);

  const addNotification = (msg: string) => {
    const id = Date.now() + Math.random();
    setNotifications((prev) => [...prev, { id, message: msg }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 6000);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const path = authMode === "login" ? "/auth/login" : "/auth/register";
    try {
      const res = await fetch(`${API_BASE_URL}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.detail || "Authentication failed");
        return;
      }

      localStorage.setItem("tables_token", data.token);
      localStorage.setItem("tables_username", data.username);
      setToken(data.token);
      setUsername(data.username);
      setUsernameInput("");
      setPasswordInput("");
      setSuccessMsg(`Welcome, ${data.username}!`);
    } catch (err) {
      console.error("Auth error:", err);
      setErrorMsg("Failed to connect to backend server");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("tables_token");
    localStorage.removeItem("tables_username");
    setToken(null);
    setUsername(null);
    setBalance(0);
    setParlays([]);
    setParlaySlip([]);
    setSelectedFixture(null);
    setSuccessMsg("Logged out successfully");
  };

  // Toggle leg in parlay slip
  const handleToggleLeg = (fixture: Fixture, prop: PlayerProp, overUnder: "over" | "under") => {
    if (!token) {
      setErrorMsg("Please login to place bets");
      return;
    }

    const isMatch = (leg: ParlayLeg) =>
      leg.fixture_title === fixture.title &&
      leg.player_name === prop.player_name &&
      leg.prop_type === prop.prop_type;

    const existingIndex = parlaySlip.findIndex(isMatch);

    if (existingIndex > -1) {
      const existingLeg = parlaySlip[existingIndex];
      if (existingLeg.over_under === overUnder) {
        // Remove it if clicking the same button
        setParlaySlip(parlaySlip.filter((_, idx) => idx !== existingIndex));
      } else {
        // Toggle over/under
        const updated = [...parlaySlip];
        updated[existingIndex] = { 
          ...existingLeg, 
          over_under: overUnder,
          odds: overUnder === "over" ? prop.over_odds : prop.under_odds
        };
        setParlaySlip(updated);
      }
    } else {
      if (parlaySlip.length >= 5) {
        setErrorMsg("Parlays are capped at 5 legs maximum");
        return;
      }
      const newLeg: ParlayLeg = {
        fixture_title: fixture.title,
        start_time: fixture.start_time,
        player_name: prop.player_name,
        sport: fixture.sport,
        prop_type: prop.prop_type,
        line: prop.line,
        over_under: overUnder,
        odds: overUnder === "over" ? prop.over_odds : prop.under_odds
      };
      setParlaySlip([...parlaySlip, newLeg]);
    }
  };

  const calculateParlayMultiplier = (legs: ParlayLeg[]): number => {
    if (legs.length < 2) return 0.0;
    let multiplier = 1.0;
    legs.forEach((leg) => {
      const legOdds = leg.odds ?? -115;
      if (legOdds > 0) {
        multiplier *= 1.0 + legOdds / 100.0;
      } else {
        multiplier *= 1.0 + 100.0 / Math.abs(legOdds);
      }
    });
    return parseFloat(multiplier.toFixed(2));
  };


  const handleSubmitParlay = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);

    if (parlaySlip.length < 2) {
      setErrorMsg("A parlay requires at least 2 legs");
      return;
    }
    if (stake <= 0) {
      setErrorMsg("Stake must be a positive number");
      return;
    }
    if (balance < stake) {
      setErrorMsg("Insufficient DP for this stake");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/tables/parlay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ stake, legs: parlaySlip })
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.detail || "Failed to place parlay");
        return;
      }

      setSuccessMsg("Parlay placed successfully!");
      setParlaySlip([]);
      fetchUserData();
      fetchParlays();
    } catch (err) {
      console.error("Place parlay error:", err);
      setErrorMsg("Server error placing parlay");
    }
  };

  const getFixtureStatus = (startTime: number, sport: string): { label: string; cls: string } => {
    const now = Date.now();
    let duration = 150 * 60 * 1000;
    const sLower = (sport || "").toLowerCase();
    if (sLower === "soccer") duration = 120 * 60 * 1000;
    else if (sLower === "american-football" || sLower === "football") duration = 180 * 60 * 1000;
    else if (sLower === "baseball") duration = 180 * 60 * 1000;

    if (now < startTime) {
      const dt = new Date(startTime);
      return { label: `Upcoming - ${dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`, cls: "status-upcoming" };
    } else if (now >= startTime && now < startTime + duration) {
      return { label: "LIVE", cls: "status-live" };
    } else {
      return { label: "FINISHED", cls: "status-finished" };
    }
  };

  const isFixtureActiveStream = (fixture: Fixture): boolean => {
    if (fixture.start_time === 0) return true;
    const now = Date.now();
    const startWindow = fixture.start_time - 30 * 60 * 1000;
    let duration = 150 * 60 * 1000;
    const sLower = (fixture.sport || "").toLowerCase();
    if (sLower === "soccer") duration = 120 * 60 * 1000;
    else if (sLower === "american-football" || sLower === "football") duration = 180 * 60 * 1000;
    else if (sLower === "baseball") duration = 180 * 60 * 1000;
    const endWindow = fixture.start_time + duration;
    return now >= startWindow && now <= endWindow;
  };

  const filteredFixtures = fixtures.filter((f) => {
    if (selectedSport === "all") return true;
    const fSport = f.sport.toLowerCase();
    const sSport = selectedSport.toLowerCase();
    if (sSport === "football") {
      return fSport === "football" || fSport === "american-football";
    }
    return fSport === sSport;
  });

  return (
    <div className="tables-container">
      {/* Live notification layer */}
      <div className="notification-toast-container">
        {notifications.map((n) => (
          <div key={n.id} className="notification-toast-card">
            <div className="notification-toast-header">Leg Update</div>
            <div className="notification-toast-body">{n.message}</div>
          </div>
        ))}
      </div>

      {/* Messages */}
      {errorMsg && (
        <div className="alert-message error-alert">
          <span>{errorMsg}</span>
          <button className="alert-close" onClick={() => setErrorMsg(null)}>x</button>
        </div>
      )}
      {successMsg && (
        <div className="alert-message success-alert">
          <span>{successMsg}</span>
          <button className="alert-close" onClick={() => setSuccessMsg(null)}>x</button>
        </div>
      )}

      {/* Auth Panel */}
      {!token ? (
        <div className="auth-fullscreen-container">
          <div className="auth-card">
            <h2>The Tables</h2>
            <p className="auth-subtitle">Login to watch live streams and build pick'em parlays</p>
            <form onSubmit={handleAuth} className="auth-form">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  required
                  placeholder="Enter username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              <button type="submit" className="auth-submit-btn">
                {authMode === "login" ? "Login" : "Register"}
              </button>
            </form>
            <div className="auth-toggle">
              {authMode === "login" ? (
                <p>
                  Need an account?{" "}
                  <button onClick={() => setAuthMode("register")}>Register here</button>
                </p>
              ) : (
                <p>
                  Have an account?{" "}
                  <button onClick={() => setAuthMode("login")}>Login here</button>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="tables-main-layout">
          {/* Top Panel: User Balance, Tabs */}
          <div className="tables-top-bar">
            <div className="user-profile-header">
              <div className="user-details">
                <span className="user-avatar-text">{username?.slice(0, 2).toUpperCase()}</span>
                <div>
                  <div className="user-name">{username}</div>
                  <div className="user-balance-value">Dopamine Points: {balance.toFixed(2)} DP</div>
                </div>
              </div>
              <button className="logout-action-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>

            <div className="lobby-navigation-tabs">
              <button
                className={`lobby-nav-tab ${currentTab === "lobby" ? "active" : ""}`}
                onClick={() => setCurrentTab("lobby")}
              >
                Lobby
              </button>
              <button
                className={`lobby-nav-tab ${currentTab === "props" ? "active" : ""}`}
                onClick={() => setCurrentTab("props")}
              >
                Player Props
              </button>
              <button
                className={`lobby-nav-tab ${currentTab === "parlays" ? "active" : ""}`}
                onClick={() => setCurrentTab("parlays")}
              >
                My Parlays ({parlays.length})
              </button>
              <button
                className={`lobby-nav-tab ${currentTab === "leaderboard" ? "active" : ""}`}
                onClick={() => setCurrentTab("leaderboard")}
              >
                Leaderboard
              </button>
            </div>
          </div>

          <div className="lobby-workspace-grid">
            {/* Left Side: Lobby or Game Station */}
            <div className="workspace-main-panel">
              {currentTab === "lobby" && (
                selectedFixture ? (
                  /* Game Station: Embedded Iframe + Bet Redirect */
                  <div className="game-station-container">
                    <div className="game-station-header">
                      <button className="back-lobby-btn" onClick={() => setSelectedFixture(null)}>
                        Back to Lobby
                      </button>
                      <h3>{selectedFixture.title}</h3>
                      <span className={`status-badge-val ${getFixtureStatus(selectedFixture.start_time, selectedFixture.sport).cls}`}>
                        {getFixtureStatus(selectedFixture.start_time, selectedFixture.sport).label}
                      </span>
                    </div>

                    <div className="game-station-split">
                      {/* Video Embed Player */}
                      <div className="video-player-frame-wrapper" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {selectedFixture.streams && selectedFixture.streams.length > 0 ? (
                          <>
                            <div style={{ position: "relative", width: "100%", flex: 1 }}>
                              {selectedFixture.streams.map((stream, sIdx) => {
                                if (!loadedStreams.includes(sIdx)) return null;
                                return (
                                  <iframe
                                    key={sIdx}
                                    src={stream.embed_url}
                                    title={`${selectedFixture.title} - Channel ${sIdx + 1}`}
                                    allowFullScreen
                                    scrolling="no"
                                    className="fixture-embed-iframe"
                                    style={{
                                      display: selectedStreamIdx === sIdx ? "block" : "none",
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%"
                                    }}
                                  ></iframe>
                                );
                              })}
                            </div>
                            {selectedFixture.streams.length > 1 && (
                              <div className="stream-selector-tabs" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                                {selectedFixture.streams.map((stream, sIdx) => (
                                  <button
                                    key={sIdx}
                                    className={`stream-tab-btn ${selectedStreamIdx === sIdx ? "active" : ""}`}
                                    onClick={() => {
                                      setSelectedStreamIdx(sIdx);
                                      if (!loadedStreams.includes(sIdx)) {
                                        setLoadedStreams([...loadedStreams, sIdx]);
                                      }
                                    }}
                                    style={{
                                      padding: "6px 12px",
                                      background: selectedStreamIdx === sIdx ? "#3b82f6" : "rgba(255, 255, 255, 0.05)",
                                      color: "#fff",
                                      border: selectedStreamIdx === sIdx ? "1px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.1)",
                                      borderRadius: "6px",
                                      cursor: "pointer",
                                      fontSize: "12px",
                                      fontWeight: 600,
                                      transition: "all 0.2s ease"
                                    }}
                                  >
                                    📺 Channel {sIdx + 1} ({stream.source})
                                  </button>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="video-player-fallback">Stream unavailable</div>
                        )}
                      </div>
                      {/* Redirect to Player Props card */}
                      <div className="props-selection-section">
                        <h4>Wanna Bet?</h4>
                        {selectedFixture.player_props && selectedFixture.player_props.length > 0 ? (
                          <div className="props-scroller">
                            {selectedFixture.player_props.map((prop, propIdx) => {
                              const legInSlip = parlaySlip.find(
                                (leg) =>
                                  leg.fixture_title === selectedFixture.title &&
                                  leg.player_name === prop.player_name &&
                                  leg.prop_type === prop.prop_type
                              );

                              const propLower = prop.prop_type.toLowerCase();
                              const isStrikeoutsProp = propLower.includes("strikeout") || propLower.includes("pitching");
                              return (
                                <div 
                                  key={propIdx} 
                                  className={`prop-selection-row ${isStrikeoutsProp ? "strikeouts-prop" : ""}`}
                                >
                                  <div className="prop-row-left">
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                      <span className="prop-player-name">{prop.player_name}</span>
                                      <span className={`prop-badge ${isStrikeoutsProp ? "strikeouts-badge" : "regular-badge"}`}>
                                        {isStrikeoutsProp ? "⭐ " : ""}{prop.prop_type}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="prop-row-right">
                                    <div className="prop-line-value">{prop.line}</div>
                                    <div className="prop-selection-buttons">
                                      <button
                                        className={`prop-bet-btn ${legInSlip?.over_under === "over" ? "active" : ""}`}
                                        onClick={() => handleToggleLeg(selectedFixture, prop, "over")}
                                      >
                                        Over
                                      </button>
                                      <button
                                        className={`prop-bet-btn ${legInSlip?.over_under === "under" ? "active" : ""}`}
                                        onClick={() => handleToggleLeg(selectedFixture, prop, "under")}
                                      >
                                        Under
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="props-empty">
                            <p style={{ margin: "0", color: "#94a3b8", fontSize: "14px" }}>
                              No player props available for this game.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Lobby Fixtures List (only active streams) */
                  <div className="lobby-fixtures-container">
                    <div className="sport-category-scroller">
                      {["all", "basketball", "football", "soccer", "baseball"].map((sport) => (
                        <button
                          key={sport}
                          className={`sport-tab-btn ${selectedSport === sport ? "active" : ""}`}
                          onClick={() => setSelectedSport(sport)}
                        >
                          {sport.charAt(0).toUpperCase() + sport.slice(1)}
                        </button>
                      ))}
                    </div>

                    {loading ? (
                      <div className="retro-loader-container">
                        <div className="retro-loader-window">
                          <div className="retro-loader-title-bar">
                            <span className="retro-loader-title">System Status</span>
                            <div className="retro-loader-close">×</div>
                          </div>
                          <div className="retro-loader-body">
                            <p className="retro-loader-text">Loading fixtures and player props. Please wait...</p>
                            <div className="retro-progress-bar">
                              <div className="retro-progress-track">
                                <div className="retro-progress-block"></div>
                                <div className="retro-progress-block"></div>
                                <div className="retro-progress-block"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : filteredFixtures.filter(isFixtureActiveStream).length > 0 ? (
                      <div className="fixtures-lobby-grid">
                        {filteredFixtures.filter(isFixtureActiveStream).map((fixture, idx) => {
                          const status = getFixtureStatus(fixture.start_time, fixture.sport);
                          return (
                            <div key={idx} className="fixture-lobby-card">
                              <div className="card-header-sport">
                                <span>{fixture.sport.toUpperCase()}</span>
                                <span className={`status-badge-val ${status.cls}`}>{status.label}</span>
                              </div>
                              <div className="card-fixture-title">{fixture.title}</div>
                              <button className="watch-bet-action" onClick={() => setSelectedFixture(fixture)}>
                                Watch Stream
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="lobby-feedback">No active streams found in this category</div>
                    )}
                  </div>
                )
              )}

              {currentTab === "props" && (
                <div className="lobby-fixtures-container">
                  <div className="sport-category-scroller">
                    {["all", "basketball", "football", "soccer", "baseball"].map((sport) => (
                      <button
                        key={sport}
                        className={`sport-tab-btn ${selectedSport === sport ? "active" : ""}`}
                        onClick={() => {
                          setSelectedSport(sport);
                          setSelectedPropsFixture(null);
                        }}
                      >
                        {sport.charAt(0).toUpperCase() + sport.slice(1)}
                      </button>
                    ))}
                  </div>

                  {selectedPropsFixture && (
                    <div className="props-filter-banner">
                      <span className="props-filter-text">
                        Showing props for <strong>{selectedPropsFixture.title}</strong>.
                      </span>
                      <button
                        onClick={() => setSelectedPropsFixture(null)}
                        className="props-filter-btn"
                      >
                        Show All Games
                      </button>
                    </div>
                  )}

                  {loading ? (
                    <div className="retro-loader-container">
                      <div className="retro-loader-window">
                        <div className="retro-loader-title-bar">
                          <span className="retro-loader-title">System Status</span>
                          <div className="retro-loader-close">×</div>
                        </div>
                        <div className="retro-loader-body">
                          <p className="retro-loader-text">Loading fixtures and player props. Please wait...</p>
                          <div className="retro-progress-bar">
                            <div className="retro-progress-track">
                              <div className="retro-progress-block"></div>
                              <div className="retro-progress-block"></div>
                              <div className="retro-progress-block"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (() => {
                    const targetFixtures = selectedPropsFixture 
                      ? filteredFixtures.filter(f => f.title === selectedPropsFixture.title) 
                      : filteredFixtures;
                      
                    const allPlayerProps = targetFixtures.flatMap(fixture => 
                      (fixture.player_props || []).map(prop => ({
                        ...prop,
                        fixtureTitle: fixture.title,
                        fixtureStartTime: fixture.start_time,
                        fixtureSport: fixture.sport,
                        fixture: fixture
                      }))
                    );

                    if (allPlayerProps.length > 0) {
                      return (
                        <div className="fixtures-props-column" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                          {allPlayerProps.map((prop, propIdx) => {
                            const gameStarted = false;
                            const legInSlip = parlaySlip.find(
                              (leg) =>
                                leg.fixture_title === prop.fixtureTitle &&
                                leg.player_name === prop.player_name &&
                                leg.prop_type === prop.prop_type
                            );

                            const propLower = prop.prop_type.toLowerCase();
                            const isStrikeoutsProp = propLower.includes("strikeout") || propLower.includes("pitching");
                            return (
                              <div 
                                key={propIdx} 
                                className={`prop-selection-row ${isStrikeoutsProp ? "strikeouts-prop" : ""}`}
                                style={{ opacity: gameStarted ? 0.6 : 1 }}
                              >
                                <div className="prop-row-left">
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                                    <span className="prop-player-name">{prop.player_name}</span>
                                    <span className={`prop-badge ${isStrikeoutsProp ? "strikeouts-badge" : "regular-badge"}`}>
                                      {isStrikeoutsProp ? "⭐ " : ""}{prop.prop_type}
                                    </span>
                                  </div>
                                  <div className="prop-fixture-title-wrapper">
                                    <span className="prop-fixture-title">{prop.fixtureTitle}</span>
                                  </div>
                                </div>
                                <div className="prop-row-right">
                                  {gameStarted && (
                                    <span className="betting-locked-label">Betting Locked</span>
                                  )}
                                  <div className="prop-line-value">{prop.line}</div>
                                  <div className="prop-selection-buttons">
                                    <button
                                      className={`prop-bet-btn ${legInSlip?.over_under === "over" ? "active" : ""}`}
                                      disabled={gameStarted}
                                      onClick={() => handleToggleLeg(prop.fixture, prop, "over")}
                                    >
                                      Over
                                    </button>
                                    <button
                                      className={`prop-bet-btn ${legInSlip?.over_under === "under" ? "active" : ""}`}
                                      disabled={gameStarted}
                                      onClick={() => handleToggleLeg(prop.fixture, prop, "under")}
                                    >
                                      Under
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    } else {
                      return (
                        <div className="props-empty">
                          No player props available for the selected category
                        </div>
                      );
                    }
                  })()}
                </div>
              )}


              {currentTab === "parlays" && (
                /* My Parlays Tab */
                <div className="my-parlays-container">
                  <h3>My Placed Parlays</h3>
                  {parlays.length > 0 ? (
                    <div className="parlays-history-grid">
                      {parlays.map((parlay) => (
                        <div key={parlay.id} className={`parlay-history-card card-status-${parlay.status}`}>
                          <div className="parlay-card-header">
                            <div>
                              <div className="parlay-id-label">Parlay #{parlay.id}</div>
                              <div className="parlay-date-label">
                                {new Date(parlay.created_at || Date.now()).toLocaleString()}
                              </div>
                            </div>
                            <div className={`parlay-status-label status-badge-val status-${parlay.status}`}>
                              {parlay.status.toUpperCase()}
                            </div>
                          </div>

                          <div className="parlay-legs-history-list">
                            {parlay.legs.map((leg, lIdx) => (
                              <div key={lIdx} className={`parlay-leg-row leg-outcome-${leg.leg_status}`}>
                                <div className="leg-row-header-details">
                                  <span className="leg-player-label">{leg.player_name}</span>
                                  <span className="leg-selection-label">
                                    {leg.over_under.toUpperCase()} {leg.line} {leg.prop_type.toLowerCase().includes("strikeout") || leg.prop_type.toLowerCase().includes("pitching") ? `⭐ ${leg.prop_type}` : leg.prop_type} {leg.odds !== undefined ? `(${leg.odds > 0 ? `+${leg.odds}` : leg.odds})` : ""}
                                  </span>
                                </div>
                                <div className="leg-row-progress-value">
                                  <span>Current: {leg.current_value !== undefined ? leg.current_value : 0}</span>
                                  <span className={`leg-outcome-badge badge-${leg.leg_status}`}>
                                    {leg.leg_status?.toUpperCase() || "PENDING"}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="parlay-card-footer">
                            <div className="footer-metric">
                              <span className="metric-title">Stake</span>
                              <span className="metric-value">{parlay.stake.toFixed(2)} DP</span>
                            </div>
                            <div className="footer-metric">
                              <span className="metric-title">Multiplier</span>
                              <span className="metric-value">{parlay.odds.toFixed(2)}x</span>
                            </div>
                            <div className="footer-metric">
                              <span className="metric-title">Potential Payout</span>
                              <span className="metric-value payout-positive">
                                {(parlay.stake * parlay.odds).toFixed(2)} DP
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="lobby-feedback">You have not placed any parlays yet</div>
                  )}
                </div>
              )}
              {currentTab === "leaderboard" && (
                /* Leaderboard Tab */
                <div className="leaderboard-container">
                  <div className="leaderboard-header-row">
                    <h3>Site Leaderboard</h3>
                    <div className="leaderboard-toggle-buttons">
                      <button
                        className={`leaderboard-toggle-btn ${leaderboardType === "by_money" ? "active" : ""}`}
                        onClick={() => setLeaderboardType("by_money")}
                      >
                        Most DP
                      </button>
                      <button
                        className={`leaderboard-toggle-btn ${leaderboardType === "by_win_rate" ? "active" : ""}`}
                        onClick={() => setLeaderboardType("by_win_rate")}
                      >
                        Best Gambler (Win Rate)
                      </button>
                    </div>
                  </div>

                  {!leaderboard ? (
                    <div className="retro-loader-container">
                      <div className="retro-loader-window">
                        <div className="retro-loader-title-bar">
                          <span className="retro-loader-title">System Status</span>
                          <div className="retro-loader-close">×</div>
                        </div>
                        <div className="retro-loader-body">
                          <p className="retro-loader-text">Loading leaderboard. Please wait...</p>
                          <div className="retro-progress-bar">
                            <div className="retro-progress-track">
                              <div className="retro-progress-block"></div>
                              <div className="retro-progress-block"></div>
                              <div className="retro-progress-block"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="leaderboard-table-wrapper">
                      <table className="leaderboard-table">
                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Dopamine Points</th>
                            <th>Prop Bet Win Rate</th>
                            <th>Record (Won/Total)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(leaderboardType === "by_money" ? leaderboard.by_money : leaderboard.by_win_rate).map((entry, idx) => {
                            const isCurrentUser = entry.username === username;
                            return (
                              <tr key={idx} className={isCurrentUser ? "active-user-row" : ""}>
                                <td>{idx + 1}</td>
                                <td>
                                  {entry.username} {isCurrentUser && <span className="current-user-tag">(You)</span>}
                                </td>
                                <td>{entry.dopamine_points.toFixed(2)} DP</td>
                                <td>{entry.win_rate.toFixed(1)}%</td>
                                <td>{entry.won_legs} / {entry.total_legs}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Side: Parlay Slip */}
            <div className="workspace-slip-panel">
              <div className="parlay-slip-card">
                <h3>Parlay Slip</h3>
                {parlaySlip.length === 0 ? (
                  <div className="slip-placeholder">
                    <p>No legs selected</p>
                    <span className="slip-hint">Click Over or Under on player props to build a parlay.</span>
                  </div>
                ) : (
                  <div className="slip-content-wrapper">
                    <div className="slip-legs-list">
                      {parlaySlip.map((leg, idx) => (
                        <div key={idx} className="slip-leg-item">
                          <div className="slip-leg-left">
                            <div className="slip-leg-player">{leg.player_name}</div>
                            <div className="slip-leg-details">
                              {leg.over_under.toUpperCase()} {leg.line} {leg.prop_type.toLowerCase().includes("strikeout") || leg.prop_type.toLowerCase().includes("pitching") ? `⭐ ${leg.prop_type}` : leg.prop_type} {leg.odds !== undefined ? `(${leg.odds > 0 ? `+${leg.odds}` : leg.odds})` : ""}
                            </div>
                            <div className="slip-leg-fixture">{leg.fixture_title}</div>
                          </div>
                          <button
                            className="slip-remove-btn"
                            onClick={() =>
                              setParlaySlip(
                                parlaySlip.filter(
                                  (l) =>
                                    !(
                                      l.fixture_title === leg.fixture_title &&
                                      l.player_name === leg.player_name &&
                                      l.prop_type === leg.prop_type
                                    )
                                )
                              )
                            }
                          >
                            x
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="slip-summary-section">
                      <div className="summary-row">
                        <span>Legs:</span>
                        <span>{parlaySlip.length}</span>
                      </div>
                      <div className="summary-row">
                        <span>Multiplier:</span>
                        <span>
                          {parlaySlip.length >= 2 ? `${calculateParlayMultiplier(parlaySlip).toFixed(2)}x` : "Select min 2 legs"}
                        </span>
                      </div>

                      <div className="stake-input-group">
                        <label>Stake (DP)</label>
                        <input
                          type="number"
                          min="1"
                          max={balance}
                          value={stake}
                          onChange={(e) => setStake(Math.max(1, Number(e.target.value)))}
                        />
                      </div>

                      <div className="payout-estimate-row">
                        <span>Est. Payout:</span>
                        <span className="payout-amount">
                          {parlaySlip.length >= 2
                            ? `${(stake * calculateParlayMultiplier(parlaySlip)).toFixed(2)} DP`
                            : "0.00 DP"}
                        </span>
                      </div>

                      <button
                        className="place-bet-submit-btn"
                        disabled={parlaySlip.length < 2 || balance < stake}
                        onClick={handleSubmitParlay}
                      >
                        {balance < stake ? "Insufficient DP" : "Place Parlay"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
