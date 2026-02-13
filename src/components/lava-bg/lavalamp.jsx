import { useState, useEffect } from 'react';

const LavaLamp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* SVG Filter - sempre presente */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="metaball">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix in="blur" type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 30 -10" />
          </filter>
        </defs>
      </svg>

      {/* Lava Container - unico filtro per tutte le bolle */}
      <div
        className="lava-container"
        style={{
          WebkitFilter: 'url(#metaball)',
          filter: 'url(#metaball)',
          transform: 'translate3d(0,0,0)', // forza Safari
        }}
      >
        {!isMobile ? (
          <>
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
            <div className="blob blob4"></div>
            <div className="blob blob5"></div>
            <div className="blob blob6"></div>
            <div className="blob blob7"></div>
          </>
        ) : (
          <>
            <div className="bubble-mobile bubble-1"></div>
            <div className="bubble-mobile bubble-2"></div>
            <div className="bubble-mobile bubble-3"></div>
          </>
        )}
      </div>
    </>
  );
};

export default LavaLamp;
