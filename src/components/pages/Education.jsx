import '../pages/Pages.css';
import { useState, useEffect } from 'react';

const Education = () => {
  const [animate, setAnimate] = useState(false);
  
  // Animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="page-container education-page">
      <div className="page-background"></div>
      
      <div className={`page-header ${animate ? 'animate' : ''}`}>
        <h1>Education</h1>
        <div className="header-underline"></div>
      </div>
      
      <section className={`education-section ${animate ? 'animate' : ''}`}>
        <div className="section-decoration">
          <div className="decoration-line"></div>
        </div>
        
        <h2 className="section-title">Degrees, Institutions, and Advisors</h2>
        
        <div className="education-group">
          <h3 className="education-category">Degrees</h3>
          
          <div className="education-items-container">
            <div className="education-item">
              <div className="education-item-header">
                <h4 className="degree-title">Ph.D. in Engineering</h4>
                <div className="degree-icon phd-icon"></div>
              </div>
              <div className="institution-details">
                <p><strong>Institution:</strong> China Agricultural University, College of Engineering</p>
                <p><strong>Location:</strong> Beijing, China</p>
                <p><strong>Duration:</strong> Sep 2019 - June 2023</p>
                <p><strong>Advisor:</strong> Prof. Jianbin Guo</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-item-header">
                <h4 className="degree-title">M.Sc. in Agriculture and Bio-Systems Engineering</h4>
                <div className="degree-icon masters-icon"></div>
              </div>
              <div className="institution-details">
                <p><strong>Institution:</strong> Alexandria University</p>
                <p><strong>Location:</strong> Alexandria, Egypt</p>
                <p><strong>Duration:</strong> Jan 2016</p>
                <p><strong>Advisor:</strong> Prof. Ali Beltagy</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-item-header">
                <h4 className="degree-title">B.Sc. in Agriculture and Bio-Systems Engineering</h4>
                <div className="degree-icon bachelors-icon"></div>
              </div>
              <div className="institution-details">
                <p><strong>Institution:</strong> Alexandria University</p>
                <p><strong>Location:</strong> Alexandria, Egypt</p>
                <p><strong>Duration:</strong> Jun 2011</p>
                <p><strong>Advisor:</strong> No specific advisor mentioned</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="education-group">
          <h3 className="education-category">Additional Research Positions</h3>
          
          <div className="education-items-container">
            <div className="education-item research-position">
              <div className="education-item-header">
                <h4 className="degree-title">Postdoctoral Research Fellow</h4>
                <div className="position-badge">Current</div>
              </div>
              <div className="institution-details">
                <p><strong>Institution:</strong> Central Michigan University (CMU)</p>
                <p><strong>Location:</strong> MI, USA</p>
                <p><strong>Duration:</strong> Sept. 2023 - present</p>
                <p><strong>Advisor:</strong> Dr. Roderick Lammers</p>
              </div>
            </div>
            
            <div className="education-item research-position">
              <div className="education-item-header">
                <h4 className="degree-title">Visiting Postdoctoral Research Fellow</h4>
              </div>
              <div className="institution-details">
                <p><strong>Institution:</strong> University of Science and Technology of China (USTC)</p>
                <p><strong>Location:</strong> Hefei, China</p>
                <p><strong>Duration:</strong> June 2023 - August 2023</p>
                <p><strong>Advisor:</strong> Prof. Changyong Zhang</p>
              </div>
            </div>
            
            <div className="education-item research-position">
              <div className="education-item-header">
                <h4 className="degree-title">Research Associate in Environmental Sciences</h4>
              </div>
              <div className="institution-details">
                <p><strong>Institution:</strong> Institute of Graduate Studies and Research</p>
                <p><strong>Location:</strong> Alexandria, Egypt</p>
                <p><strong>Duration:</strong> 2016 - Sep 2019</p>
                <p><strong>Advisor:</strong> Prof. Ola Abdelwahab</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education; 