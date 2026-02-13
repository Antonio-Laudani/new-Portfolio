import { useState, useEffect } from 'react';

const LavaLamp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* SVG Filter - MODIFICATO per Safari */}
      <svg
        width="1"
        height="1"
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <filter
            id="metaball"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur"/>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 22 -8"
            />
          </filter>
        </defs>
      </svg>

      {/* Lava Container - con will-change e trasformazione 3D per aiutare Safari */}
      <div
        className="lava-container"
        style={{
          WebkitFilter: 'url(#metaball)',
          filter: 'url(#metaball)',
          willChange: 'transform, filter', // Suggerisce a Safari di ottimizzare
          transform: 'translateZ(0)',       // Forza accelerazione hardware
        }}
      >
        {!isMobile ? (
          /* Desktop blobs */
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
          /* Mobile bubbles - ora la bolla madre è un div esplicito, non uno pseudo-elemento */
          <>
            <div className="mother-bubble"></div>
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