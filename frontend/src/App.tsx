import { useState } from "react"
import "./App.css"
import QueryPopup from "./components/QueryPopup"
import LiveSports from "./components/LiveSports"
import { inject } from '@vercel/analytics'

inject()

function App() {
  const [activeTab, setActiveTab] = useState<"search" | "live">("search")

  return (
    <div className="app-container">
      <header className="website-header">
        <div className="header-content">
          <div className="logo-section">
            <span className="logo-icon">⚡</span>
            <h1>SFO</h1>
          </div>
          <nav className="header-navigation">
            <button
              onClick={() => setActiveTab("search")}
              className={`nav-link ${activeTab === "search" ? "active" : ""}`}
            >
              Search Streams
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`nav-link ${activeTab === "live" ? "active" : ""}`}
            >
              Live Sports
            </button>
          </nav>
        </div>
      </header>

      <main className="website-main">
        <section className="hero">
          <h2>
            {activeTab === "search"
              ? "Search Sports, TV, & Movies for Streams"
              : "Active Live Sports Stream Coverage"}
          </h2>
          <p>
            {activeTab === "search"
              ? "Select a category and search away!"
              : "Watch real-time live games directly from multiple sources."}
          </p>
        </section>

        {activeTab === "search" ? <QueryPopup /> : <LiveSports />}
      </main>

      <footer className="website-footer">
        <p>© 2026 SFO. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
