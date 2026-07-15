import React from 'react';
import { Users, Plane, Car, Bed } from 'lucide-react';

export default function Included() {
  const items = [
    {
      id: 1,
      icon: <Users className="included-card-icon" />,
      title: "Guides",
      description: "2 awesome guides who know everything about Japan!"
    },
    {
      id: 2,
      icon: <Plane className="included-card-icon" />,
      title: "Flights",
      description: (
        <>
          Routes:<br />
          Moscow — Osaka<br />
          Tokyo — Moscow
        </>
      )
    },
    {
      id: 3,
      icon: <Car className="included-card-icon" />,
      title: "Transfers",
      description: "From the airport to the hotels"
    },
    {
      id: 4,
      icon: <Bed className="included-card-icon" />,
      title: "Hotels",
      description: (
        <>
          Comfortable accommodation<br />
          2 people per room<br />
          (breakfasts included)
        </>
      )
    }
  ];

  return (
    <section id="included" className="included-section">
      <div className="section-divider animate-on-scroll slide-up">
        <span>What's included</span>
      </div>

      <div className="included-container">
        <div className="included-grid">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="included-card animate-on-scroll slide-up"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="included-card-header">
                {item.icon}
                <h3 className="included-card-title">{item.title}</h3>
              </div>
              <div className="included-card-body">
                <p className="included-card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
