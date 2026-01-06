import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="relative w-full h-screen bg-[#141414] overflow-hidden">
      {/* SVG Container for the Perspective Lines */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="none"
      >
        <g stroke="#f97316" strokeWidth="1" strokeOpacity="0.6">
          {/* The lines originate from a single point (approx 25% from left, 95% from top).
            Adjust the x1/y1 coordinates to move the 'origin' point.
          */}
          <line x1="250" y1="950" x2="-100" y2="0" />
          <line x1="250" y1="950" x2="-100" y2="400" />
          <line x1="250" y1="950" x2="-100" y2="700" />
          <line x1="250" y1="950" x2="-100" y2="950" />
          <line x1="250" y1="950" x2="1100" y2="1050" />
          <line x1="250" y1="950" x2="1100" y2="1200" />
          <line x1="250" y1="950" x2="300" y2="1200" />
        </g>
      </svg>
    </div>
  );
};

export default GeometricBackground;