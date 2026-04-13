"use client"

import { useState } from "react"
import "../styles/QueryPopup.css"

const CATEGORIES = ["Sport", "Movie", "TV"]

interface StreamResult {
  title: string
  embed_url: string
}

export default function QueryPopup() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [agentMessage, setAgentMessage] = useState<string | null>(null)
  const [results, setResults] = useState<StreamResult[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCategory) return

    setLoading(true)
    setAgentMessage("Searching for streams...")
    setResults([])

    try {
      const response = await fetch("http://127.0.0.1:8000/watch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategory.toLowerCase(),
          query: input.trim(),
        }),
      })

      const data = await response.json()

      // Expects: { results: [{ title, embed_url }]
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

  return (
    <div className="popup-overlay">
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
              placeholder="Ask me for a team, movie, or TV show..."
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

          {results.length > 0 && (
            <div className="results-list">
              {results.map((result, i) => (
                <div key={i} className="result-card">
                  <button
                    type="button"
                    className="watch-button"
                    onClick={() => window.open(result.embed_url, "_blank")}
                  >
                                        <p className="result-title">{result.title.toUpperCase()}</p>
 
                  </button>
                  <br></br>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}