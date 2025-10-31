import "./App.css"
import QueryPopup from "./components/QueryPopup"

function App() {
  return (
    <div className="app-container">
      <header className="website-header">
        <div className="header-content">
          <h1>Agent Smark</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="website-main">
        <section className="hero">
          <h2>Search Sports, TV, & Movies</h2>
          <p>Ask anything and get a stream</p>
        </section>

        <QueryPopup />

        <section className="content-section">
          <h3>Featured</h3>
          <p>Use the search above to find a stream for your favorite sports, TV shows, and movies.</p>
        </section>
      </main>

      
    </div>
  )
}

export default App
