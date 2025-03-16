import React, { useState, useEffect } from 'react';
import '../pages/Pages.css';

const Research = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    // Add scroll animation for research groups
    const handleScroll = () => {
      const elements = document.querySelectorAll('.research-group');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-container research-page">
      <div className="page-background"></div>
      
      <div className={`page-header ${animate ? 'animate' : ''}`}>
        <h1>Research & Grant</h1>
        <div className="header-underline"></div>
      </div>
      
      <section className={`research-section ${animate ? 'animate' : ''}`}>
        <h2 className="section-title">Research Interests, Projects, and Funded Grants</h2>
        
        <div className="research-group">
          <h3 className="research-category">Research Interests</h3>
          <ul className="research-interests-list">
            <li>Environmental pollution</li>
            <li>Pollutants fate and transport</li>
            <li>Anaerobic digestion</li>
            <li>Constructed wetlands</li>
            <li>Wastewater treatment</li>
            <li>Waste management</li>
            <li>Water quality</li>
            <li>Food-energy-water nexus</li>
            <li>Nano and Micro-plastic</li>
          </ul>
        </div>
        
        <div className="research-group">
          <h3 className="research-category">Projects</h3>
          
          <div className="projects-subgroup">
            <h4 className="projects-subcategory">Funded Research Projects</h4>
            
            <div className="project-items-container">
              <div className="project-item water-project">
                <div className="project-item-header">
                  <h5 className="project-title">HABCTI25: Modified Clay for Inhibiting Harmful Algal Blooms in Freshwater Lakes</h5>
                  <span className="project-badge pending">Pending</span>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2025-2026</p>
                  <p><strong>Funding:</strong> $200,000 (Pending)</p>
                </div>
              </div>
              
              <div className="project-item environment-project">
                <div className="project-item-header">
                  <h5 className="project-title">Central Michigan University and UGA and the USACE project for Engineering with Nature</h5>
                  <span className="project-badge active">Active</span>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2023-2025</p>
                  <p><strong>Funding:</strong> $200,000</p>
                </div>
              </div>
              
              <div className="project-item energy-project">
                <div className="project-item-header">
                  <h5 className="project-title">UNDP, Ethiopia, China co-operation project: "Biogas, Biomass and Solar Trilateral Cooperation Transitioning to Sustainable Energy Uses in the Agro-Industry"</h5>
                  <span className="project-badge completed">Completed</span>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2020-2022</p>
                  <p><strong>Funding:</strong> $3 millions</p>
                  <p><strong>Link:</strong> <a href="https://www.undp.org/china/projects/mofcom-undp-trilateral-cooperation-renewable-energy-ethiopia" target="_blank" rel="noopener noreferrer">UNDP Project Page</a></p>
                </div>
              </div>
              
              <div className="project-item water-project">
                <div className="project-item-header">
                  <h5 className="project-title">Development of Water Treatment System for Fish Farming</h5>
                  <span className="project-badge completed">Completed</span>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2018-2019</p>
                  <p><strong>Role:</strong> Co-investigator</p>
                  <p><strong>Institution:</strong> NIOF</p>
                  <p><strong>Description:</strong> Design and investigation of a wastewater treatment system using constructed wetlands supported with a pretreatment sedimentation system</p>
                  <p><strong>Funding:</strong> 100K Egyptian Pound</p>
                </div>
              </div>
              
              <div className="project-item environment-project">
                <div className="project-item-header">
                  <h5 className="project-title">Base line environmental studies on three petroleum platforms</h5>
                  <span className="project-badge completed">Completed</span>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2017-2020</p>
                  <p><strong>Location:</strong> Egypt</p>
                  <p><strong>Description:</strong> Environmental study for water pollution monitoring in Red Sea petroleum platforms</p>
                  <p><strong>Funding:</strong> 500K Egyptian Pound</p>
                </div>
              </div>
              
              <div className="project-item monitoring-project">
                <div className="project-item-header">
                  <h5 className="project-title">The impact of Suez Canal after the development on the migration of marine organisms between the Mediterranean and Red Sea Project</h5>
                  <span className="project-badge completed">Completed</span>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2016-2017</p>
                  <p><strong>Location:</strong> Egypt</p>
                  <p><strong>Description:</strong> National project to monitor migratory species and investigate the origin of these species, the extent to which, the environmental and economic impact to avoid them and to avoid the potential negative impacts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects-subgroup">
            <h4 className="projects-subcategory">Academic and Industry Projects</h4>
            
            <div className="project-items-container">
              <div className="project-item water-project">
                <div className="project-item-header">
                  <h5 className="project-title">Pilot-scale plant for wastewater treatment</h5>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2017-2019</p>
                  <p><strong>Location:</strong> El Max research station, National institute of oceanography and fisheries, Egypt</p>
                  <p><strong>Description:</strong> Operation and management of a pilot-scale wastewater treatment plant</p>
                </div>
              </div>
              
              <div className="project-item academic-project">
                <div className="project-item-header">
                  <h5 className="project-title">Supervision of student projects</h5>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 2018-2019</p>
                  <p><strong>Role:</strong> Supervisor for 4 undergraduate students' graduation projects and 1 Master's student at CAU</p>
                </div>
              </div>
              
              <div className="project-item training-project">
                <div className="project-item-header">
                  <h5 className="project-title">Industrial Water Treatment Course</h5>
                </div>
                <div className="project-details">
                  <p><strong>Duration:</strong> 28 Aug-2 Sep</p>
                  <p><strong>Organizer:</strong> Syndicate of Scientific Professions</p>
                  <p><strong>Description:</strong> Course studying different techniques of water treatment (about 30 hours)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="research-group">
          <h3 className="research-category">Funded Grants</h3>
          
          <div className="grant-items-container">
            <div className="grant-item water-grant">
              <div className="grant-item-header">
                <h5 className="grant-title">HABCTI25: Modified Clay for Inhibiting Harmful Algal Blooms in Freshwater Lakes</h5>
                <span className="grant-badge pending">Pending</span>
              </div>
              <div className="grant-details">
                <p><strong>Duration:</strong> 2025-2026</p>
                <p><strong>Status:</strong> Pending</p>
                <p><strong>Amount:</strong> $200,000</p>
              </div>
            </div>
            
            <div className="grant-item environment-grant">
              <div className="grant-item-header">
                <h5 className="grant-title">Central Michigan University and UGA and the USACE project for Engineering with Nature</h5>
                <span className="grant-badge active">Active</span>
              </div>
              <div className="grant-details">
                <p><strong>Duration:</strong> 2023-2025</p>
                <p><strong>Amount:</strong> $200,000</p>
              </div>
            </div>
            
            <div className="grant-item energy-grant">
              <div className="grant-item-header">
                <h5 className="grant-title">UNDP, Ethiopia, China co-operation project: "Biogas, Biomass and Solar Trilateral Cooperation Transitioning to Sustainable Energy Uses in the Agro-Industry"</h5>
                <span className="grant-badge completed">Completed</span>
              </div>
              <div className="grant-details">
                <p><strong>Duration:</strong> 2020-2022</p>
                <p><strong>Amount:</strong> $3 millions</p>
                <p><strong>Link:</strong> <a href="https://www.undp.org/china/projects/mofcom-undp-trilateral-cooperation-renewable-energy-ethiopia" target="_blank" rel="noopener noreferrer">UNDP Project Page</a></p>
              </div>
            </div>
            
            <div className="grant-item water-grant">
              <div className="grant-item-header">
                <h5 className="grant-title">Development of Water Treatment System for Fish Farming</h5>
                <span className="grant-badge completed">Completed</span>
              </div>
              <div className="grant-details">
                <p><strong>Duration:</strong> 2018-2019</p>
                <p><strong>Role:</strong> Co-investigator</p>
                <p><strong>Institution:</strong> NIOF</p>
                <p><strong>Amount:</strong> 100K Egyptian Pound</p>
              </div>
            </div>
            
            <div className="grant-item environment-grant">
              <div className="grant-item-header">
                <h5 className="grant-title">Base line environmental studies on three petroleum platforms</h5>
                <span className="grant-badge completed">Completed</span>
              </div>
              <div className="grant-details">
                <p><strong>Duration:</strong> 2017-2020</p>
                <p><strong>Location:</strong> Egypt</p>
                <p><strong>Amount:</strong> 500K Egyptian Pound</p>
              </div>
            </div>
            
            <div className="grant-item monitoring-grant">
              <div className="grant-item-header">
                <h5 className="grant-title">The impact of Suez Canal after the development on the migration of marine organisms between the Mediterranean and Red Sea Project</h5>
                <span className="grant-badge completed">Completed</span>
              </div>
              <div className="grant-details">
                <p><strong>Duration:</strong> 2016-2017</p>
                <p><strong>Location:</strong> Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research; 