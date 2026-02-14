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
      {/* SVG Filter per metaball effect */}
      <svg style={{ display: 'none' }} role="presentation" aria-hidden="true">
        <defs>
          <filter id="metaball">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Lava Container */}
      <div className="lava-container">
        {!isMobile ? (
          // Desktop blobs
          <>
            <div className="blob blob1" />
            <div className="blob blob2" />
            <div className="blob blob3" />
            <div className="blob blob4" />
            <div className="blob blob5" />
            <div className="blob blob6" />
            <div className="blob blob7" />
          </>
        ) : (
          // Mobile bubbles
          <>
            <div className="bubble-mobile bubble-1" />
            <div className="bubble-mobile bubble-2" />
            <div className="bubble-mobile bubble-3" />
          </>
        )}
      </div>
    </>
  );
};

export default LavaLamp;