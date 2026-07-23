
interface VisitorCounterProps {
  visitorCount: number;
  onShowPrize: () => void;
}

export default function VisitorCounter({
  visitorCount,
  onShowPrize,
}: VisitorCounterProps) {
  const digits = String(visitorCount).padStart(6, "0").split("")
  const isMilestone = visitorCount > 0 && visitorCount % 1000 === 0

  return (
    <div className="visitor-counter-wrapper solitaire-theme">
      <div className="visitor-counter-container">
        <span className="visitor-counter-label">♣️ ♥️ JACKPOT VISITOR # ♠️ ♦️</span>
        <div className="digital-display solitaire-reels">
          {digits.map((digit, idx) => {
            const suits = ["♠️", "♥️", "♣️", "♦️"];
            const suit = suits[idx % 4];
            const digitColor = idx % 2 === 0 ? "red" : "black";
            return (
              <div key={idx} className="solitaire-card-digit">
                <span className="card-suit-top">{suit}</span>
                <span className="card-digit-value" style={{ color: digitColor }}>
                  {digit}
                </span>
                <span className="card-suit-bottom">{suit}</span>
              </div>
            );
          })}
        </div>
        <span className="visitor-counter-subtext solitaire-subtext">
          🃏 GET TO VISITOR #1000 FOR THE GRAND SOLITAIRE PAYOUT! 🃏
        </span>
      </div>

      {isMilestone && (
        <div className="prize-winner-banner solitaire-jackpot-banner" onClick={onShowPrize} role="button">
          <span className="blinking-text solitaire-marquee-text">
            ♣️ ♦️ 🃏 CONGRATULATIONS! YOU ARE VISITOR #1000! CLICK HERE TO CLAIM YOUR 1,000,000 SFO BUCKS! 🃏 ♥️ ♠️
          </span>
        </div>
      )}
    </div>
  )
}
