"use client"

import type React from "react"

import { useState } from "react"
import "../styles/QueryPopup.css"

const CATEGORIES = ["Sport", "TV", "Movie"]

export default function QueryPopup() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedCategory || !input.trim()) {
      alert("Please select a category and enter a query")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategory,
          input: input.trim(),
        }),
      })

      const data = await response.json()
      console.log("Response:", data)
      setInput("")
      setSelectedCategory(null)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Left Action Buttons */}
        <div className="button-group left">
          <button className="icon-button" title="Microphone audio capture">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
            <span className="tooltip">Microphone audio capture</span>
          </button>
        </div>

        {/* Category Selection & Input */}
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
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="main-input"
              disabled={!selectedCategory || loading}
            />
          </div>
        </form>

        
      </div>
    </div>
  )
}
