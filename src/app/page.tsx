
"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Preloader from '@/components/preloader';
import { WebsiteIcon, LinkedInIcon, FacebookIcon } from '@/components/icons';
import { AiChatbot } from '@/components/ai-chatbot';
// ImageGallery import removed as it's no longer used
// import { Button } from '@/components/ui/button'; // For potential future use, current buttons are custom CSS

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
              <Image 
                src="https://placehold.co/150x150.png" // Placeholder, replace with actual logo
                alt="University of Kelaniya Logo" 
                width={96} 
                height={96} 
                className="mx-auto mb-6"
                data-ai-hint="university logo"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                Electronics & Computer Science
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground mb-8">
                Open Day 2024 - University of Kelaniya
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Explore innovation, discover opportunities, and shape your future with us. 
                Welcome to the forefront of technology at UoK!
              </p>
              <a href="#register" className="aurum-button text-lg">
                Register for Updates
              </a>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
            {/* Welcome Section */}
            <section id="welcome" className="section-animate opacity-0">
              <div className="section-card">
                <h2 className="section-title">Welcome to ECS Open Day!</h2>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  We are thrilled to welcome you to the Electronics and Computer Science (ECS) section's Open Day at the University of Kelaniya. This is your chance to dive deep into the exciting world of ECS, understand our cutting-edge curriculum, meet our passionate faculty, and envision your future in this dynamic field.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Whether you're a prospective student, a curious parent, or an industry enthusiast, we have something for everyone. Prepare to be inspired!
                </p>
              </div>
            </section>

            {/* About ECS Section - REMOVED */}

            {/* Student Life/Achievements Section */}
            <section id="student-life" className="section-animate opacity-0">
              <div className="section-card">
                <h2 className="section-title">Student Life & Achievements</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Life at ECS is vibrant and engaging. Our students participate in numerous co-curricular and extra-curricular activities, from hackathons and coding competitions to tech talks and industry collaborations.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">InnovateFest 2023 Winners</h3>
                        <p className="text-sm text-foreground">Our team secured first place for their groundbreaking project on AI-powered agricultural solutions.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">Robotics Club Excellence</h3>
                        <p className="text-sm text-foreground">The ECS Robotics Club consistently performs at national level competitions, showcasing advanced robotic designs.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">IEEE Student Branch Activities</h3>
                        <p className="text-sm text-foreground">Active participation in workshops, seminars, and outreach programs organized by the IEEE student chapter.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">Industry Internships</h3>
                        <p className="text-sm text-foreground">High placement rates for internships at leading tech companies, providing valuable real-world experience.</p>
                    </div>
                </div>
              </div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className="section-animate opacity-0">
              <div className="section-card">
                <h2 className="section-title">State-of-the-Art Facilities</h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  The ECS section is equipped with modern laboratories and resources to provide students with an exceptional learning environment. These facilities support both coursework and research activities.
                </p>
                <ul className="list-disc list-inside text-lg text-foreground space-y-2 pl-4">
                  <li>Advanced Digital Electronics Lab</li>
                  <li>Microprocessor and Embedded Systems Lab</li>
                  <li>Communication Systems Lab</li>
                  <li>High-Performance Computing Cluster (Access)</li>
                  <li>Dedicated Project Labs for Final Year Students</li>
                  <li>Modern Software Development Environments</li>
                </ul>
                 <div className="mt-8 text-center">
                    <a 
                        href="https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="aurum-button-secondary"
                    >
                        Learn More (PDF Guide)
                    </a>
                </div>
              </div>
            </section>

            {/* Image Gallery Section - REMOVED */}
            
            {/* Registration Form Section */}
            <section id="register" className="section-animate opacity-0">
              <div className="section-card">
                <h2 className="section-title">Register Your Interest</h2>
                <p className="text-lg text-foreground mb-6 text-center leading-relaxed">
                  Stay updated with the latest news about the ECS Open Day and future events. Please fill out the form below.
                </p>
                <div className="responsive-iframe-container bg-muted rounded-lg shadow-inner">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfn4i3gP7X6pB0d8rV_E5QjC_kXn9lY_hWfA_j7sO6zY1pQJw/viewform?embedded=true"
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
                    Email: <a href="mailto:ecs_openday@kln.ac.lk" className="hover:text-primary">ecs_openday@kln.ac.lk</a>
                  </p>
                  <p className="text-foreground">
                    Phone: <a href="tel:+94112903364" className="hover:text-primary">+94 (0)11 2903364</a> (Actual Dept. No.)
                  </p>
                </div>
              </div>
              <div className="mt-10 border-t border-border pt-8 text-center text-muted-foreground text-sm">
                <p>© {new Date().getFullYear()} Department of Electronics and Computer Science, University of Kelaniya. All rights reserved.</p>
                <p>Inspired by Aurum Concepts and university department websites.</p>
              </div>
            </div>
          </footer>
          <AiChatbot />
        </div>
      )}
    </>
  );
}
