import '../pages/Pages.css';
import { useState, useEffect, useRef } from 'react';
import profileImage from '../../assets/Mohamed.jpg';

const Home = () => {
  // State to handle image loading and animations
  const [imageError, setImageError] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  // Refs for scroll animations
  const personalSectionRef = useRef(null);
  const awardsSectionRef = useRef(null);
  const researchSectionRef = useRef(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      // We'll use the refs for future scroll-based animations if needed
      // Currently using simpler animation approach
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initial animation on component mount
  useEffect(() => {
    setAnimate(true);
    
    // Add water ripple effect to the background
    const interval = setInterval(() => {
      const ripple = document.createElement('div');
      ripple.classList.add('water-ripple');
      ripple.style.left = `${Math.random() * 100}%`;
      ripple.style.top = `${Math.random() * 100}%`;
      
      const homePageElement = document.querySelector('.home-page');
      if (homePageElement) {
        homePageElement.appendChild(ripple);
        
        // Remove ripple after animation completes
        setTimeout(() => {
          if (homePageElement.contains(ripple)) {
            homePageElement.removeChild(ripple);
          }
        }, 4000);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container home-page">
      <div className="background-gradient"></div>
      
      <div className={`home-header ${animate ? 'animate' : ''}`}>
        <div className="profile-image-container">
          {!imageError ? (
            <img 
              src={profileImage} 
              alt="Mohamed Saad" 
              className="profile-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="profile-image-placeholder">
              <span className="placeholder-text">MS</span>
            </div>
          )}
          <div className="image-border"></div>
        </div>
        <div className="header-content">
          <h1>Mohamed S. Gaballah</h1>
          <h2>Environmental Engineer & Researcher</h2>
          <div className="header-tagline">
            <p>Advancing sustainable solutions for environmental challenges</p>
          </div>
          <div className="header-keywords">
            <span className="keyword">Wastewater Treatment</span>
            <span className="keyword">Sustainable Energy</span>
            <span className="keyword">Environmental Monitoring</span>
          </div>
        </div>
      </div>

      <div className="home-content-wrapper">
        <section 
          ref={personalSectionRef}
          className={`home-section personal-section ${animate ? 'animate' : ''}`}
        >
          <div className="section-decoration">
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Personal Statement</h2>
          <div className="section-content">
            <p className="personal-statement">
              Dedicated environmental engineer, researcher, and educator with extensive expertise in wastewater treatment, 
              pollutant removal, and sustainable energy solutions. Skilled in teaching environmental engineering and applied sciences, 
              complemented by a proven track record of leading innovative research in constructed wetlands, antibiotic mitigation, 
              nutrient and heavy metal removal, microplastics analysis, pollutant impact assessment, modeling, data analysis, 
              and waste-to-energy technologies, including anaerobic digestion. Passionate about advancing scientific knowledge, 
              developing sustainable environmental solutions, and mentoring the next generation of engineers to tackle pressing 
              global environmental challenges.
            </p>
          </div>
        </section>

        <section 
          ref={awardsSectionRef}
          className={`home-section awards-section ${animate ? 'animate' : ''}`}
        >
          <div className="section-decoration">
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Awards & Recognitions</h2>
          <div className="section-content">
            <ul className="awards-list">
              <li className="award-item">
                <div className="award-badge">
                  <span className="award-year">2023</span>
                </div>
                <div className="award-content">
                  <p className="award-title">Best Graduate Prize, Ph.D.</p>
                  <p className="award-description">(iBEST), China Agricultural University</p>
                </div>
              </li>
              <li className="award-item">
                <div className="award-badge">
                  <span className="award-year">2019-2023</span>
                </div>
                <div className="award-content">
                  <p className="award-title">China Scholarship Council (CSC) Scholarship</p>
                  <p className="award-description">For Ph.D. program in Engineering (Agricultural Engineering)</p>
                </div>
              </li>
              <li className="award-item">
                <div className="award-badge">
                  <span className="award-year">2021</span>
                </div>
                <div className="award-content">
                  <p className="award-title">Bronze Medal Award</p>
                  <p className="award-description">2021 Forum on Renewable Energy Promotion in Developing Countries, China Agriculture University, Beijing, China</p>
                </div>
              </li>
              <li className="award-item">
                <div className="award-badge">
                  <span className="award-year">International</span>
                </div>
                <div className="award-content">
                  <p className="award-title">International Seabed Authority (ISA) Training Scholarship</p>
                  <p className="award-description">Szczecin University, University of Chemistry and Technology - Deep sea exploration and its environmental sustainability</p>
                </div>
              </li>
              <li className="award-item">
                <div className="award-badge">
                  <span className="award-year">International</span>
                </div>
                <div className="award-content">
                  <p className="award-title">International Ocean Institute (IOI) Scholarship</p>
                  <p className="award-description">Ocean governance and its sustainability</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        <section 
          ref={researchSectionRef}
          className={`home-section research-highlights ${animate ? 'animate' : ''}`}
        >
          <div className="section-decoration">
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Research Focus</h2>
          <div className="section-content">
            <div className="research-areas">
              <div className="research-area water-area">
                <div className="research-area-background"></div>
                <h3 className="research-area-title">Water Treatment</h3>
                <p>Developing innovative solutions for wastewater treatment and pollutant removal</p>
              </div>
              <div className="research-area energy-area">
                <div className="research-area-background"></div>
                <h3 className="research-area-title">Sustainable Energy</h3>
                <p>Exploring waste-to-energy technologies and anaerobic digestion processes</p>
              </div>
              <div className="research-area monitoring-area">
                <div className="research-area-background"></div>
                <h3 className="research-area-title">Environmental Monitoring</h3>
                <p>Analyzing microplastics and assessing pollutant impacts on ecosystems</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home; 