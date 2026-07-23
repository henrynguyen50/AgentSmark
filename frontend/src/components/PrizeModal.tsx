
interface PrizeModalProps {
  onClose: () => void;
}

export default function PrizeModal({ onClose }: PrizeModalProps) {
  const handleClaim = () => {
    alert("🎉 CONGRATULATIONS! You have claimed your prize: 1,000,000 SFO Bucks + Lifetime VIP Stream Access! Check your account balance.")
    onClose()
  }

  return (
    <div 
      className="ad-popup ad-prize is-visible prize-modal" 
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "320px",
        zIndex: 10000,
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
      }}
    >
      <div className="title-bar">
        <div className="title-text">🚨 1000TH VISITOR PRIZE WINNER! 🚨</div>
        <div className="title-controls">
          <span className="control-box ad-close" onClick={onClose} role="button">✕</span>
        </div>
      </div>
      <div className="ad-body" style={{ background: "#ffebf0", textAlign: "center", padding: "15px" }}>
        <div className="ad-blink blinking-text" style={{ fontSize: "18px", fontWeight: 700, color: "#ff0000", marginBottom: "10px" }}>
          🎉 CONGRATULATIONS! YOU ARE VISITOR #1000! 🎉
        </div>
        <div style={{ fontSize: "13px", margin: "10px 0", color: "#333", fontWeight: "bold" }}>
          You won 1,000,000 SFO Bucks + Lifetime VIP Stream Access!
        </div>
        <button 
          className="tb-btn btn-orange" 
          onClick={handleClaim}
          style={{ 
            display: "block", 
            margin: "15px auto 5px", 
            width: "90%", 
            textAlign: "center",
            padding: "8px 0",
            height: "auto",
            fontSize: "14px"
          }}
        >
          👉 CLAIM YOUR PRIZE NOW! 👈
        </button>
      </div>
    </div>
  )
}
