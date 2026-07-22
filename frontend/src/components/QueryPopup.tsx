"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/QueryPopup.css"

declare global {
  interface Window {
    triggerAdAction?: (category: string, queryText: string) => void;
  }
}

const CATEGORIES = ["Movie", "TV", "Sports"]

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://agent-smark-backend.onrender.com";

interface StreamResult {
  title: string
  embed_url: string
  poster_path?: string
  backdrop_path?: string
  overview?: string
  release_date?: string
  first_air_date?: string
}

interface TrendingItem {
  id: number | string
  title: string
  media_type: "movie" | "tv" | "sport"
  poster_path: string | null
  backdrop_path?: string | null
  overview?: string | null
  release_date?: string | null
  vote_average: number
  embed_url: string
  sport?: string
}

export default function QueryPopup() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [agentMessage, setAgentMessage] = useState<string | null>(null)
  const [results, setResults] = useState<StreamResult[]>([])
  const [lastSearchCategory, setLastSearchCategory] = useState<string | null>(null)
  
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([])
  const [trendingLoading, setTrendingLoading] = useState(true)
  const [isTrendingHovered, setIsTrendingHovered] = useState(false)
  const [isSportsHovered, setIsSportsHovered] = useState(false)
  const trendingScrollRef = useRef<HTMLDivElement>(null)
  const sportsScrollRef = useRef<HTMLDivElement>(null)

  const movieTvItems = trendingItems.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv"
  )
  const sportsItems = trendingItems.filter(
    (item) => item.media_type === "sport"
  )

  const getSportEmoji = (sport: string = "") => {
    const s = sport.toLowerCase()
    if (s.includes("basket") || s === "nba") return "🏀"
    if (s.includes("soccer") || s.includes("football") || s === "laliga" || s === "premier league" || s === "champions league") return "⚽"
    if (s.includes("nfl") || s.includes("gridiron") || s.includes("american football")) return "🏈"
    if (s.includes("baseball") || s === "mlb") return "⚾"
    if (s.includes("fight") || s.includes("ufc") || s.includes("mma") || s.includes("boxing")) return "🥊"
    if (s.includes("tennis")) return "🎾"
    if (s.includes("golf")) return "⛳"
    return "🏆"
  }

  useEffect(() => {
    let active = true
    const fetchTrending = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/trending`)
        if (response.ok) {
          const data = await response.json()
          if (active && data.results) {
            setTrendingItems(data.results)
          }
        }
      } catch (err) {
        console.error("Error loading trending content:", err)
      } finally {
        if (active) {
          setTrendingLoading(false)
        }
      }
    }
    fetchTrending()
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (movieTvItems.length === 0 || isTrendingHovered) return

    const container = trendingScrollRef.current
    if (!container) return

    const intervalId = setInterval(() => {
      if (container) {
        container.scrollLeft += 1
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 2) {
          container.scrollLeft = 0
        }
      }
    }, 25)

    return () => {
      clearInterval(intervalId)
    }
  }, [movieTvItems, isTrendingHovered])

  useEffect(() => {
    if (sportsItems.length === 0 || isSportsHovered) return

    const container = sportsScrollRef.current
    if (!container) return

    const intervalId = setInterval(() => {
      if (container) {
        container.scrollLeft += 1
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 2) {
          container.scrollLeft = 0
        }
      }
    }, 25)

    return () => {
      clearInterval(intervalId)
    }
  }, [sportsItems, isSportsHovered])

  const scrollRow = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    const container = ref.current
    if (!container) return
    const scrollAmount = container.clientWidth * 0.5
    container.scrollTo({
      left: direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount,
      behavior: "smooth"
    })
  }
  useEffect(() => {
    window.triggerAdAction = (category: string, queryText: string) => {
      let mappedCategory = category
      if (category.toLowerCase() === "sport") {
        mappedCategory = "Sports"
      }
      setSelectedCategory(mappedCategory)
      setInput(queryText)
    }
    return () => {
      window.triggerAdAction = undefined
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCategory) return

    setLoading(true)
    setAgentMessage("Searching for streams...")
    setResults([])
    
    let categoryLower = selectedCategory.toLowerCase()
    if (categoryLower === "sports") {
      categoryLower = "sport"
    }
    setLastSearchCategory(categoryLower)

    try {
      const response = await fetch(`${API_BASE_URL}/watch`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: categoryLower,
          query: input.trim(),
        }),
      })

      const searchQuery = input.trim()
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        setResults(data.results)
        setAgentMessage(`"${searchQuery}" - ${data.results.length} result${data.results.length > 1 ? "s" : ""} found.`)
      } else {
        setAgentMessage(`"${searchQuery}" - no streams found`)
      }

      setInput("")
      setSelectedCategory(null)
    } catch (error) {
      console.error("Error fetching stream:", error)
      setAgentMessage("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }


  const getTeamInitials = (name: string) => {
    const clean = name.replace(/[^a-zA-Z0-9\s]/g, "").trim()
    const words = clean.split(/\s+/)
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase()
    }
    return clean.substring(0, 2).toUpperCase()
  }

  const getTeamColor = (name: string) => {
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    const h = Math.abs(hash) % 360
    return `linear-gradient(135deg, hsl(${h}, 70%, 45%) 0%, hsl(${(h + 40) % 360}, 80%, 30%) 100%)`
  }

  const renderSportsThumbnail = (item: TrendingItem) => {
    const parts = item.title.split(/\s+vs\.?\s+/i)
    const isVs = parts.length >= 2
    const team1 = parts[0]?.trim()
    const team2 = parts[1]?.trim()
    const emoji = getSportEmoji(item.sport || "")
    
    if (isVs) {
      return (
        <div 
          className="trending-card-sport-poster vs-matchup"
          style={{ background: getTeamColor(item.title) }}
        >
          <div className="sport-matchup-initials">
            <span className="team-initial" style={{ background: getTeamColor(team1) }}>
              {getTeamInitials(team1)}
            </span>
            <span className="vs-divider">VS</span>
            <span className="team-initial" style={{ background: getTeamColor(team2) }}>
              {getTeamInitials(team2)}
            </span>
          </div>
          <span className="sport-icon-float">{emoji}</span>
        </div>
      )
    } else {
      return (
        <div 
          className="trending-card-sport-poster single-event"
          style={{ background: getTeamColor(item.title) }}
        >
          <span className="event-title-initials">{getTeamInitials(item.title)}</span>
          <span className="sport-icon-float">{emoji}</span>
        </div>
      )
    }
  }

  return (
    <div className="popup-overlay">
      <div className="query-flow-container">
        <div className="popup-container">
          <form onSubmit={handleSubmit} className="center-section">
            <div className="category-chips">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`category-chip ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                placeholder={
                  selectedCategory 
                    ? `Search for ${selectedCategory === "Sports" ? "a match or team" : `a ${selectedCategory.toLowerCase()}`}...` 
                    : "First select a category above..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="main-input"
                disabled={!selectedCategory || loading}
              />
              <button
                type="submit"
                className="submit-button"
                disabled={!selectedCategory || !input.trim() || loading}
              >
                {loading ? "Searching..." : "Submit"}
              </button>
            </div>

            {agentMessage && <p className="agent-message">{agentMessage}</p>}
          </form>
        </div>

        {/* Trending Section */}
        {!trendingLoading && movieTvItems.length > 0 && (
          <div className="trending-section">
            <div className="trending-header toolbar-row mywebsearch-bar">
              <div className="toolbar-left">
                <span className="toolbar-logo">🔍</span>
                <span className="trending-title-text">MovieLand</span>
              </div>
              <div className="toolbar-items">
                <button type="button" className="toolbar-btn"><span className="btn-icon">🏠</span>Search</button>
                <button type="button" className="toolbar-btn"><span className="btn-icon">🍿</span>Popcorn</button>
                <button type="button" className="toolbar-btn"><span className="btn-icon">⭐</span>Favorites</button>
                <button type="button" className="toolbar-btn"><span className="btn-icon">💬</span>Chat</button>
              </div>
              <div className="trending-controls">
                <span className="trending-status-badge">Auto-scrolling (Hover to pause)</span>
                <div className="trending-nav-buttons">
                  <button 
                    type="button" 
                    className="trending-nav-btn" 
                    onClick={() => scrollRow(trendingScrollRef, "left")}
                    title="Scroll Left"
                  >
                    ◀
                  </button>
                  <button 
                    type="button" 
                    className="trending-nav-btn" 
                    onClick={() => scrollRow(trendingScrollRef, "right")}
                    title="Scroll Right"
                  >
                    ▶
                  </button>
                </div>
              </div>
            </div>
            <div 
              className="trending-scroll-container"
              ref={trendingScrollRef}
              onMouseEnter={() => setIsTrendingHovered(true)}
              onMouseLeave={() => setIsTrendingHovered(false)}
            >
              {movieTvItems.map((item) => {
                const rating = item.vote_average ? item.vote_average.toFixed(1) : "0.0"
                const mediaLabel = item.media_type === "movie" ? "MOVIE" : "TV"
                return (
                  <a
                    key={item.id}
                    href={item.embed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-card"
                  >
                    <div className="trending-poster-container">
                      {item.poster_path ? (
                        <img 
                          src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} 
                          alt={item.title} 
                          className="trending-poster"
                          loading="lazy"
                        />
                      ) : (
                        <div className="trending-poster-fallback">
                          <span className="fallback-icon">🎬</span>
                        </div>
                      )}
                      <span className={`trending-badge media-${item.media_type}`}>
                        {mediaLabel}
                      </span>
                      <span className="trending-badge rating-badge">
                        ⭐ {rating}
                      </span>
                    </div>
                    <div className="trending-card-title" title={item.title}>
                      {item.title}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {!trendingLoading && (
          <div className="trending-section">
            <div className="trending-header toolbar-row bonzi-bar">
              <div className="toolbar-left">
                <span className="toolbar-logo">🐵</span>
                <span className="trending-title-text">SportsZone</span>
              </div>
              <div className="toolbar-items">
                <button type="button" className="toolbar-btn"><span className="btn-icon">🍌</span>Bonzi</button>
                <button type="button" className="toolbar-btn"><span className="btn-icon">🏀</span>Play</button>
                <button type="button" className="toolbar-btn"><span className="btn-icon">🔴</span>Live</button>
                <button type="button" className="toolbar-btn"><span className="btn-icon">🎮</span>Arcade</button>
              </div>
              {sportsItems.length > 0 && (
                <div className="trending-controls">
                  <span className="trending-status-badge">Auto-scrolling (Hover to pause)</span>
                  <div className="trending-nav-buttons">
                    <button 
                      type="button" 
                      className="trending-nav-btn" 
                      onClick={() => scrollRow(sportsScrollRef, "left")}
                      title="Scroll Left"
                    >
                      ◀
                    </button>
                    <button 
                      type="button" 
                      className="trending-nav-btn" 
                      onClick={() => scrollRow(sportsScrollRef, "right")}
                      title="Scroll Right"
                    >
                      ▶
                    </button>
                  </div>
                </div>
              )}
            </div>
            {sportsItems.length > 0 ? (
              <div 
                className="trending-scroll-container"
                ref={sportsScrollRef}
                onMouseEnter={() => setIsSportsHovered(true)}
                onMouseLeave={() => setIsSportsHovered(false)}
              >
                {sportsItems.map((item) => {
                  const mediaLabel = item.sport ? item.sport.toUpperCase() : "SPORTS"
                  return (
                    <a
                      key={item.id}
                      href={item.embed_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="trending-card"
                    >
                      <div className="trending-poster-container">
                        {renderSportsThumbnail(item)}
                        <span className="trending-badge media-sport">
                          {mediaLabel}
                        </span>
                        <span className="trending-badge rating-badge">
                          🔴 LIVE
                        </span>
                      </div>
                      <div className="trending-card-title" title={item.title}>
                        {item.title}
                      </div>
                    </a>
                  )
                })}
              </div>
            ) : (
              <div className="trending-empty-state">
                No active sports streams currently broadcasting
              </div>
            )}
          </div>
        )}

         {loading && (
          <div className="retro-loader-container" style={{ marginTop: "20px" }}>
            <div className="retro-loader-window">
              <div className="retro-loader-title-bar">
                <span className="retro-loader-title">System Status</span>
                <div className="retro-loader-close">×</div>
              </div>
              <div className="retro-loader-body">
                <p className="retro-loader-text">Searching for streams... Please wait...</p>
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
        )}
        {results.length > 0 && (
          <div className="results-wrapper">
            {lastSearchCategory === "sport" ? (
              <div className="sports-results-grid">
                {results.map((result, i) => {
                  const parts = result.title.split(/\s+vs\.?\s+/i)
                  const isVs = parts.length >= 2
                  const team1 = parts[0]?.trim()
                  const team2 = parts[1]?.trim()

                  return (
                    <div key={i} className="sport-result-card">
                      {isVs ? (
                        <div className="sport-card-teams">
                          <div className="sport-card-team">
                            <div className="sport-card-fallback" style={{ background: getTeamColor(team1) }}>
                              {getTeamInitials(team1)}
                            </div>
                            <span className="sport-card-teamname">{team1}</span>
                          </div>
                          <span className="sport-card-vs">VS</span>
                          <div className="sport-card-team">
                            <div className="sport-card-fallback" style={{ background: getTeamColor(team2) }}>
                              {getTeamInitials(team2)}
                            </div>
                            <span className="sport-card-teamname">{team2}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="sport-card-single">
                          <span className="sport-single-icon">⚽</span>
                          <span className="sport-single-title">{result.title}</span>
                        </div>
                      )}
                      <a
                        href={result.embed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-now-button"
                      >
                        Watch Live Feed
                      </a>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="tmdb-results-grid">
                {results.map((result, i) => {
                  const year = (result.release_date || result.first_air_date || "").substring(0, 4)
                  return (
                    <div key={i} className="tmdb-result-card">
                      <div className="tmdb-poster-container">
                        {result.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                            alt={result.title}
                            className="tmdb-poster"
                            loading="lazy"
                          />
                        ) : (
                          <div className="tmdb-poster-fallback">
                            <span className="fallback-icon">🎬</span>
                            <span className="fallback-title">{result.title}</span>
                          </div>
                        )}
                      </div>
                      <div className="tmdb-info">
                        <div className="tmdb-title-row">
                          <h3 className="tmdb-title">{result.title}</h3>
                          {year && <span className="tmdb-year">{year}</span>}
                        </div>
                        {result.overview && (
                          <p className="tmdb-overview">
                            {result.overview.length > 140
                              ? result.overview.substring(0, 137) + "..."
                              : result.overview}
                          </p>
                        )}
                        <a
                          href={result.embed_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="watch-now-button"
                        >
                          Watch Now
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
    </div>
  </div>
  )
}