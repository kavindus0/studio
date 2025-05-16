
"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Preloader from '@/components/preloader';
import { WebsiteIcon, LinkedInIcon, FacebookIcon } from '@/components/icons';
import { AiChatbot } from '@/components/ai-chatbot';

export default function OpenDayPage() {
  const [showContent, setShowContent] = useState(false);
  // This state indicates preloader has finished its internal 2.5s timeout
  const [isPreloaderInternalLoadDone, setIsPreloaderInternalLoadDone] = useState(false);

  const handlePreloaderLoaded = () => {
    setIsPreloaderInternalLoadDone(true);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden'; // Disable scrolling initially
    }
  }, []);
  
  useEffect(() => {
    if (isPreloaderInternalLoadDone) {
      // Preloader's internal 2.5s has passed.
      // The preloader component itself has a 2.5s animation delay + 0.5s fadeOut.
      // So, content can be shown after approx 3s from page load.
      const contentTimer = setTimeout(() => {
        setShowContent(true);
        if (typeof window !== 'undefined') {
          document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
      }, 500); // Wait for preloader's own fade-out to complete (2500ms delay + 500ms animation = 3000ms total)
                 // onLoaded is called at 2500ms, so wait another 500ms.
      return () => clearTimeout(contentTimer);
    }
  }, [isPreloaderInternalLoadDone]);

  useEffect(() => {
    if (showContent) {
      const sections = document.querySelectorAll('.section-animate');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.remove('opacity-0');
          section.classList.add('animate-fadeIn');
        }, index * 200); 
      });
    }
  }, [showContent]);

  return (
    <>
      {/* Metadata is in layout.tsx, but can add page-specific overrides here if needed */}
      <Head>
        <title>ECS Open Day 2024 | University of Kelaniya</title>
        <meta name="description" content="Discover the world of Electronics and Computer Science at the University of Kelaniya's Open Day 2024." />
      </Head>

      {/* Preloader is always rendered initially and handles its own fade-out and disappearance via CSS animation */}
      <Preloader onLoaded={handlePreloaderLoaded} />

      {showContent && (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          {/* Header / Hero Section */}
          <header className="py-12 md:py-20 bg-card shadow-xl section-animate opacity-0">
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center items-center space-x-6 mb-6">
                <Image
                  src="https://administration.kln.ac.lk/images/UOK_LOGO_Color_PNG-01.png"
                  alt="University of Kelaniya Logo"
                  width={96}
                  height={96}
                  className="h-24 w-auto"
                  data-ai-hint="university logo"
                />
                <Image 
                  src="https://ecsc-uok.com/assets/ecsc_logo_header-b0c5d86f.png"
                  alt="ECSC UOK Logo" 
                  width={96} 
                  height={96} 
                  className="h-24 w-auto"
                  data-ai-hint="club logo"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                Electronics & Computer Science
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground mb-8">
                Open Day 2024 - University of Kelaniya
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Let's Embrace the world of Hardware and Software, to create a sustainable future
              </p>
              <a href="#register" className="aurum-button text-lg">
                More About ECS
              </a>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
            
            {/* Registration Form Section */}
            <section id="register" className="section-animate opacity-0">
              <div className="section-card">
                <h2 className="section-title">More About ECS</h2>
                <p className="text-lg text-foreground mb-6 text-center leading-relaxed">
                  Stay updated with the latest news about the ECS Open Day and future events. Please fill out the form below.
                </p>
                <div className="responsive-iframe-container bg-muted rounded-lg shadow-inner">
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

          {/* Footer Section */}
          <footer className="bg-card py-12 section-animate opacity-0">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Follow Us Section */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Follow Us</h3>
                  <div className="space-y-4 flex flex-col items-center md:items-start">
                    <a
                      href="https://ecsc-uok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aurum-button-secondary w-full max-w-xs md:w-auto text-center flex items-center justify-center"
                    >
                      <WebsiteIcon className="h-5 w-5 mr-2 inline" /> Website
                    </a>
                    <a
                      href="https://www.linkedin.com/company/electronics-and-computer-science-club/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aurum-button-secondary w-full max-w-xs md:w-auto text-center flex items-center justify-center"
                    >
                      <LinkedInIcon className="h-5 w-5 mr-2 inline" /> LinkedIn
                    </a>
                    <a
                      href="https://www.facebook.com/ecscuok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aurum-button-secondary w-full max-w-xs md:w-auto text-center flex items-center justify-center"
                    >
                      <FacebookIcon className="h-5 w-5 mr-2 inline" /> Facebook
                    </a>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Contact Us</h3>
                  <p className="text-foreground mb-2">
                    Department of Electronics and Computer Science,<br/>
                    Faculty of Science, University of Kelaniya,<br/>
                    Kelaniya, Sri Lanka.
                  </p>
                  <p className="text-foreground mb-2">
                    Email: <a href="mailto:ecs.uok@gmail.com" className="hover:text-primary">ecs.uok@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="mt-10 border-t border-border pt-8 text-center text-muted-foreground text-sm">
                <p>© {new Date().getFullYear()} Department of Electronics and Computer Science, University of Kelaniya. All rights reserved.</p>
                <p>ECSC Web Team</p>
              </div>
            </div>
          </footer>
          <AiChatbot />
        </div>
      )}
    </>
  );
}
