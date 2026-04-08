import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Om<span className="logo-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-social desktop-only">
          <a href="https://github.com/OmSBhavsar" target="_blank" rel="noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/ombhavsar28" target="_blank" rel="noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-socials">
          <a href="https://github.com/OmSBhavsar" className="social-icon"><Github /></a>
          <a href="https://linkedin.com/in/ombhavsar28" className="social-icon"><Linkedin /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
