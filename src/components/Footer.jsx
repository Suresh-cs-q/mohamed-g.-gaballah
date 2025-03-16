import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
    
    // Add scroll animation for footer visibility
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        if (isVisible && !footer.classList.contains('visible')) {
          footer.classList.add('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <footer className={`footer ${animate ? 'animate' : ''}`}>
      <div className="footer-wave-container">
        <div className="footer-wave"></div>
        <div className="footer-wave footer-wave-2"></div>
        <div className="footer-wave footer-wave-3"></div>
      </div>
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="title-underline"></div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/skills">Skills & Talks</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="title-underline"></div>
            <ul className="footer-contact">
              <li>
                <span className="footer-icon email-icon"></span>
                <a href="mailto:Awad1m@cmich.edu">Awad1m@cmich.edu</a>
              </li>
              <li>
                <span className="footer-icon phone-icon"></span>
                <span>+1 (989) 817-3810</span>
              </li>
              <li>
                <span className="footer-icon location-icon"></span>
                <span>Engineering & Technology building, office 143, Central Michigan University, Mount Pleasant, MI, USA, 48858</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="title-underline"></div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mohamed-s-gaballah-50665585/" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                <span className="social-icon linkedin-icon"></span>
                <span>LinkedIn</span>
              </a>
              <a href="https://www.cmich.edu/people/MOHAMED-AWAD-00902465" target="_blank" rel="noopener noreferrer" className="social-link university-link">
                <span className="social-icon university-icon"></span>
                <span>University Profile</span>
              </a>
            </div>
            <div className="footer-tagline">
              <p>Advancing sustainable solutions for environmental challenges</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Mohamed Saad. All Rights Reserved.</p>
          <p className="footer-credit">Environmental Engineering Researcher</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 