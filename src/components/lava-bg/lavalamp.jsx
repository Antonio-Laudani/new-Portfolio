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
      {/* SVG Filter - FIX SAFARI */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1"
        width="0" 
        height="0" 
        style={{ position: 'absolute', width: 0, height: 0 }}
      >
        <defs>
          <filter id="metaball" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur"/>
            <feColorMatrix 
              in="blur" 
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" 
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      {/* Lava Container */}
      <div className="lava-container">
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