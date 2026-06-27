"use client"

import { useState } from "react"
import "../styles/QueryPopup.css"

const CATEGORIES = ["Sport", "Movie", "TV"]

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

export default function QueryPopup() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [agentMessage, setAgentMessage] = useState<string | null>(null)
  const [results, setResults] = useState<StreamResult[]>([])
  const [lastSearchCategory, setLastSearchCategory] = useState<string | null>(null)
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCategory) return

    setLoading(true)
    setAgentMessage("Searching for streams...")
    setResults([])
    
    const categoryLower = selectedCategory.toLowerCase()
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

      const data = await response.json()

      if (data.results && data.results.length > 0) {
        setResults(data.results)
        setAgentMessage(`${data.results.length} result${data.results.length > 1 ? "s" : ""} found.`)
      } else {
        setAgentMessage("Sorry, no streams found")
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
                    ? `Search for ${selectedCategory === "Sport" ? "a match or team" : `a ${selectedCategory.toLowerCase()}`}...` 
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