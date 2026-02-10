const LavaLamp = () => {
  return (
    <>
      {/* SVG Filter per l'effetto metaball */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="metaball">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur"/>
          <feColorMatrix in="blur" mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 22 -8" />
        </filter>
      </svg>

      {/* Lava Container */}
      <div className="lava-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>
        <div className="blob blob6"></div>
        <div className="blob blob7"></div>
        
        {/* Mobile bubbles */}
        <div className="bubble-mobile bubble-1"></div>
        <div className="bubble-mobile bubble-2"></div>
        <div className="bubble-mobile bubble-3"></div>
      </div>
    </>
  );
};

export default LavaLamp;