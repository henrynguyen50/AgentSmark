
interface VisitorCounterProps {
  visitorCount: number;
  onSetTo999: () => void;
  onShowPrize: () => void;
}

export default function VisitorCounter({
  visitorCount,
  onSetTo999,
  onShowPrize,
}: VisitorCounterProps) {
  const digits = String(visitorCount).padStart(6, "0").split("")
  const isMilestone = visitorCount > 0 && visitorCount % 1000 === 0

  return (
    <div className="visitor-counter-wrapper">
      <div className="visitor-counter-container">
        <span className="visitor-counter-label">YOU ARE VISITOR #</span>
        <div className="digital-display">
          {digits.map((digit, idx) => (
            <span key={idx} className="digital-digit">
              {digit}
            </span>
          ))}
        </div>
        <span className="visitor-counter-subtext">
          TODAY! 🎯 The 1000th visitor gets a prize!
        </span>
        <button className="xp-button debug-btn" onClick={onSetTo999}>
          Set to 999
        </button>
      </div>

      {isMilestone && (
        <div className="prize-winner-banner" onClick={onShowPrize} role="button">
          <span className="blinking-text">
            🎉 YOU ARE THE 1000TH VISITOR! CLICK HERE TO CLAIM YOUR PRIZE! 🎉
          </span>
        </div>
      )}
    </div>
  )
}
