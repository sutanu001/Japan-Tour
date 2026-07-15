import React from 'react';
import { Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <Globe size={18} className="logo-icon" />
          <span>JAPAN TOURS</span>
        </a>
        
        <nav className="nav-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#included" className="nav-link">Included</a>
          <a href="#contacts" className="nav-link">Contacts</a>
        </nav>
        
        <a href="#contacts" className="btn-book-nav">
          Book
        </a>
      </div>
    </header>
  );
}
