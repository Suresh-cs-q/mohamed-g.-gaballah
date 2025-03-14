import React, { useState, useEffect } from 'react';
import '../pages/Pages.css';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    // Add scroll animation for skills groups
    const handleScroll = () => {
      const elements = document.querySelectorAll('.skills-group');
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
    <div className="page-container skills-page">
      <div className="page-background"></div>
      
      <div className={`page-header ${animate ? 'animate' : ''}`}>
        <h1>Skills & Talks</h1>
        <div className="header-underline"></div>
      </div>
      
      <section className={`skills-section ${animate ? 'animate' : ''}`}>
        <h2 className="section-title">Technical Skills, Software Expertise, and Presentations & Webinars</h2>
        
        <div className="skills-group">
          <h3 className="skills-category">Technical Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">Methodological development for pharmaceutical detection in complex matrices using High-performance liquid chromatography (HPLC-UV)</li>
            <li className="skill-item">Proficient in R programming for data analysis and statistical modeling</li>
            <li className="skill-item">Extensive experience with anaerobic digestion processes including operation, design, and analysis</li>
            <li className="skill-item">Expertise in waste storage processes, composting, and renewable energy systems (PV)</li>
            <li className="skill-item">Operation and management of biological reactors for wastewater treatment</li>
            <li className="skill-item">Over 8 years of fieldwork experience in pollution monitoring and water quality assessment across various water bodies</li>
            <li className="skill-item">Supervised undergraduate students in graduation projects and laboratory work</li>
            <li className="skill-item">Completed specialized training in Industrial Water Treatment techniques</li>
            <li className="skill-item">Strong background in data analysis, experimental design, report writing, and laboratory procedures</li>
          </ul>
        </div>
        
        <div className="skills-group">
          <h3 className="skills-category">Software Expertise</h3>
          <div className="software-skills">
            <div className="software-category">
              <h4 className="software-type">Programming Languages</h4>
              <div className="software-items">
                <span className="software-item">R</span>
              </div>
            </div>
            
            <div className="software-category">
              <h4 className="software-type">Modeling & Analysis Tools</h4>
              <div className="software-items">
                <span className="software-item">SWAT+</span>
                <span className="software-item">QGIS</span>
                <span className="software-item">Statistical software</span>
              </div>
            </div>
            
            <div className="software-category">
              <h4 className="software-type">General Software</h4>
              <div className="software-items">
                <span className="software-item">Microsoft Office Suite</span>
                <span className="software-item">Google Workspace</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills-group">
          <h3 className="skills-category">Presentations & Webinars</h3>
          
          <div className="presentations-subgroup">
            <h4 className="presentations-subcategory">Invited Talks & Presentations</h4>
            
            <div className="presentation-items-container">
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">2023 Engineers with Nature (N-EWN) Partners Symposium</h5>
                  <span className="presentation-badge recent">Recent</span>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> 22-24 May 2023</p>
                  <p><strong>Location:</strong> Florida, USA</p>
                  <p><strong>Role:</strong> Presenter</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">2022 Forum on Renewable Energy Promotion in Developing Countries</h5>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> September 2022</p>
                  <p><strong>Location:</strong> China Agriculture University, Beijing, China</p>
                  <p><strong>Role:</strong> Presenter</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">2021 Forum on Renewable Energy Promotion in Developing Countries</h5>
                  <span className="presentation-badge award">Award</span>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> September 2021</p>
                  <p><strong>Location:</strong> China Agriculture University, Beijing, China</p>
                  <p><strong>Role:</strong> Presenter</p>
                  <p><strong>Achievement:</strong> Bronze medal award</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">International Symposium on Rural Organic Pollution Prevention and Eco-Environment Protection</h5>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> September 2021</p>
                  <p><strong>Location:</strong> China Agriculture University, Beijing, China</p>
                  <p><strong>Role:</strong> Presenter</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">International Symposium on Rural Organic Pollution Prevention and Eco-Environment Protection</h5>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> 24-28 October 2020</p>
                  <p><strong>Location:</strong> China Agriculture University, Beijing, China</p>
                  <p><strong>Role:</strong> Attendee</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">International Symposium on Rural Organic Pollution Prevention and Eco-Environment Protection</h5>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> 19-22 October 2019</p>
                  <p><strong>Location:</strong> China Agriculture University, Beijing, China</p>
                  <p><strong>Role:</strong> Attendee</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">21st Conference of Egyptian Society of Agricultural Engineering</h5>
                  <span className="presentation-badge organizer">Organizer</span>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> 2017</p>
                  <p><strong>Location:</strong> Egypt</p>
                  <p><strong>Role:</strong> Presenter and Organizer</p>
                  <p><strong>Topic:</strong> "New Technologies in Agricultural and Bio-systems Engineering and their Applications for Supporting Sustainable Development"</p>
                </div>
              </div>
              
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">6th International Symposium on Wetland Pollutant Dynamics and Annual Conference of Constructed Wetland Association</h5>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> September 2015</p>
                  <p><strong>Location:</strong> UK</p>
                  <p><strong>Role:</strong> Abstract presenter</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="presentations-subgroup">
            <h4 className="presentations-subcategory">Webinars</h4>
            
            <div className="presentation-items-container">
              <div className="presentation-item">
                <div className="presentation-item-header">
                  <h5 className="presentation-title">Society for Risk Analysis-Africa Webinar</h5>
                  <span className="presentation-badge upcoming">Upcoming</span>
                </div>
                <div className="presentation-details">
                  <p><strong>Date:</strong> February 2025</p>
                  <p><strong>Topic:</strong> "Sustainable Wetland Management in Africa: Treatment Strategies for Risk Mitigation"</p>
                  <p><strong>Role:</strong> Speaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 