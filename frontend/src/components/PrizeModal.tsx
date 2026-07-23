
interface PrizeModalProps {
  onClose: () => void;
}
export default function PrizeModal({ onClose }: PrizeModalProps) {
  const handleClaim = () => {
    alert("♣️ ♥️ JACKPOT CLAIMED! ♠️ ♦️\n\nCongratulations! 1,000,000 SFO Bucks have been credited to your balance!\nEnjoy your victory at The Tables! 🃏")
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
        width: "350px",
        zIndex: 10000,
        boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        border: "3px solid #c0c0c0",
        background: "#c0c0c0",
        padding: "2px",
      }}
    >
      <div 
        className="title-bar" 
        style={{ 
          background: "#000080", 
          borderBottom: "2px solid #c0c0c0",
          padding: "3px 5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div 
          className="title-text" 
          style={{ 
            color: "#ffffff", 
            fontWeight: "bold",
            fontFamily: "Tahoma, sans-serif",
            fontSize: "13px"
          }}
        >
          🃏 WINDOWS SOLITAIRE GRAND PRIZE! 🃏
        </div>
        <div className="title-controls">
          <span 
            className="control-box ad-close" 
            onClick={onClose} 
            role="button" 
            style={{ 
              color: "#000000", 
              borderColor: "#000000",
              cursor: "pointer",
              padding: "0 4px",
              border: "1px solid #ffffff",
              background: "#c0c0c0",
              fontSize: "11px",
              fontWeight: "bold",
              boxShadow: "inset -1px -1px #000, inset 1px 1px #fff"
            }}
          >
            ✕
          </span>
        </div>
      </div>
      <div 
        className="ad-body" 
        style={{ 
          background: "#076324", 
          textAlign: "center", 
          padding: "20px", 
          boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.5)" 
        }}
      >
        <div 
          className="ad-blink blinking-text" 
          style={{ 
            fontSize: "20px", 
            fontWeight: 700, 
            color: "#ffffff", 
            marginBottom: "12px", 
            textShadow: "0 0 8px #000000" 
          }}
        >
          ♣️ ♥️ GRAND PAYOUT! ♠️ ♦️
        </div>
        
        {/* Visual representation of a Solitaire winning hand (Royal Flush 10, J, Q, K, A of Spades) */}
        <div className="solitaire-card-fan" style={{ display: "flex", justifyContent: "center", margin: "25px 0", height: "90px", position: "relative" }}>
          {[
            { val: "10", rot: -15, tx: -30, ty: 5 },
            { val: "J", rot: -7.5, tx: -15, ty: 1 },
            { val: "Q", rot: 0, tx: 0, ty: 0 },
            { val: "K", rot: 7.5, tx: 15, ty: 1 },
            { val: "A", rot: 15, tx: 30, ty: 5 }
          ].map((card, i) => (
            <div 
              key={i} 
              className={`solitaire-fan-card card-${card.val}`}
              style={{
                transform: `rotate(${card.rot}deg) translate(${card.tx}px, ${card.ty}px)`,
                position: "absolute",
                width: "50px",
                height: "75px",
                background: "#ffffff",
                border: "1px solid #000000",
                borderRadius: "4px",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "4px",
                boxSizing: "border-box",
                zIndex: i + 1,
              }}
            >
              <div style={{ fontSize: "10px", textAlign: "left", lineHeight: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontWeight: "bold", color: "#000000" }}>{card.val}</span>
                <span style={{ fontSize: "8px" }}>♠️</span>
              </div>
              <div style={{ fontSize: "18px", alignSelf: "center", color: "#000000" }}>♠️</div>
              <div style={{ fontSize: "10px", textAlign: "right", lineHeight: 1, display: "flex", flexDirection: "column", alignItems: "center", transform: "rotate(180deg)" }}>
                <span style={{ fontWeight: "bold", color: "#000000" }}>{card.val}</span>
                <span style={{ fontSize: "8px" }}>♠️</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: "13px", margin: "15px 0 10px", color: "#ffffff", fontFamily: "Tahoma, sans-serif" }}>
          You are visitor #1000 and hit the ultimate payout of<br />
          <strong style={{ fontSize: "16px", color: "#ffffff", textShadow: "1px 1px 2px #000" }}>1,000,000 SFO BUCKS</strong>!
        </div>
        <button 
          className="solitaire-claim-button" 
          onClick={handleClaim}
          style={{ 
            display: "block", 
            margin: "20px auto 5px", 
            width: "95%", 
            textAlign: "center",
            padding: "10px 0",
            height: "auto",
            fontSize: "11px",
            fontWeight: "bold",
            background: "#c0c0c0",
            borderTop: "2px solid #fff",
            borderLeft: "2px solid #fff",
            borderRight: "2px solid #808080",
            borderBottom: "2px solid #808080",
            color: "#000000",
            fontFamily: "Tahoma, sans-serif",
            cursor: "pointer",
            boxShadow: "1px 1px 0px #000"
          }}
        >
          🎰 CLAIM YOUR 1,000,000 SFO BUCKS PAYOUT 🎰
        </button>
      </div>
    </div>
  )
}
