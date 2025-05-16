
"use client";

import React from 'react';

const CircuitBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Sit behind the content
        overflow: 'hidden',
      }}
      aria-hidden="true" // Decorative background
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1920 1080" // Common desktop resolution, adjust as needed
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .circuit-line {
                stroke: hsl(var(--primary)); /* Uses theme's primary blue */
                stroke-width: 1.5; /* Slightly thicker lines */
                fill: none;
                stroke-linecap: round;
                animation: draw 12s linear infinite; /* Faster: was 20s */
                opacity: 0; /* Start invisible, fade in with animation */
              }
              .circuit-node {
                fill: hsl(var(--accent)); /* Uses theme's accent color */
                animation: pulse 1.8s ease-in-out infinite alternate; /* Faster: was 3s */
                opacity: 0.85; /* Slightly more opaque nodes */
              }
              @keyframes draw {
                0% { stroke-dashoffset: var(--dashoffset-start, 1200); opacity: 0; }
                10% { opacity: 0.8; } /* Fade in, increased opacity */
                80% { opacity: 0.8; } /* Hold visibility, increased opacity */
                100% { stroke-dashoffset: 0; opacity: 0; } /* Complete draw & fade out */
              }
              @keyframes pulse {
                from { opacity: 0.5; r: 2.5; } /* Increased base opacity */
                to { opacity: 0.9; r: 4.5; }   /* Increased pulse opacity */
              }
            `}
          </style>
        </defs>

        {/* Abstract animated lines - More paths for complexity */}
        <path className="circuit-line" d="M100 1080 C 300 900, 500 700, 700 500 C 900 300, 1100 100, 1300 50" strokeDasharray="1200" style={{animationDelay: '-1s', '--dashoffset-start': '1200px'}}/>
        <path className="circuit-line" d="M1820 1080 C 1620 900, 1420 700, 1220 500 C 1020 300, 820 100, 620 50" strokeDasharray="1200" style={{animationDelay: '-11s', '--dashoffset-start': '1200px'}}/>
        
        <path className="circuit-line" d="M0 540 C 480 640, 960 440, 1440 240 C 1720 140, 1920 50" strokeDasharray="1200" style={{animationDelay: '-6s', '--dashoffset-start': '1200px'}}/>
        <path className="circuit-line" d="M1920 540 C 1440 440, 960 640, 480 840 C 240 940, 0 1030" strokeDasharray="1200" style={{animationDelay: '-16s', '--dashoffset-start': '1200px'}}/>

        <path className="circuit-line" d="M50 50 C 500 200, 300 800, 960 1030" strokeDasharray="1200" style={{animationDelay: '-3.5s', '--dashoffset-start': '1200px'}}/>
        <path className="circuit-line" d="M1870 50 C 1420 200, 1620 800, 960 1030" strokeDasharray="1200" style={{animationDelay: '-13.5s', '--dashoffset-start': '1200px'}}/>

        {/* Additional paths for more complexity */}
        <path className="circuit-line" d="M10 10 C 200 300, 400 100, 600 540 C 800 980, 1000 800, 1200 1050" strokeDasharray="1500" style={{animationDelay: '-2s', '--dashoffset-start': '1500px'}} />
        <path className="circuit-line" d="M1910 10 C 1720 300, 1520 100, 1320 540 C 1120 980, 920 800, 720 1050" strokeDasharray="1500" style={{animationDelay: '-12s', '--dashoffset-start': '1500px'}} />
        <path className="circuit-line" d="M960 0 C 860 200, 1060 200, 960 400 C 860 600, 1060 600, 960 800 C 860 1000, 1060 1000, 960 1080" strokeDasharray="1080" style={{animationDelay: '-7.5s', '--dashoffset-start': '1080px'}} />
        <path className="circuit-line" d="M0 100 C 640 150, 1280 50, 1920 100" strokeDasharray="1920" style={{animationDelay: '-4.5s', '--dashoffset-start': '1920px'}} />
        <path className="circuit-line" d="M0 980 C 640 930, 1280 1030, 1920 980" strokeDasharray="1920" style={{animationDelay: '-14.5s', '--dashoffset-start': '1920px'}} />

        {/* New more complex / organic path */}
        <path 
          className="circuit-line" 
          d="M100,540 C300,180 450,920 700,540 S900,120 1100,540 S1300,960 1500,540 S1700,180 1820,540" 
          strokeDasharray="2500" 
          style={{animationDelay: '-8.5s', '--dashoffset-start': '2500px'}}
        />


        {/* Pulsing nodes - More nodes for complexity */}
        <circle className="circuit-node" cx="1300" cy="50" r="3" style={{animationDelay: '-0.2s'}}/>
        <circle className="circuit-node" cx="620" cy="50" r="3" style={{animationDelay: '-0.7s'}}/>
        <circle className="circuit-node" cx="700" cy="500" r="3" style={{animationDelay: '-1.2s'}}/>
        <circle className="circuit-node" cx="1220" cy="500" r="3" style={{animationDelay: '-1.7s'}}/>
        <circle className="circuit-node" cx="960" cy="540" r="4" style={{animationDelay: '-2.2s'}}/> 
        <circle className="circuit-node" cx="480" cy="840" r="3" style={{animationDelay: '-2.7s'}}/>
        <circle className="circuit-node" cx="1440" cy="240" r="3" style={{animationDelay: '-3.2s'}}/>
        <circle className="circuit-node" cx="960" cy="1030" r="3" style={{animationDelay: '-3.7s'}}/>

        {/* Additional nodes */}
        <circle className="circuit-node" cx="300" cy="900" r="2.5" style={{animationDelay: '-4.2s'}}/>
        <circle className="circuit-node" cx="1620" cy="900" r="2.5" style={{animationDelay: '-4.7s'}}/>
        <circle className="circuit-node" cx="480" cy="640" r="3" style={{animationDelay: '-5.2s'}}/>
        <circle className="circuit-node" cx="1440" cy="440" r="3" style={{animationDelay: '-5.7s'}}/>
        <circle className="circuit-node" cx="500" cy="200" r="2.5" style={{animationDelay: '-6.2s'}}/>
        <circle className="circuit-node" cx="1420" cy="200" r="2.5" style={{animationDelay: '-6.7s'}}/>
        <circle className="circuit-node" cx="960" cy="200" r="3.5" style={{animationDelay: '-7.2s'}}/>
        <circle className="circuit-node" cx="960" cy="800" r="3.5" style={{animationDelay: '-7.7s'}}/>
        <circle className="circuit-node" cx="200" cy="300" r="3" style={{animationDelay: '-8.2s'}}/>
        <circle className="circuit-node" cx="1720" cy="300" r="3" style={{animationDelay: '-8.7s'}}/>
        
        {/* Nodes along the new complex path - approximate positions */}
        <circle className="circuit-node" cx="100" cy="540" r="2.5" style={{animationDelay: '-8.6s'}}/>
        <circle className="circuit-node" cx="700" cy="540" r="3" style={{animationDelay: '-9.0s'}}/>
        <circle className="circuit-node" cx="1100" cy="540" r="3" style={{animationDelay: '-9.4s'}}/>
        <circle className="circuit-node" cx="1500" cy="540" r="3" style={{animationDelay: '-9.8s'}}/>
        <circle className="circuit-node" cx="1820" cy="540" r="2.5" style={{animationDelay: '-10.2s'}}/>

      </svg>
    </div>
  );
};

export default CircuitBackground;

    