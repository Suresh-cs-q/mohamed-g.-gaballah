import React, { useState, useEffect } from 'react';
import '../pages/Pages.css';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    // Add scroll animation for reference items
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reference-item');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 150); // Staggered animation
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-container contact-page">
      <div className="page-background"></div>
      
      <div className={`page-header ${animate ? 'animate' : ''}`}>
        <h1>Contact</h1>
        <div className="header-underline"></div>
      </div>
      
      <section className={`contact-section ${animate ? 'animate' : ''}`}>
        <h2 className="section-title">Contact Information and References</h2>
        
        <div className="contact-group">
          <h3 className="contact-category">Contact Information</h3>
          <div className="contact-card">
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon address-icon"></div>
                <div className="contact-content">
                  <strong>Address:</strong> 1820 S. Crawford St. Apt#C1, Mount Pleasant, MI, USA, 48858
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon phone-icon"></div>
                <div className="contact-content">
                  <strong>Phone:</strong> +1 (989) 817-3810
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon email-icon"></div>
                <div className="contact-content">
                  <strong>Email:</strong> <a href="mailto:Awad1m@cmich.edu">Awad1m@cmich.edu</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon linkedin-icon"></div>
                <div className="contact-content">
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohamed-s-gaballah-50665585/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mohamed-s-gaballah-50665585/</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon website-icon"></div>
                <div className="contact-content">
                  <strong>Website:</strong> <a href="https://www.cmich.edu/people/MOHAMED-AWAD-00902465" target="_blank" rel="noopener noreferrer">https://www.cmich.edu/people/MOHAMED-AWAD-00902465</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="references-group">
          <h3 className="contact-category">References</h3>
          
          <div className="references-container">
            <div className="reference-item">
              <div className="reference-header">
                <h4 className="reference-name">Dr. Roderick Lammers</h4>
                <span className="reference-badge academic">Academic</span>
              </div>
              <div className="reference-details">
                <p><strong>Position:</strong> Assistant Professor of Engineering</p>
                <p><strong>Affiliation:</strong> Central Michigan University, MI, USA</p>
                <p><strong>Email:</strong> <a href="mailto:lamme1r@cmich.edu">lamme1r@cmich.edu</a></p>
              </div>
            </div>
            
            <div className="reference-item">
              <div className="reference-header">
                <h4 className="reference-name">Amro Hassanein</h4>
                <span className="reference-badge academic">Academic</span>
              </div>
              <div className="reference-details">
                <p><strong>Position:</strong> Professor</p>
                <p><strong>Affiliation:</strong> Department of Environmental Science and Technology, University of Maryland, College Park, MD 20742, USA</p>
                <p><strong>Email:</strong> <a href="mailto:ahassane@umd.edu">ahassane@umd.edu</a></p>
              </div>
            </div>
            
            <div className="reference-item">
              <div className="reference-header">
                <h4 className="reference-name">Mohamed A. Ghorab</h4>
                <span className="reference-badge government">Government</span>
              </div>
              <div className="reference-details">
                <p><strong>Position:</strong> Professor</p>
                <p><strong>Affiliation:</strong> U.S. Environmental Protection Agency</p>
                <p><strong>Address:</strong> 1200 Pennsylvania Ave. NW., Office S-7782 | Washington, DC 20460</p>
                <p><strong>Email:</strong> <a href="mailto:ghorab.mohamed@epa.gov">ghorab.mohamed@epa.gov</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 