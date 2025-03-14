import React, { useState, useEffect } from 'react';
import '../pages/Pages.css';

const Publications = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    // Add scroll animation for year groups
    const handleScroll = () => {
      const elements = document.querySelectorAll('.year-group');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 100); // Staggered animation
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-container publications-page">
      <div className="page-background"></div>
      
      <div className={`page-header ${animate ? 'animate' : ''}`}>
        <h1>Publications</h1>
        <div className="header-underline"></div>
      </div>
      
      <section className={`publications-section ${animate ? 'animate' : ''}`}>
        <div className="publications-summary">
          <h2 className="section-title">Summary</h2>
          <ul className="summary-list">
            <li><strong>Total Published Peer Reviewed Articles:</strong> <span className="highlight-count">37</span></li>
            <li><strong>First Author Articles:</strong> <span className="highlight-count">18</span></li>
            <li><strong>(Co-First Author) Articles:</strong> <span className="highlight-count">5</span></li>
            <li><strong>Corresponding Author Articles:</strong> <span className="highlight-count">7</span></li>
            <li><strong>(Co-Author) Articles:</strong> <span className="highlight-count">14</span></li>
            <li><strong>Times cited:</strong> <span className="highlight-count">1022</span></li>
            <li><strong>H-index/i10-index:</strong> <span className="highlight-count">17/20</span></li>
            <li>
              <strong>Google Scholar:</strong> 
              <a 
                href="https://scholar.google.com/citations?user=WzFyx8AAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="scholar-link"
              >
                View Profile
              </a>
            </li>
          </ul>
        </div>
        
        <div className="publications-list">
          <h2 className="section-title">Peer Reviewed Publications</h2>
          
          <div className="year-group">
            <h3 className="year-heading">2025</h3>
            <ol className="publications-by-year">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mohamed S. Gaballah* and Roderick W. Lammers</strong></p>
                  <p className="publication-title">Assessing the factors influencing constructed wetland performance for mitigating agricultural nutrient runoff in the U.S.</p>
                  <p className="publication-journal">Journal of Water Process Engineering, 71, 107293.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mostafa Sobhi, Eman Zakaria, Tamer Elsamahy, Feifei Zhu, Mohamed S. Gaballah, Eid S. Gaballah, Xinjuan Hu, Yi Cui, Shuhao Huo</strong></p>
                  <p className="publication-title">Environmental and economic assessment of nitrogen-fixing Nostoc sp. as a sustainable alternative to synthetic urea fertilization</p>
                  <p className="publication-journal">Process Safety and Environmental Protection, February 2025, 106917.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mahmoud M. Alia, Leli Zhanga, Yongdong Xu, Mohamed S. Gaballah, Eid S. Gaballah, M. Samer, Zhidan Liu</strong></p>
                  <p className="publication-title">Nexus between anaerobic digestion of animal waste and antibiotic-related pollutants: A critical review</p>
                  <p className="publication-journal">Applied Energy, Volume 382, 15 March 2025, 125284.</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Yasna Mortezaei ϴ, Mohamed S. Gaballah ϴ, Goksel N. Demirer, Roderick W. Lammers, Maggie R. Williams</strong></p>
                  <p className="publication-title">From Wastewater to Sludge: The Role of Microplastics in Shaping Anaerobic Digestion Performance and Antibiotic Resistance Gene Dynamics</p>
                  <p className="publication-journal">Journal of Hazardous Materials, Volume 489, 5 June 2025, 137413.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2024</h3>
            <ol className="publications-by-year" start="5">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mostafa Sobhi, Tamer Elsamahy, Eman Zakaria, Mohamed S. Gaballah, Feifei Zhu, Xinjuan Hu, Cunshan Zhou, Jianbin Guo, Shuhao Huo, Renjie Dong</strong></p>
                  <p className="publication-title">Characteristics, limitations and global regulations in the use of biogas digestate as fertilizer: A comprehensive overview</p>
                  <p className="publication-journal">Science of The Total Environment, Vol 957, 20 December 2024, 177855.</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S. *, Hooshyar Yousefyani, Mohammadjavad Karami, Roderick W. Lammers</strong></p>
                  <p className="publication-title">From Literature to Action: Analysing how nitrogen and phosphorus removal responds to different design factors in free water surface constructed wetlands</p>
                  <p className="publication-journal">ACS ES&T Engineering; https://doi.org/10.1021/acsestengg.4c00392</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mostafa Sobhi, Tamer Elsamahy, Yajie Zhang, Eman Zakaria, Siyuan Ren, Gaballah M.S., Feifei Zhu, Xinjuan Hu, Yi Cui, Shuhao Huo</strong></p>
                  <p className="publication-title">Adaptation of Chlorella vulgaris immobilization on rice straw with liquid manure to create a sustainable feedstock for biogas production and potential feed applications</p>
                  <p className="publication-journal">Journal of Environmental Management, 370, November 2024, 123050.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Philbert Mperejekumanaa, Lei Shena*, Shuai Zhonga, Mohamed S. Gaballah, Fabien Muhirwa</strong></p>
                  <p className="publication-title">Exploring the potential of Decentralized Renewable Energy Conversion Systems on water, energy, and food security in Africa</p>
                  <p className="publication-journal">Energy Conversion and Management, 315, 118757.</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S*., Hooshyar Yousefyani, Mohammadjavad Karami, Roderick W. Lammers</strong></p>
                  <p className="publication-title">Free water surface constructed wetlands: review of pollutant removal performance and modelling approaches</p>
                  <p className="publication-journal">Environmental science and pollution research, 31, 44649–44668, (2024).</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Philbert Mperejekumanaa, Lei Shena, Mohamed S. Gaballah, Shuai Zhong</strong></p>
                  <p className="publication-title">Exploring the potential and challenges of energy transition and household cooking sustainability in Sub-Sahara Africa</p>
                  <p className="publication-journal">Renewable and Sustainable Energy Reviews, Volume 199, July 2024, 114534.</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Hameer Chand, Jianbin Guo, Changyong Zhang</strong></p>
                  <p className="publication-title">Mixed veterinary antibiotics removal and effects on anaerobic digestion of animal wastes: current practices and future perspectives</p>
                  <p className="publication-journal">Chemical Engineering Journal, 483,149131. https://doi.org/10.1016/j.cej.2024.149131.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Jianbin Guo, Atif Muhmoud, Mostafa Sobhi, Mohamed Ateia, Mohamed A. Ghorab, Zheng Yonghi, Renjie Dong</strong></p>
                  <p className="publication-title">Degradation and removal mechanisms of mixed veterinary antibiotics in swine manure during anaerobic and storage treatments: Validation and Characterization</p>
                  <p className="publication-journal">Journal of Water Process Engineering, Volume 59, March 2024, 105024.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Hameer Chand, Zhuang Liu, Qiang Wei, Mohamed S. Gaballah, Wenhao Li, Olga Osmolovskaya, Anastasiia Podurets, Mikhail Voznesenskiy, Natalia Pismenskaya, Lokesh P. Padhye, Changyong Zhang</strong></p>
                  <p className="publication-title">Performance and mechanism of chromium removal using flow electrode capacitive deionization (FCDI): Validation and optimization</p>
                  <p className="publication-journal">Separation and Purification Technology, 340, 15 July 2024, 126696.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Thien-Khanh Tran, Minh-Ky Nguyen, Chitsan Lin, Tuan-Dung Hoang, Thanh-Cong Nguyen, Aasif Mohmad Lone, Akhil Pradiprao Khedulkar, Gaballah M.S., Jagpreet Singh, W. Jin Chung, D. Duc Nguyen</strong></p>
                  <p className="publication-title">Review on fate, transport, toxicity and health risk of nanoparticles in natural ecosystems: Emerging challenges in the modern age and solutions toward a sustainable environment</p>
                  <p className="publication-journal">Science of the total Environment, 15 Dec, 2023, 169331.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Philbert Mperejekumana, Lei Shen, Shuai Zhong, Fabien Muhirwa, Gaballah M.S., Jean Marie Vianney Nsigayehe</strong></p>
                  <p className="publication-title">Integrating climate change adaptation into water-energy-food-environment nexus for sustainable development in East African Community</p>
                  <p className="publication-journal">Journal of cleaner production (434), 140026.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2023</h3>
            <ol className="publications-by-year" start="16">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Jianbin Guo, Amro Hassanein, Mostafa Sobhi, Mperejekumana Philbert, Zheng Yonghi, Renjie Dong</strong></p>
                  <p className="publication-title">Improving removal of combined veterinary antibiotics and mitigating their negative impacts during anaerobic digestion of swine manure using modified bentonite</p>
                  <p className="publication-journal">Journal of Water Process Engineering. 53, 103877.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Mostafa Sobhi, Jianbin Guo, Mperejekumana Philbert, Lin Min, Zheng Yonghi, Mohamed A. Ghorab, Renjie Dong</strong></p>
                  <p className="publication-title">Evaluating the removal and impacts of combined tetracycline, oxytetracycline, sulfadiazine, and norfloxacin during swine manure storage process at ambient temperatures</p>
                  <p className="publication-journal">Journal of Environmental chemical engineering, (11), 109765.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Jianbin Guo, Amro Hassanein, Mostafa Sobhi, Yonghui Zheng, Mperejekumana Philbert, Bowen Li, Hui Sun, Renjie Dong</strong></p>
                  <p className="publication-title">Removal performance and inhibitory effects of combined Tetracycline, Oxytetracycline, Sulfadiazine, and Norfloxacin on anaerobic digestion process treating swine manure</p>
                  <p className="publication-journal">Science of the total environment, V. 857, Part 3, 2023, 159536.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Hawash, H.B., Moneer, A.A., Galhoum, A.A., Elgarahy, A.M., Mohamed, W.A.A., Samy, M., El-Seedi, H.R., Gaballah M. S, Mubarak, M.F., F.Attia, N.</strong></p>
                  <p className="publication-title">Occurrence and spatial distribution of pharmaceuticals and personal care products (PPCPs) in the aquatic environment, their characteristics, and adopted legislations</p>
                  <p className="publication-journal">J. water Process Eng. 52, 103490.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mostafa Sobhi, Jiabao Zheng, Bowen Li, Gaballah M.S., Jianbin Guo, Renjie Dong</strong></p>
                  <p className="publication-title">Carbon footprint of dairy manure management chains in response to nutrient recovery by aerobic pre-treatment</p>
                  <p className="publication-journal">Journal of Environmental Management, 328, 116975-2023.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Ahmed M. Elgarahy, M. G. Eloffy, Ahmed Alengebawy, Dina M. El-Sherif, Gaballah M.S.ϴ, Mohamed El-Qelish, Khalid Z. Elwakeel</strong></p>
                  <p className="publication-title">Sustainable management of food waste; pre-treatment strategies, techno-economic assessment, bibliometric analysis, and potential utilisations: A systematic review</p>
                  <p className="publication-journal">Environmental research Journal, v.215. 15 May 2023, 115558.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gharieb S. El-Sayyad, Dounia Elfadil, Gaballah M.S., Dina M. El-Sherif, Mohamed Abouzid, Hanady G. Nada, Mohamed S. Khalil and Mohamed A. Ghorab</strong></p>
                  <p className="publication-title">Implication of nanotechnology to reduce the environmental risks of waste associated with the COVID-19 pandemic</p>
                  <p className="publication-journal">RSC Adv., 2023,13, 12438-12454. https://doi.org/10.1039/D3RA01052J.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2022</h3>
            <ol className="publications-by-year" start="23">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S.*, Saber AN, Guo J.</strong></p>
                  <p className="publication-title">A Review of Constructed Wetlands Types and Plants Used for Wastewater Treatment in Egypt</p>
                  <p className="publication-journal">In: Constructed Wetlands for Wastewater Treatment in Hot and Arid Climates. Springer Netherlands; 2022:43-56. DOI: 10.1007/978-3-031-03600-2_3.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Ola Abdelwahab, Khouloud M. Barakat, Alexandros I. Stefankis</strong></p>
                  <p className="publication-title">A pilot system integrating a settling technique and a horizontal subsurface flow constructed wetland for the treatment of polluted lake water</p>
                  <p className="publication-journal">Chemosphere, 295, 133844. https://doi.org/10.1016/j.chemosphere.2022.133844.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mostafa Sobhi, Jianbin Guo, Gaballah M.S., Bowen Li, Jiabao Zheng, Xian Cui, Hui Sun, Renjie Dong</strong></p>
                  <p className="publication-title">Selecting the optimal nutrients recovery application for a biogas slurry based on its characteristics and the local environmental conditions: A critical review</p>
                  <p className="publication-journal">Science of the total environment, 2022-21-25809. https://doi.org/10.1016/j.scitotenv.2021.152700.</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2021</h3>
            <ol className="publications-by-year" start="26">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Jianbin Guo, Sun Hui, D. Aboauge, Mostafa sobhi, Atif Mahmoud, Renjie Dong</strong></p>
                  <p className="publication-title">A review targeting veterinary antibiotics removal from livestock manure management systems and future outlook</p>
                  <p className="publication-journal">Bioresource Technology 333(2):125069. DOI: 10.1007/s11356-021-12442-7.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah, M.S., Li, X.; Zhang, Z.; Al-Anazi, A.; Sun, H.; Sobhi, M.; Philbert, M.; Ghorab, M.A.; Guo, J.; Dong, R.</strong></p>
                  <p className="publication-title">Determination of Tetracycline, Oxytetracycline, Sulfadiazine, Norfloxacin, and Enrofloxacin in Swine Manure Using a Coupled Method of On-Line Solid-Phase Extraction with the UHPLC–DAD</p>
                  <p className="publication-journal">Antibiotics 2021, 10, 1397.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S.*, K.Ismail, D. Aboauge, M. Ismail, M. Sobhi, and A. I. Stefanakis</strong></p>
                  <p className="publication-title">Effect of design and operational parameters on nutrients and heavy metals removal in pilot Floating Treatment Wetlands with Eichhornia Crassipes treating polluted lake water</p>
                  <p className="publication-journal">Environmental science and pollution research, 2021. DOI: 10.1007/s11356-02112442-7.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Mostafa Sobhi, Gaballah M.S., Tongtong, Xian cui, Bowen li, Sun Hui, Jianbin Guo,Renjie Dong</strong></p>
                  <p className="publication-title">Nutrients recovery from fresh liquid manure through an airlift reactor to mitigate the greenhouse gas emissions of open anaerobic lagoons</p>
                  <p className="publication-journal">Journal of Environmental Management 293(1–6):112956. DOI: 10.1016/j.jenvman.2021.112956.</p>
                </div>
                <div className="publication-badge waste">Waste</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Ahmed M. Elgarahy ϴ, Ahmed Hammad, Dina M. El-Sherif, Mohamed Abouzid, Gaballah M.S.ϴ, Khalid Z. Elwakeel*</strong></p>
                  <p className="publication-title">Thermochemical conversion strategies of biomass to biofuels, techno-economic and bibliometric analysis: a conceptual review</p>
                  <p className="publication-journal">Journal of Environmental Chemical Engineering, 106503. DOI: 10.1007/s11356-021-17096-z</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Philbert Mperejekumana; Huan Li; Rucong Wu; Jiaxin Lu; Obid Tursunov; Hussien Elshareef; Gaballah M.S., Nsengiyumva Jean Nepo; Yuguang Zhou; Renjie Dong</strong></p>
                  <p className="publication-title">Determinants of Household Energy Choice for Cooking in Northern Sudan: A Multinomial Logit Estimation</p>
                  <p className="publication-journal">Int. J. Environ. Res. Public Health 2021, Volume 18, Issue 21, 11480.</p>
                </div>
                <div className="publication-badge energy">Energy</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Dina M. El-Sherif ϴ, Mohamed Abouzid, Gaballah M.S. ϴ, Alhassan Ali Ahmed, Muhammad Adeel and Sheta M. Sheta</strong></p>
                  <p className="publication-title">New approach in SARS-CoV-2 surveillance using biosensor technology: a review</p>
                  <p className="publication-journal">Environmental science and pollution research, DOI: 10.1007/s11356-021-17096-z.</p>
                </div>
                <div className="publication-badge environment">Environment</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Ahmed E. Alprol ϴ, Gaballah M.S.*ϴ, Mohamed A. Hassaan</strong></p>
                  <p className="publication-title">Micro and Nanoplastics analysis: Focus on their classification, sources, and impacts in marine environment</p>
                  <p className="publication-journal">Regional Studies in Marine Science, 42, February 2021, 101625.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
              
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Ola Abdelwahab ϴ, Gaballah M.S.*ϴ, Khouloud M. Barakat, Dominic Aboagye</strong></p>
                  <p className="publication-title">Pilot modified settling techniques as a novel route for treating water influent from Lake-Marriott</p>
                  <p className="publication-journal">Journal of Water Process Engineering 42(1):101985.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2020</h3>
            <ol className="publications-by-year" start="35">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S., Ola Abdelwahab, Khouloud M. Barakat, Dominic Aboagye</strong></p>
                  <p className="publication-title">A Novel Horizontal Subsurface Flow Constructed Wetland Planted with Typha angustifolia for Treatment of Polluted Water</p>
                  <p className="publication-journal">Environmental Science and Pollution Research. 27(15).</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2019</h3>
            <ol className="publications-by-year" start="36">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S.*, K. Ismail, A. Beltagy, A. M. Zein Eldin, M. M. Ismail</strong></p>
                  <p className="publication-title">Wastewater treatment potential of Water lettuce (Pistia Stratiotes) with modified engineering design</p>
                  <p className="publication-journal">Journal of Water Chemistry and Technology, Vol. 41, No. 3, pp. 197–205. © Allerton Press, Inc., 2019.</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
            </ol>
          </div>
          
          <div className="year-group">
            <h3 className="year-heading">2017</h3>
            <ol className="publications-by-year" start="37">
              <li className="publication-item">
                <div className="publication-content">
                  <p className="publication-authors"><strong>Gaballah M.S.*, K.Ismail, A.Beltagy A.M. Zein Eldin</strong></p>
                  <p className="publication-title">Treatment of Polluted Lake Water</p>
                  <p className="publication-journal">LAP LAMBERT Academic Publishing, Book (ISBN-13 980-3-659-86786-6)</p>
                </div>
                <div className="publication-badge water">Water</div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications; 