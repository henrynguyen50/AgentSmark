"use client"

import { useState } from "react"
import "../styles/QueryPopup.css"

const CATEGORIES = ["Sport", "Movie", "TV"]

export default function QueryPopup() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [agentMessage, setAgentMessage] = useState<string | null>(null)
  const [streamUrl, setStreamUrl] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if(!selectedCategory) return

    setLoading(true)
    setAgentMessage("Checking for your stream...")
    setStreamUrl(null)

    try {
      const response = await fetch(
        "https://agent-smark-backend.onrender.com/watch",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category: selectedCategory.toLowerCase(),
            query: input.trim(),
          }),
        }
      )

      const data = await response.json()
      console.log("Response:", data)

      if (data.embed_url) {
        setStreamUrl(data.embed_url)
        setAgentMessage("Your stream is ready! Click below to watch ➤")
      } else {
        setAgentMessage("Sorry, no valid stream found")
      }

      setInput("")
      setSelectedCategory(null)
    } catch (error) {
      console.error("Error fetching stream:", error)
      setAgentMessage("An error occurred. Please try again.")
    } finally {
      setLoading(false);
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
                className={`category-chip ${
                  selectedCategory === category ? "active" : ""
                }`}
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
              {loading ? "Thinking..." : "Submit"}
            </button>
          </div>

          {agentMessage && <p className="agent-message">{agentMessage}</p>}

          {streamUrl && (
            <button
              className="stream-ready-button"
              onClick={() => window.open(streamUrl, "_blank")}
            >
              Watch Now ➤
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
