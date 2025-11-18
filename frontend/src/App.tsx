import "./App.css"
import QueryPopup from "./components/QueryPopup"
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <div className="app-container">
      <header className="website-header">
        <div className="header-content">
          <h1>AGENT LNKR</h1>
          
        </div>
      </header>

      <main className="website-main">
        <section className="hero">
          <h2>Search Sports, TV, & Movies for Streams</h2>
          <p>Select a category and search away!</p>
        </section>

        <QueryPopup />
        <Analytics />

      </main>

      
    </div>
  )
}

export default App
