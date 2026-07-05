import React, { useState } from "react"
import "./App.css"
import QueryPopup from "./components/QueryPopup"
import LiveSports from "./components/LiveSports"
import Tables from "./components/Tables"
import { inject } from '@vercel/analytics'

inject()

function App() {
  const [activeTab, setActiveTab] = useState<"search" | "live" | "tables">("search")

  return (
    <div className="app-container">
      <div className="xp-window">
        {/* Windows XP Title Bar */}
        <div className="xp-title-bar">
          <div className="xp-title-text">
            <span className="xp-title-icon">⚡</span>
            SFO Stream Portal - Microsoft Internet Explorer
          </div>
          <div className="xp-title-buttons">
            <button className="xp-title-btn xp-btn-min">_</button>
            <button className="xp-title-btn xp-btn-max">🗖</button>
            <button className="xp-title-btn xp-btn-close">X</button>
          </div>
        </div>

        {/* Windows XP Menu Bar */}
        <div className="xp-menu-bar">
          <span className="xp-menu-item"><u>F</u>ile</span>
          <span className="xp-menu-item"><u>E</u>dit</span>
          <span className="xp-menu-item"><u>V</u>iew</span>
          <span className="xp-menu-item"><u>F</u>avorites</span>
          <span className="xp-menu-item"><u>T</u>ools</span>
          <span className="xp-menu-item"><u>H</u>elp</span>
        </div>

        {/* Windows XP Address Bar */}
        <div className="xp-address-bar">
          <span className="xp-address-label">Address</span>
          <div className="xp-address-input-wrapper">
            <span className="xp-address-icon">🌐</span>
            <input
              type="text"
              className="xp-address-input"
              value={`http://sfo-sports.net/${activeTab}`}
              readOnly
            />
          </div>
          <button className="xp-go-button">Go</button>
        </div>

        {/* Retro Tabs strip */}
        <div className="retro-tabs-strip">
          <button
            onClick={() => setActiveTab("search")}
            className={`retro-tab ${activeTab === "search" ? "active" : ""}`}
          >
            🔍 Search Portal
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`retro-tab ${activeTab === "live" ? "active" : ""}`}
          >
            📺 Live Broadcasts
          </button>
          <button
            onClick={() => setActiveTab("tables")}
            className={`retro-tab ${activeTab === "tables" ? "active" : ""}`}
          >
            🎰 The Tables
          </button>
        </div>

        {/* Marquee Banner */}
        <div className="retro-marquee-container">
          {React.createElement(
            "marquee",
            { className: "retro-marquee", scrollamount: "4" },
            "⚡ Welcome to the SFO Portal! ⚡ Stream Sports, TV, & Movies. Claim dopamine heartbeat points. Build pick'em parlays. Best viewed in Internet Explorer 6.0!"
          )}
        </div>

        <main className="website-main">
          {activeTab !== "tables" && (
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
          )}

          {activeTab === "search" ? (
            <QueryPopup />
          ) : activeTab === "live" ? (
            <LiveSports />
          ) : (
            <Tables />
          )}
        </main>

        <footer className="website-footer">
          <div className="footer-top">
            <p>© 2026 SFO. All rights reserved.</p>
          </div>
          <div className="web-badges">
            <div className="web-badge ie-badge">Internet Explorer 6.0</div>
            <div className="web-badge notepad-badge">Made with Notepad</div>
            <div className="web-badge vite-badge">Vite Powered</div>
            <div className="web-badge valid-badge">HTML 4.01 Valid</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
