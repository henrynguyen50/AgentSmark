import { useState, useEffect } from "react";
import "../styles/LiveSports.css";
import { N64TeamLogo, N64SportIcon, N64Defs } from "./N64SportsIcons";
import "../styles/N64SportsIcons.css";
interface StreamSource {
  source: string;
  source_id: string;
  embed_url: string;
}

interface GroupedFixture {
  title: string;
  sport?: string;
  start_time?: number;
  streams: StreamSource[];
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://agent-smark-backend.onrender.com";

export default function LiveSports() {
  const [fixtures, setFixtures] = useState<GroupedFixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState<string>("all");

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
      } catch (err) {
        console.error("Error fetching streams:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);



  const formatStartTime = (startTimeMs?: number) => {
    if (!startTimeMs) return null;
    const now = Date.now();
    const startDate = new Date(startTimeMs);
    const timeString = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    
    if (now >= startTimeMs) {
      return `Started at ${timeString}`;
    } else {
      return `Starts at ${timeString}`;
    }
  };

  const filteredFixtures = fixtures.filter((f) => {
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesSport = false;
    if (selectedSport === "all") {
      matchesSport = true;
    } else if (selectedSport === "soccer" || selectedSport === "football") {
      matchesSport = !!(f.sport && (f.sport.toLowerCase() === "soccer" || f.sport.toLowerCase() === "football"));
    } else {
      matchesSport = !!(f.sport && f.sport.toLowerCase() === selectedSport.toLowerCase());
    }
    return matchesSearch && matchesSport;
  });

  return (
    <div className="live-sports-container">
      <N64Defs />
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
      
      <div className="sport-category-scroller">
        {["all", "basketball", "football", "soccer", "american-football", "baseball"].map((sport) => (
          <button
            key={sport}
            className={`sport-tab-btn ${selectedSport === sport ? "active" : ""}`}
            onClick={() => setSelectedSport(sport)}
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <N64SportIcon sport={sport} size={16} />
            {sport === "all"
              ? "All Sports"
              : sport === "american-football"
              ? "NFL"
              : sport.charAt(0).toUpperCase() + sport.slice(1)}
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
              <p className="retro-loader-text">Fetching active live sports streams... Please wait...</p>
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
            const now = Date.now();
            const isLive = !fixture.start_time || now >= fixture.start_time;

            return (
              <div key={idx} className="fixture-card">
                <div className="card-header">
                  <div className="card-header-left">
                    {isLive ? (
                      <div className="live-badge-container">
                        <span className="live-dot"></span>
                        <span className="live-text">LIVE</span>
                      </div>
                    ) : (
                      <div className="upcoming-badge-container">
                        <span className="upcoming-dot"></span>
                        <span className="upcoming-text">UPCOMING</span>
                      </div>
                    )}
                    {fixture.start_time ? (
                      <span className="fixture-time-badge">
                        {formatStartTime(fixture.start_time)}
                      </span>
                    ) : null}
                  </div>
                  <span className="channels-count">
                    {fixture.streams.length} {fixture.streams.length === 1 ? "Channel" : "Channels"}
                  </span>
                </div>

                {isVs ? (
                  <div className="teams-vs-container">
                    <div className="team-column left-team">
                      <N64TeamLogo teamName={team1} sport={fixture.sport} size={64} />
                      <span className="team-name">{team1}</span>
                    </div>

                    <div className="vs-divider">
                      <span className="vs-badge">VS</span>
                    </div>

                    <div className="team-column right-team">
                      <N64TeamLogo teamName={team2} sport={fixture.sport} size={64} />
                      <span className="team-name">{team2}</span>
                    </div>
                  </div>
                ) : (
                  <div className="single-event-container">
                    <N64SportIcon sport={fixture.sport || "all"} size={56} />
                    <h3 className="event-title">{fixture.title}</h3>
                  </div>
                )}

                <div className="stream-actions-container">
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
