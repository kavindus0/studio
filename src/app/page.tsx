
"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Preloader from '@/components/preloader';
import { WebsiteIcon, LinkedInIcon, FacebookIcon } from '@/components/icons';
import { AiChatbot } from '@/components/ai-chatbot';

export default function OpenDayPage() {
  const [showContent, setShowContent] = useState(false);
  const [isPreloaderInternalLoadDone, setIsPreloaderInternalLoadDone] = useState(false);

  const handlePreloaderLoaded = () => {
    setIsPreloaderInternalLoadDone(true);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden'; 
    }
  }, []);
  
  useEffect(() => {
    if (isPreloaderInternalLoadDone) {
      const contentTimer = setTimeout(() => {
        setShowContent(true);
        if (typeof window !== 'undefined') {
          document.body.style.overflow = 'auto'; 
        }
      }, 500); 
      return () => clearTimeout(contentTimer);
    }
  }, [isPreloaderInternalLoadDone]);

  useEffect(() => {
    if (showContent) {
      const sections = document.querySelectorAll('.section-animate');
      sections.forEach((section, sectionIndex) => {
        setTimeout(() => {
          section.classList.remove('opacity-0');
          section.classList.add('animate-fadeIn'); 

          const childrenToAnimate = section.querySelectorAll('.animate-child-item');
          childrenToAnimate.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.remove('opacity-0');
              child.classList.add('animate-slideInFromBottomSlight'); 
            }, childIndex * 100); 
          });
        }, sectionIndex * 250); 
      });
    }
  }, [showContent]);

  return (
    <>
      <Head>
        <title>ECS Open Day 2025 | University of Kelaniya</title>
        <meta name="description" content="Discover the world of Electronics and Computer Science at the University of Kelaniya's Open Day 2025." />
      </Head>

      <Preloader onLoaded={handlePreloaderLoaded} />

      {showContent && (
        // Removed bg-background from this div, making it transparent so the CircuitBackground (and body background) shows through.
        // Added relative and z-0 to ensure content sits above the fixed background in layout.tsx
        <div className="min-h-screen text-foreground flex flex-col">
          <header className="py-12 md:py-20 bg-card/80 backdrop-blur-sm shadow-xl section-animate opacity-0"> {/* Added transparency to card */}
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center items-center space-x-6 mb-6 animate-child-item opacity-0">
                <Image
                  src="https://administration.kln.ac.lk/images/UOK_LOGO_Color_PNG-01.png"
                  alt="University of Kelaniya Logo"
                  width={96}
                  height={96}
                  className="h-24 w-auto transition-transform duration-300 hover:scale-110"
                  data-ai-hint="university logo"
                />
                <Image 
                  src="https://ecsc-uok.com/assets/ecsc_logo_header-b0c5d86f.png"
                  alt="ECSC UOK Logo" 
                  width={96} 
                  height={96} 
                  className="h-24 w-auto transition-transform duration-300 hover:scale-110"
                  data-ai-hint="club logo"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-child-item opacity-0">
                Electronics & Computer Science
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground mb-8 animate-child-item opacity-0">
                Open Day 2025 - University of Kelaniya
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-child-item opacity-0">
              Let's Embrace the world of Hardware and Software, to create a sustainable future
              </p>
              <a href="#register" className="aurum-button text-lg animate-child-item opacity-0">
                More About ECS
              </a>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
            
            <section id="register" className="section-animate opacity-0">
              {/* Added transparency to section-card as well */}
              <div className="section-card bg-card/80 backdrop-blur-sm">
                <h2 className="section-title animate-child-item opacity-0">More About ECS</h2>
                <p className="text-lg text-foreground mb-6 text-center leading-relaxed animate-child-item opacity-0">
                  Stay updated with the latest news about the ECS Open Day and future events. Please fill out the form below.
                </p>
                <div className="responsive-iframe-container bg-muted/50 rounded-lg shadow-inner animate-child-item opacity-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"> {/* Adjusted iframe background */}
                  <iframe
                    src="https://forms.gle/3XWB4TLjUncWFxRC8"
                    title="ECS Open Day Registration Form"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </section>

          </main>

          {/* Added transparency to footer card */}
          <footer className="bg-card/80 backdrop-blur-sm py-12 section-animate opacity-0">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-primary mb-6 animate-child-item opacity-0">Follow Us</h3>
                  <div className="space-y-4 flex flex-col items-center md:items-start">
                    <a
                      href="https://ecsc-uok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aurum-button-secondary w-full max-w-xs text-center flex items-center justify-center animate-child-item opacity-0"
                    >
                      <WebsiteIcon className="h-5 w-5 mr-2 inline" /> Website
                    </a>
                    <a
                      href="https://www.linkedin.com/company/electronics-and-computer-science-club/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aurum-button-secondary w-full max-w-xs text-center flex items-center justify-center animate-child-item opacity-0"
                    >
                      <LinkedInIcon className="h-5 w-5 mr-2 inline" /> LinkedIn
                    </a>
                    <a
                      href="https://www.facebook.com/ecscuok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aurum-button-secondary w-full max-w-xs text-center flex items-center justify-center animate-child-item opacity-0"
                    >
                      <FacebookIcon className="h-5 w-5 mr-2 inline" /> Facebook
                    </a>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-primary mb-6 animate-child-item opacity-0">Contact Us</h3>
                  <p className="text-foreground mb-2 animate-child-item opacity-0">
                    Department of Electronics and Computer Science,<br/>
                    Faculty of Science, University of Kelaniya,<br/>
                    Kelaniya, Sri Lanka.
                  </p>
                  <p className="text-foreground mb-2 animate-child-item opacity-0">
                    Email: <a href="mailto:ecs.uok@gmail.com" className="hover:text-primary hover:underline transition-colors duration-200">ecs.uok@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="mt-10 border-t border-border pt-8 text-center text-muted-foreground text-sm">
                <p className="animate-child-item opacity-0">© {new Date().getFullYear()} Department of Electronics and Computer Science, University of Kelaniya. All rights reserved.</p>
                <p className="animate-child-item opacity-0">ECSC Web Team</p>
              </div>
            </div>
          </footer>
          <AiChatbot />
        </div>
      )}
    </>
  );
}
