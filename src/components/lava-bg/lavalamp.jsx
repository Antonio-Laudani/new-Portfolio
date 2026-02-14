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
      {/* SVG Filter 
    Aggiungi questo nel tuo HTML */}
<svg style="display: none;">
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
          /* Mobile bubbles */
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