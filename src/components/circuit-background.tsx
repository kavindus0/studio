
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
                stroke-width: 1; /* Thinner lines for a more subtle effect */
                fill: none;
                stroke-linecap: round;
                animation: draw 20s linear infinite;
                opacity: 0; /* Start invisible, fade in with animation */
              }
              .circuit-node {
                fill: hsl(var(--accent)); /* Uses theme's accent color */
                animation: pulse 3s ease-in-out infinite alternate;
                opacity: 0.7;
              }
              @keyframes draw {
                0% { stroke-dashoffset: 1200; opacity: 0; }
                10% { opacity: 0.6; } /* Fade in */
                80% { opacity: 0.6; } /* Hold visibility */
                100% { stroke-dashoffset: 0; opacity: 0; } /* Complete draw & fade out */
              }
              @keyframes pulse {
                from { opacity: 0.3; r: 2; }
                to { opacity: 0.7; r: 4; }
              }
            `}
          </style>
        </defs>

        {/* Abstract animated lines - Replace with your actual circuit tree diagram paths */}
        <path className="circuit-line" d="M100 1080 C 300 900, 500 700, 700 500 C 900 300, 1100 100, 1300 50" strokeDasharray="1200" strokeDashoffset="1200"/>
        <path className="circuit-line" d="M1820 1080 C 1620 900, 1420 700, 1220 500 C 1020 300, 820 100, 620 50" strokeDasharray="1200" strokeDashoffset="1200" style={{animationDelay: '-10s'}}/>
        
        <path className="circuit-line" d="M0 540 C 480 640, 960 440, 1440 240 C 1720 140, 1920 50" strokeDasharray="1200" strokeDashoffset="1200" style={{animationDelay: '-5s'}}/>
        <path className="circuit-line" d="M1920 540 C 1440 440, 960 640, 480 840 C 240 940, 0 1030" strokeDasharray="1200" strokeDashoffset="1200" style={{animationDelay: '-15s'}}/>

        <path className="circuit-line" d="M50 50 C 500 200, 300 800, 960 1030" strokeDasharray="1200" strokeDashoffset="1200" style={{animationDelay: '-2.5s'}}/>
        <path className="circuit-line" d="M1870 50 C 1420 200, 1620 800, 960 1030" strokeDasharray="1200" strokeDashoffset="1200" style={{animationDelay: '-12.5s'}}/>

        {/* Pulsing nodes - Replace with your actual node positions */}
        <circle className="circuit-node" cx="1300" cy="50" r="3"/>
        <circle className="circuit-node" cx="620" cy="50" r="3" style={{animationDelay: '-0.5s'}}/>
        <circle className="circuit-node" cx="700" cy="500" r="3" style={{animationDelay: '-1s'}}/>
        <circle className="circuit-node" cx="1220" cy="500" r="3" style={{animationDelay: '-1.5s'}}/>
        <circle className="circuit-node" cx="960" cy="540" r="4" style={{animationDelay: '-2s'}}/> {/* Center-ish node */}
        <circle className="circuit-node" cx="480" cy="840" r="3" style={{animationDelay: '-2.5s'}}/>
        <circle className="circuit-node" cx="1440" cy="240" r="3" style={{animationDelay: '-3s'}}/>
        <circle className="circuit-node" cx="960" cy="1030" r="3" style={{animationDelay: '-3.5s'}}/>
      </svg>
    </div>
  );
};

export default CircuitBackground;
