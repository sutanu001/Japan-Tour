import React, { useState } from 'react';
import { Globe, Instagram, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your request, ${formData.name}! We will contact you soon.`);
    setFormData({ name: '', phone: '', comment: '' });
  };

  return (
    <section id="contacts" className="contacts-section">
      <div className="contacts-bg">
        <img 
          src="/images/footer_bg.png" 
          alt="Mount Fuji and Pagoda at dusk" 
          className="contacts-bg-img" 
        />
        <div className="contacts-bg-overlay"></div>
      </div>

      <div className="contacts-container">
        {/* Contact Form Card */}
        <div className="contact-card animate-on-scroll slide-up">
          <h2 className="contact-card-title">
            Want to join us,<br />
            but still have questions?
          </h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <span className="form-subtitle">Leave a request</span>
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="form-input" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
                className="form-input" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="comment" className="form-label">Comment</label>
              <input 
                type="text" 
                id="comment"
                name="comment" 
                value={formData.comment}
                onChange={handleChange}
                className="form-input" 
              />
            </div>
            
            <button type="submit" className="btn-send-form">
              Send
            </button>
          </form>
        </div>

        {/* Small floating socials on bottom right */}
        <div className="contacts-socials animate-on-scroll slide-left">
          <a href="#" aria-label="Instagram" className="social-icon-btn">
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="Website" className="social-icon-btn">
            <Globe size={16} />
          </a>
          <a href="#" aria-label="Telegram" className="social-icon-btn">
            <Send size={16} />
          </a>
        </div>
      </div>

      {/* Footer element */}
      <footer className="footer-bar animate-on-scroll slide-up">
        <div className="footer-container">
          <a href="#" className="footer-logo">
            <Globe size={16} className="logo-icon" />
            <span>JAPAN TOURS</span>
          </a>

          <nav className="footer-nav">
            <a href="#about" className="footer-link">About</a>
            <a href="#included" className="footer-link">Included</a>
            <a href="#contacts" className="footer-link">Contacts</a>
          </nav>

          <a href="#contacts" className="footer-btn-book">
            Book
          </a>
        </div>
      </footer>
    </section>
  );
}
