import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Included from './components/Included';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Loader timeout sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    // 2. Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all scroll-animated components after load
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [isLoaded]);

  return (
    <div className={`app-wrapper ${isLoaded ? 'is-loaded' : ''}`}>
      {/* Intro Preloader */}
      <div className="preloader">
        <div className="preloader-content">
          <div className="preloader-logo">
            <span className="logo-letter">J</span>
            <span className="logo-letter">A</span>
            <span className="logo-letter">P</span>
            <span className="logo-letter">A</span>
            <span className="logo-letter">N</span>
          </div>
          <div className="preloader-line-container">
            <div className="preloader-line"></div>
          </div>
          <span className="preloader-subtitle">TOURS & EXPERIENCE</span>
        </div>
      </div>

      {/* Main Content */}
      <Header />
      <Hero />
      <About />
      <Included />
      <ContactForm />
    </div>
  );
}

export default App;
