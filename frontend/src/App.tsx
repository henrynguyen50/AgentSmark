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

        {/* Windows XP Standard Buttons Bar */}
        <div className="xp-toolbar-buttons">
          <button className="xp-nav-btn">← Back</button>
          <button className="xp-nav-btn">Forward →</button>
          <button className="xp-nav-btn">✖ Stop</button>
          <button className="xp-nav-btn">🔄 Refresh</button>
          <button className="xp-nav-btn">🏠 Home</button>
          <div className="xp-separator"></div>
          <button className="xp-nav-btn">🔍 Search</button>
          <button className="xp-nav-btn">⭐ Favorites</button>
          <button className="xp-nav-btn">📅 History</button>
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
          <div className="xp-links-button">Best of the Web ▾</div>
        </div>

        {/* --- RETRO TOOLBARS STACK --- */}
        <div className="retro-toolbars-stack">
          {/* Yahoo/Links Bar */}
          <div className="toolbar-row yahoo-bar">
            <span className="bold-brand text-purple">Yahoo!</span>
            <span className="tb-link">Amazon</span>
            <span className="tb-link">eBay</span>
            <span className="tb-link">MapQuest</span>
            <span className="tb-link">Weather</span>
            <span className="tb-link">Stocks</span>
            <span className="tb-link">News</span>
            <span className="tb-link text-purple">» More</span>
          </div>

          {/* Ask Jeeves Toolbar */}
          <div className="toolbar-row ask-jeeves-bar">
            <div className="tb-brand"><span className="emoji">🎩</span> Ask Jeeves <span className="badge-red">UPDATED!</span></div>
            <span className="tb-label">Ask:</span>
            <input type="text" defaultValue="how to get rich quick on the internet" className="tb-input" />
            <button className="tb-btn btn-green">🔍 Ask!</button>
            <select className="tb-select bg-purple"><option>All the Web</option></select>
            <span className="tb-link ml-auto">🔒 FREE Ringtones</span>
            <span className="tb-link">🔮 Horoscopes</span>
            <span className="tb-link text-yellow">📱 Win an iPod!</span>
          </div>

          {/* BonziBUDDY Toolbar */}
          <div className="toolbar-row bonzi-bar">
            <div className="tb-brand"><span className="emoji">🐵</span> BonziBUDDY <span className="status-dot"></span> <span className="text-green">ONLINE</span></div>
            <span className="tb-bubble">"Hello! I'm Bonzi! Want to hear a joke?"</span>
            <button className="tb-action-btn btn-green">▶ Talk!</button>
            <button className="tb-action-btn">🎵 Songs</button>
            <button className="tb-action-btn">🎮 Games</button>
            <span className="free-trial-tag ml-auto">v4.2 FREE Trial — 15 days left</span>
          </div>

          {/* WeatherBug Toolbar */}
          <div className="toolbar-row weatherbug-bar">
            <div className="tb-brand"><span className="emoji">🐛</span> WeatherBug <span className="badge-red">LIVE</span></div>
            <div className="weather-temp">73°F</div>
            <span className="weather-info">☀️ Clear — San Francisco, CA</span>
            <span className="weather-stat">💧 64%</span>
            <span className="weather-stat">💨 12mph W</span>
            <span className="weather-stat">🌡️ DP 58°</span>
            <button className="tb-action-btn mini-btn">📅 10-Day</button>
            <button className="tb-action-btn mini-btn text-yellow">⚡ Storm Alerts!</button>
            <span className="tb-link ml-auto text-underline">↓ FREE Desktop Widget</span>
          </div>

          {/* Smiley Central Toolbar */}
          <div className="toolbar-row smiley-bar">
            <div className="tb-brand"><span className="emoji">😀</span> Smiley Central <span className="badge-red">10,000+ FREE!</span></div>
            <div className="smiley-strip">
              <span>😀</span><span>😂</span><span>😍</span><span>😎</span><span>😜</span><span>🤑</span><span>🤔</span><span>🤢</span><span>😮</span><span>👅</span><span>💋</span><span>🤪</span>
            </div>
            <span className="tb-link ml-auto text-pink">🧱 Wallpapers</span>
            <span className="tb-link text-cyan">🖱️ FREE Cursors!</span>
            <span className="tb-link text-gold">✨ NEW Animations!</span>
          </div>

          {/* GATOR eWallet Toolbar */}
          <div className="toolbar-row gator-bar">
            <div className="tb-brand"><span className="emoji">🐊</span> GATOR eWallet <span className="status-dot"></span></div>
            <span className="tb-info-text">🔒 17 passwords saved • 3 cards on file</span>
            <button className="tb-action-btn btn-green">📄 Fill Form</button>
            <button className="tb-action-btn">🗄️ Vault</button>
            <button className="tb-action-btn btn-orange">🎁 Offers</button>
            <span className="tb-link ml-auto text-gold bold-text">🎁 YOU QUALIFY FOR 0% APR! CLICK HERE!</span>
          </div>

          {/* MyWebSearch Toolbar */}
          <div className="toolbar-row mywebsearch-bar">
            <div className="tb-brand"><span className="emoji">🔍</span> MyWebSearch <span className="badge-red rounded-pill">Fun Web Products</span></div>
            <input type="text" defaultValue="free music downloads no virus" className="tb-input wide-input" />
            <button className="tb-btn btn-grey">🔍 Search</button>
            <select className="tb-select bg-teal"><option>Web</option></select>
            <span className="tb-link ml-auto text-cyan">🖥️ Screensavers</span>
            <span className="tb-link text-cyan">🖱️ Cursors</span>
            <span className="tb-link text-yellow">🎁 YOU WON! CLICK!</span>
          </div>
        </div>
        {/* --- END RETRO TOOLBARS STACK --- */}

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
            "Welcome to the SFO!  Stream Sports, TV, & Movies! Click The Tables for bookie."
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