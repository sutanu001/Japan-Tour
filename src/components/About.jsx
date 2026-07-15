import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-divider">
        <span>About the tour</span>
      </div>

      <div className="about-content">
        {/* Left Column: Descriptive Text */}
        <div className="about-text-column">
          <p className="about-para animate-on-scroll slide-up">
            We've planned a simple and convenient 10-day itinerary for your trip to Japan.
            You'll visit three cities: <span className="highlight-gold">Osaka, Kyoto, and Tokyo.</span>
          </p>
          <p className="about-para animate-on-scroll slide-up" style={{ transitionDelay: '0.2s' }}>
            No need to worry about routes, schedules, or finding places — everything is already organized.
            We'll show you where to go, what to see, and where to eat, so you can simply <span className="highlight-gold">enjoy the journey.</span>
          </p>
        </div>

        {/* Right Column: Visual Vertical Timeline */}
        <div className="about-timeline-column">
          <div className="timeline-container">
            {/* The vertical connector line */}
            <div className="timeline-line"></div>

            {/* Timeline Segment 1: Osaka */}
            <div className="timeline-item osaka-item animate-on-scroll slide-up">
              <div className="timeline-node"></div>
              <div className="timeline-info">
                <span className="timeline-days">Days 1–3</span>
                <span className="timeline-city">Osaka</span>
              </div>
              
              {/* Stacked Images on the left side of Osaka */}
              <div className="timeline-images-left">
                <div className="image-stack">
                  <img src="/images/osaka_castle.png" alt="Osaka Castle" className="stack-img-back" />
                  <img src="/images/card_cities.png" alt="Osaka Cityscape" className="stack-img-front" />
                </div>
              </div>

              {/* Single Image on the right side of Osaka */}
              <div className="timeline-images-right">
                <img src="/images/kyoto_streets.png" alt="Traditional Osaka Street" className="timeline-single-img" />
              </div>
            </div>

            {/* Timeline Segment 2: Kyoto */}
            <div className="timeline-item kyoto-item animate-on-scroll slide-up">
              <div className="timeline-node"></div>
              <div className="timeline-info">
                <span className="timeline-days">Days 4–6</span>
                <span className="timeline-city">Kyoto</span>
              </div>
              
              {/* Image Kyoto right side */}
              <div className="timeline-images-right">
                <img src="/images/card_photos.png" alt="Kyoto Pagoda" className="timeline-single-img" />
              </div>
            </div>

            {/* Timeline Segment 3: Tokyo */}
            <div className="timeline-item tokyo-item animate-on-scroll slide-up">
              <div className="timeline-node"></div>
              <div className="timeline-info">
                <span className="timeline-days">Days 7–10</span>
                <span className="timeline-city">Tokyo</span>
              </div>

              {/* Image Tokyo left side */}
              <div className="timeline-images-left">
                <img src="/images/card_vibe.png" alt="Tokyo Neon Street" className="timeline-single-img" />
              </div>
              
              {/* Stacked Image Tokyo right side */}
              <div className="timeline-images-right">
                <div className="image-stack">
                  <img src="/images/tokyo_tower.png" alt="Tokyo Tower" className="stack-img-back" />
                  <img src="/images/hero_bg.png" alt="Tokyo Skyline" className="stack-img-front" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
