
"use client";
import React, { useEffect } from 'react';

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoaded) onLoaded();
    }, 2500); // Duration before onLoaded is called
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background animate-fadeOut [animation-delay:2500ms]" 
      style={{ animationFillMode: 'forwards' }}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="animate-pulseOnce">
        <svg 
          className="w-20 h-20 text-primary" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m0-12a9 9 0 11-18 0 9 9 0 0118 0zM12 15a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      </div>
      <p className="mt-4 text-xl text-foreground tracking-wider">Loading ECS Experience...</p>
      <p className="mt-2 text-sm text-muted-foreground">University of Kelaniya</p>
    </div>
  );
};

export default Preloader;
