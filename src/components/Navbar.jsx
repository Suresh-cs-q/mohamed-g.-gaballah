import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960 && click) {
        setClick(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [click]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [click]);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu} aria-label="Mohamed Saad - Home">
          Mohamed S. Gaballah
        </Link>
        
        <div 
          className="menu-icon" 
          onClick={handleClick} 
          aria-expanded={click}
          aria-label={click ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick();
            }
          }}
        >
          <div className={click ? 'hamburger active' : 'hamburger'}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/education" 
              className={isActive('/education') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/education') ? 'page' : undefined}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/experience" 
              className={isActive('/experience') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/experience') ? 'page' : undefined}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/research" 
              className={isActive('/research') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/research') ? 'page' : undefined}
            >
              Research
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/publications" 
              className={isActive('/publications') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/publications') ? 'page' : undefined}
            >
              Publications
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/skills" 
              className={isActive('/skills') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/skills') ? 'page' : undefined}
            >
              Skills & Talks
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'nav-links active' : 'nav-links'} 
              onClick={closeMobileMenu}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 