import React from 'react';
import { Instagram, Globe, Send } from 'lucide-react';

export default function Hero() {
  const cards = [
    { id: 1, text: "3 cities in Japan", img: "/images/card_cities.png" },
    { id: 2, text: "10 days", img: "/images/hero_bg.png" },
    { id: 3, text: "gigabytes of photos", img: "/images/card_photos.png" },
    { id: 4, text: "eat ramen", img: "/images/card_ramen.png" },
    { id: 5, text: "enjoy the vibe", img: "/images/card_vibe.png" },
  ];

  return (
    <section className="hero-section">
      {/* Background elements */}
      <div className="hero-bg-overlay"></div>
      
      {/* Massive backdrop text */}
      <div className="hero-backdrop-text">JAPAN</div>

      {/* Main content grid */}
      <div className="hero-content">
        {/* Social Media floating icons on the right edge */}
        <div className="hero-socials">
          <a 
            href="#" 
            aria-label="Instagram" 
            className="social-link-floating"
            style={{ transitionDelay: '0.4s' }}
          >
            <Instagram size={18} />
          </a>
          <a 
            href="#" 
            aria-label="Website" 
            className="social-link-floating"
            style={{ transitionDelay: '0.5s' }}
          >
            <Globe size={18} />
          </a>
          <a 
            href="#" 
            aria-label="Telegram" 
            className="social-link-floating"
            style={{ transitionDelay: '0.6s' }}
          >
            <Send size={18} />
          </a>
        </div>

        {/* The character cutout image on the right */}
        <div className="kimono-lady-container">
          <img 
            src="/images/kimono_lady.png" 
            alt="Woman in traditional Japanese kimono looking at cherry blossoms" 
            className="kimono-lady-img" 
          />
        </div>

        {/* Lower row: Cards and Book button */}
        <div className="hero-bottom-container">
          <div className="hero-cards-slider">
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="hero-card"
                style={{ transitionDelay: `${0.4 + index * 0.12}s` }}
              >
                <img src={card.img} alt={card.text} className="hero-card-img" />
                <div className="hero-card-overlay"></div>
                <span className="hero-card-text">{card.text}</span>
              </div>
            ))}
          </div>

          <div className="hero-book-action">
            <a 
              href="#contacts" 
              className="btn-book-hero"
              style={{ transitionDelay: `${0.4 + cards.length * 0.12}s` }}
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
