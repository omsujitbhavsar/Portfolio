import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, Code } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { ref, isActive } = useScrollReveal();

  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <div ref={ref} className={`contact-content reveal ${isActive ? 'active' : ''}`}>
          
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Get In Touch</h2>
            <p className="contact-desc">
              I am currently open for opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-links">
              <a href="mailto:om.bhavsar221@vit.edu" className="contact-item glass-panel">
                <Mail className="c-icon" />
                <span>om.bhavsar221@vit.edu</span>
              </a>
              <a href="tel:8459852057" className="contact-item glass-panel">
                <Phone className="c-icon" />
                <span>+91 8459852057</span>
              </a>
            </div>
            
            <div className="social-links-lg">
              <a href="https://github.com/OmSBhavsar" target="_blank" rel="noreferrer" className="social-btn glass-panel">
                <Github /> <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/ombhavsar28" target="_blank" rel="noreferrer" className="social-btn glass-panel">
                <Linkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://leetcode.com/u/ombhavsar28" target="_blank" rel="noreferrer" className="social-btn glass-panel">
                <Code /> <span>LeetCode</span>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Om Bhavsar. Built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
