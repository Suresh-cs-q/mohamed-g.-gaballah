import '../pages/Pages.css';
import { useState, useEffect } from 'react';

const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    academic: false,
    research: false,
    industry: false,
    teaching: false
  });
  
  // Animation on component mount
  useEffect(() => {
    setAnimate(true);
    
    // Staggered animation for sections
    const timer1 = setTimeout(() => setVisibleSections(prev => ({ ...prev, academic: true })), 300);
    const timer2 = setTimeout(() => setVisibleSections(prev => ({ ...prev, research: true })), 600);
    const timer3 = setTimeout(() => setVisibleSections(prev => ({ ...prev, industry: true })), 900);
    const timer4 = setTimeout(() => setVisibleSections(prev => ({ ...prev, teaching: true })), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="page-container experience-page">
      <div className="page-background"></div>
      
      <div className={`page-header ${animate ? 'animate' : ''}`}>
        <h1>Professional Experience</h1>
        <div className="header-underline"></div>
      </div>
      
      <section className={`experience-section ${animate ? 'animate' : ''}`}>
        <div className="section-decoration">
          <div className="decoration-line"></div>
        </div>
        
        <h2 className="section-title">Academic Roles, Research Fellowships, Industry Roles, and Teaching Experience</h2>
        
        <div className={`experience-group ${visibleSections.academic ? 'visible' : ''}`}>
          <h3 className="experience-category">Academic Roles</h3>
          
          <div className="experience-items-container">
            <div className="experience-item academic-role">
              <div className="experience-item-header">
                <h4 className="role-title">Central Michigan University (CMU) Fixed-term faculty instructor (lecturer)</h4>
                <div className="role-badge current">Current</div>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> MI, USA</p>
                <p><strong>Duration:</strong> August 2024 - present</p>
                <p><strong>Responsibilities:</strong> Teaching undergraduate courses (4 courses)</p>
              </div>
            </div>
            
            <div className="experience-item academic-role">
              <div className="experience-item-header">
                <h4 className="role-title">Alexandria University Teaching Assistant</h4>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> Alexandria, Egypt</p>
                <p><strong>Duration:</strong> Sept. 2017 - Sept. 2019</p>
                <p><strong>Responsibilities:</strong> Lab sections, grading, and teaching</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`experience-group ${visibleSections.research ? 'visible' : ''}`}>
          <h3 className="experience-category">Research Fellowships</h3>
          
          <div className="experience-items-container">
            <div className="experience-item research-role">
              <div className="experience-item-header">
                <h4 className="role-title">Central Michigan University (CMU) Postdoctoral Research Fellow</h4>
                <div className="role-badge current">Current</div>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> MI, USA</p>
                <p><strong>Duration:</strong> Sept. 2023 - present</p>
                <p><strong>Advisor:</strong> Dr. Roderick Lammers</p>
                <p><strong>Research Focus:</strong> Biological wastewater treatment, pollutants removal, pollutants fate and transport, hydrologic and water quality modeling</p>
              </div>
            </div>
            
            <div className="experience-item research-role">
              <div className="experience-item-header">
                <h4 className="role-title">University of Science and Technology of China (USTC) Visiting Postdoctoral Research Fellow</h4>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> Hefei, China</p>
                <p><strong>Duration:</strong> June 2023 - August 2023</p>
                <p><strong>Advisor:</strong> Prof. Changyong Zhang</p>
                <p><strong>Research Focus:</strong> Electrochemical applications for pharmaceuticals removal from wastewater</p>
              </div>
            </div>
            
            <div className="experience-item research-role">
              <div className="experience-item-header">
                <h4 className="role-title">China Agricultural University Ph.D. Research</h4>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> Beijing, China</p>
                <p><strong>Duration:</strong> Sept. 2019 - June 2023</p>
                <p><strong>Advisor:</strong> Prof. Jianbin Guo</p>
                <p><strong>Research Focus:</strong> Biological wastewater treatment, developing methodological methods, antibiotics fate, nanoparticles material, pollutants adsorption, pollutants degradation and adsorption behaviors, and energy production</p>
              </div>
            </div>
            
            <div className="experience-item research-role">
              <div className="experience-item-header">
                <h4 className="role-title">Institute of Graduate Studies and Research Research Associate</h4>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> Alexandria, Egypt</p>
                <p><strong>Duration:</strong> Sept. 2016 - Sept. 2019</p>
                <p><strong>Advisor:</strong> Prof. Ola Abdelwahab</p>
                <p><strong>Research Focus:</strong> Biological wastewater treatment, design pilot-scale reactors, settling techniques, advancing removal processes</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`experience-group ${visibleSections.industry ? 'visible' : ''}`}>
          <h3 className="experience-category">Industry Roles</h3>
          
          <div className="experience-items-container">
            <div className="experience-item industry-role">
              <div className="experience-item-header">
                <h4 className="role-title">National Institute of Oceanography and Fisheries Researcher</h4>
              </div>
              <div className="role-details">
                <p><strong>Location:</strong> Alexandria, Egypt</p>
                <p><strong>Duration:</strong> Oct. 2012 - July 2022</p>
                <p><strong>Responsibilities:</strong> Conducting research on wastewater treatment and water quality monitoring</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`experience-group ${visibleSections.teaching ? 'visible' : ''}`}>
          <h3 className="experience-category">Teaching Experience</h3>
          
          <div className="teaching-items-container">
            <div className="teaching-institution">
              <div className="teaching-header">
                <h4 className="teaching-location">Central Michigan University (2024 - present)</h4>
                <div className="role-badge current">Current</div>
              </div>
              <ul className="course-list">
                <li><strong>Air Pollution Engineering</strong> (Fall 2024) (New course) (EGR512)</li>
                <li><strong>Applied Statics</strong> (Fall 2024) (IET279)</li>
                <li><strong>Environmental Microbiology</strong> (Spring 2025) (EGR202)</li>
                <li><strong>Environmental Engineering laboratory</strong> (Spring 2025) (EGR306)</li>
              </ul>
            </div>
            
            <div className="teaching-institution">
              <div className="teaching-header">
                <h4 className="teaching-location">Alexandria University (Sept. 2017 - Sept. 2019)</h4>
              </div>
              
              <div className="course-groups-container">
                <div className="course-group">
                  <h5 className="course-category">Mathematics</h5>
                  <ul className="course-list">
                    <li>Algebra</li>
                    <li>Differential equations</li>
                    <li>Integration</li>
                    <li>Analytical geometry</li>
                  </ul>
                </div>
                
                <div className="course-group">
                  <h5 className="course-category">Engineering drawing (1, 2)</h5>
                </div>
                
                <div className="course-group">
                  <h5 className="course-category">Water Engineering</h5>
                  <ul className="course-list">
                    <li>Ponds design and water baths</li>
                    <li>Aquaculture ponds design</li>
                    <li>Water quality for fish farming</li>
                    <li>Methods of wastewater treatment</li>
                  </ul>
                </div>
                
                <div className="course-group">
                  <h5 className="course-category">Machine Design (Designing machine parts)</h5>
                </div>
                
                <div className="course-group">
                  <h5 className="course-category">Plan survey and agriculture application</h5>
                </div>
                
                <div className="course-group">
                  <h5 className="course-category">AutoCAD program</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 