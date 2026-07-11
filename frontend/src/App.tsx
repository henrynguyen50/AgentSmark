import React, { useState } from "react"
import "./App.css"
import QueryPopup from "./components/QueryPopup"
import LiveSports from "./components/LiveSports"
import Tables from "./components/Tables"
import { inject } from '@vercel/analytics'


declare global {
  interface Window {
    triggerAdAction?: (category: string, queryText: string) => void;
  }
}
inject()

function App() {
  const [activeTab, setActiveTab] = useState<"search" | "live" | "tables">("search")
  const [closedPopups, setClosedPopups] = useState<Record<string, boolean>>({})

  const closePopup = (id: string) => setClosedPopups(prev => ({ ...prev, [id]: true }))
  const restoreAllPopups = () => setClosedPopups({})

  const anyAdClosed = Object.keys(closedPopups).some(k => closedPopups[k])

  const handleAdAction = (category: string, queryText: string) => {
    setActiveTab("search")
    if (window.triggerAdAction) {
      window.triggerAdAction(category, queryText)
    }
  }

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
            {anyAdClosed && (
              <button 
                onClick={restoreAllPopups} 
                className="restore-ads-btn"
                style={{
                  fontFamily: 'Tahoma, Arial, sans-serif',
                  fontSize: '11px',
                  padding: '2px 6px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                  background: '#ece9d8',
                  border: '1px solid #7f9db9'
                }}
              >
                Restore Closed Ads / Alerts
              </button>
            )}
          </div>
        </footer>
      </div>
      <div id="popup-layer" aria-hidden="true">
        {!closedPopups["ad-popup-1"] && (
          <div className="ad-popup ad-prize is-visible" id="ad-popup-1" style={{ inset: "8px auto auto 1266px", width: "208px", transform: "rotate(0.50487deg)", zIndex: 1005, "--ad-rotate": "0.504870596345619deg" } as React.CSSProperties}>
            <div className="title-bar">
              <div className="title-text">🚨 Live Sports Tip! 🚨</div>
              <div className="title-controls">
                <span className="control-box ad-close" onClick={() => closePopup("ad-popup-1")}>✕</span>
              </div>
            </div>
            <div className="ad-body" onClick={() => handleAdAction("Sport", "Lakers")}>
              <div className="ad-blink" style={{ fontSize: "20px", fontWeight: 700, color: "#ff0000", textAlign: "center" }}>🎉 HOT STREAMS! 🎉</div>
              <div style={{ textAlign: "center", fontSize: "13px", margin: "6px" }}>
                Don't miss the big game! Search for Sports by entering a<br />
                <span style={{ fontSize: "18px", fontWeight: 700, color: "#000080" }}>team name</span>
              </div>
              <div className="ad-blink" style={{ textAlign: "center", fontWeight: 700, color: "#000080" }}>
                like <code>Lakers</code> or <code>Man City</code> directly!
              </div>
              <span className="tb-btn tb-btn-green" style={{ display: "block", margin: "6px auto", width: "80%", textAlign: "center" }}>👉 CLAIM STREAM! 👈</span>
            </div>
          </div>
        )}

        {!closedPopups["ad-popup-2"] && (
          <div className="ad-popup ad-perf is-visible" id="ad-popup-2" style={{ inset: "143px auto auto 142px", width: "208px", transform: "rotate(2.85164deg)", zIndex: 1002, "--ad-rotate": "2.8516424118323895deg" } as React.CSSProperties}>
            <div className="title-bar">
              <div className="title-text">⚠️ System Alert</div>
              <div className="title-controls">
                <span className="control-box ad-close" onClick={() => closePopup("ad-popup-2")}>✕</span>
              </div>
            </div>
            <div className="ad-body" onClick={() => handleAdAction("Movie", "The Furious 2025")}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "24px", color: "#cc0000" }}>⚠️</span>
                <div style={{ fontWeight: 700, fontSize: "13px" }}>SEARCH BY YEAR!</div>
              </div>
              <div style={{ fontSize: "11px", margin: "4px 0" }}>
                Include the <strong>year</strong> (e.g. <code>The Furious 2025</code> or <code>Inception 2010</code>) to find precise matches! Don't have to do it however!
              </div>
              <div style={{ background: "#fff", border: "1px inset #808080", height: "16px", margin: "4px 0" }}>
                <div className="ad-progress-fill" style={{ background: "linear-gradient(90deg,#000080,#1084d0)", height: "100%" }}></div>
              </div>
              <span className="tb-btn" style={{ display: "block", margin: "4px auto", width: "80%", textAlign: "center" }}>🔎 SEARCH 2025</span>
            </div>
          </div>
        )}

        {!closedPopups["ad-popup-3"] && (
          <div className="ad-popup ad-iq is-visible" id="ad-popup-3" style={{ inset: "88px auto auto 571px", width: "361px", transform: "rotate(1.26686deg)", zIndex: 1007, "--ad-rotate": "1.266855986235969deg" } as React.CSSProperties}>
            <div className="title-bar">
              <div className="title-text">🧠 PC IQ Test 2000</div>
              <div className="title-controls">
                <span className="control-box ad-close" onClick={() => closePopup("ad-popup-3")}>✕</span>
              </div>
            </div>
            <div className="ad-body" onClick={() => handleAdAction("TV", "attack on titan")}>
              <div className="ad-blink" style={{ fontSize: "16px", fontWeight: 700, textAlign: "center", color: "#ffd700" }}>⭐ BINGE WATCH HELPER ⭐</div>
              <div style={{ textAlign: "center", fontSize: "11px", margin: "4px", color: "#fff" }}>
                TV searches support optional <strong>Season</strong>, <strong>Episode</strong>, and <strong>Year</strong> filters.
              </div>
              <div style={{ textAlign: "center", fontSize: "11px", margin: "4px", color: "#fff" }}>
                • <code>attack on titan</code> (base show)<br />
                • <code>cyberpunk s1 ep1</code>
              </div>
              <span className="tb-btn" style={{ background: "#ffd700", color: "#4a148c", display: "block", margin: "4px auto", width: "70%", textAlign: "center", fontWeight: 700 }}>📺 SEARCH ATTACK ON TITAN</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App