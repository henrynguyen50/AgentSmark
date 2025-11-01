"use client"

import type React from "react"

import { useState } from "react"
import "../styles/QueryPopup.css"

const CATEGORIES = ["Sport", "Movie", "TV"]

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
      const response = await fetch("http://127.0.0.1:8000/watch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategory.toLowerCase(),
          query: input.trim(),
        }),
      })

      const data = await response.json()
      console.log("Response:", data)
      if (data.embed_url) {
        window.open(data.embed_url, "_blank")
    }
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
      placeholder="Ask me for a team, movie, or tv show..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="main-input"
      disabled={!selectedCategory || loading}
    />
    {/* Submit button */}
    <button
      type="submit"
      className="submit-button"
      disabled={!selectedCategory || !input.trim() || loading}
    >
      {loading ? "Searching..." : "Submit"}
    </button>
  </div>
</form>

        
      </div>
    </div>
  )
}
