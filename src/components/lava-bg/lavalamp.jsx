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
    <div className="lava-container" style={{ filter: 'url(#metaball)' }}>
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
  );
};

export default LavaLamp;