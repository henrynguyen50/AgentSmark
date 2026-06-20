import { useState, useEffect } from "react";
import "../styles/LiveSports.css";

interface StreamSource {
  source: string;
  source_id: string;
  embed_url: string;
}

interface GroupedFixture {
  title: string;
  streams: StreamSource[];
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://agent-smark-backend.onrender.com";

export default function LiveSports() {
  const [fixtures, setFixtures] = useState<GroupedFixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [logos, setLogos] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/streams`);
        if (!res.ok) {
          throw new Error("Failed to fetch streams");
        }
        const data: GroupedFixture[] = await res.json();
        setFixtures(data);
      } catch (err: any) {
        console.error("Error fetching streams:", err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);

  // Fetch team logos from TheSportsDB
  useEffect(() => {
    if (fixtures.length === 0) return;

    const uniqueTeams = new Set<string>();
    fixtures.forEach((fixture) => {
      const parts = fixture.title.split(/\s+vs\.?\s+/i);
      parts.forEach((part) => {
        const team = part.trim();
        if (team) {
          uniqueTeams.add(team);
        }
      });
    });

    const fetchLogo = async (teamName: string) => {
      try {
        const res = await fetch(
          `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${encodeURIComponent(teamName)}`
        );
        if (!res.ok) return null;
        const data = await res.json();
        if (data && data.teams && data.teams.length > 0) {
          return data.teams[0].strBadge || data.teams[0].strLogo || null;
        }
      } catch (err) {
        console.error("Error fetching logo for team: " + teamName, err);
      }
      return null;
    };

    const fetchAllLogos = async () => {
      const logoMap: Record<string, string> = {};
      const teamList = Array.from(uniqueTeams);
      
      // Fetch in batches to avoid overwhelming the API
      const batchSize = 5;
      for (let i = 0; i < teamList.length; i += batchSize) {
        const batch = teamList.slice(i, i + batchSize);
        await Promise.all(
          batch.map(async (team) => {
            const logo = await fetchLogo(team);
            if (logo) {
              logoMap[team] = logo;
            }
          })
        );
      }
      setLogos((prev) => ({ ...prev, ...logoMap }));
    };

    fetchAllLogos();
  }, [fixtures]);

  const getTeamInitials = (name: string) => {
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, "").trim();
    const words = clean.split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return clean.substring(0, 2).toUpperCase();
  };

  const getTeamColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash) % 360;
    return `linear-gradient(135deg, hsl(${h}, 70%, 45%) 0%, hsl(${(h + 40) % 360}, 80%, 30%) 100%)`;
  };

  const filteredFixtures = fixtures.filter((f) =>
    f.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="live-sports-container">
      <div className="live-sports-header">
        <h2 className="section-title">Live Sports Coverage</h2>
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Filter live matches (e.g. Chelsea, Lakers)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sports-search-input"
          />
        </div>
      </div>

      {loading ? (
        <div className="loader-container">
          <div className="premium-loader"></div>
          <p>Fetching active live sports streams...</p>
        </div>
      ) : error ? (
        <div className="error-card">
          <p className="error-text">Failed to load live sports: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Retry
          </button>
        </div>
      ) : filteredFixtures.length === 0 ? (
        <div className="no-fixtures-card">
          <p>No active streams match your filter or are currently broadcasting.</p>
        </div>
      ) : (
        <div className="fixtures-grid">
          {filteredFixtures.map((fixture, idx) => {
            const parts = fixture.title.split(/\s+vs\.?\s+/i);
            const isVs = parts.length >= 2;
            const team1 = parts[0]?.trim();
            const team2 = parts[1]?.trim();

            return (
              <div key={idx} className="fixture-card">
                {isVs ? (
                  <div className="teams-vs-container">
                    <div className="team-column left-team">
                      {logos[team1] ? (
                        <img
                          src={logos[team1]}
                          alt={team1}
                          className="team-logo"
                          loading="lazy"
                          onError={() => {
                            setLogos((prev) => {
                              const updated = { ...prev };
                              delete updated[team1];
                              return updated;
                            });
                          }}
                        />
                      ) : (
                        <div
                          className="team-logo-fallback"
                          style={{ background: getTeamColor(team1) }}
                        >
                          {getTeamInitials(team1)}
                        </div>
                      )}
                      <span className="team-name">{team1}</span>
                    </div>

                    <div className="vs-divider">
                      <span className="vs-badge">VS</span>
                    </div>

                    <div className="team-column right-team">
                      {logos[team2] ? (
                        <img
                          src={logos[team2]}
                          alt={team2}
                          className="team-logo"
                          loading="lazy"
                          onError={() => {
                            setLogos((prev) => {
                              const updated = { ...prev };
                              delete updated[team2];
                              return updated;
                            });
                          }}
                        />
                      ) : (
                        <div
                          className="team-logo-fallback"
                          style={{ background: getTeamColor(team2) }}
                        >
                          {getTeamInitials(team2)}
                        </div>
                      )}
                      <span className="team-name">{team2}</span>
                    </div>
                  </div>
                ) : (
                  <div className="single-event-container">
                    <div className="event-icon">🏆</div>
                    <h3 className="event-title">{fixture.title}</h3>
                  </div>
                )}

                <div className="stream-actions-container">
                  <h4 className="streams-label">Available Channels ({fixture.streams.length})</h4>
                  <div className="stream-buttons-grid">
                    {fixture.streams.map((stream, sIdx) => (
                      <a
                        key={sIdx}
                        href={stream.embed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="stream-button"
                      >
                        <span className="play-icon">▶</span>
                        Stream #{sIdx + 1}
                        <span className="source-tag">{stream.source}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
