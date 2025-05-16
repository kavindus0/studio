
"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';

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
        <Image
          src="https://ecsc-uok.com/assets/ecsc_logo_header-b0c5d86f.png"
          alt="ECSC UOK Logo"
          width={80}
          height={80}
          className="h-20 w-20 object-contain" // Adjusted for size similar to old SVG
          priority // Preload this image as it's critical for LCP
          data-ai-hint="club logo"
        />
      </div>
      <p className="mt-4 text-xl text-foreground tracking-wider opacity-0 animate-slideInFromBottomSlight delay-500">Loading ECS Experience...</p>
      <p className="mt-2 text-sm text-muted-foreground opacity-0 animate-slideInFromBottomSlight delay-700">University of Kelaniya</p>
    </div>
  );
};

export default Preloader;
