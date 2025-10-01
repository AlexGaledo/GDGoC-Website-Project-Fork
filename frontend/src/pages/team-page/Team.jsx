import Navbar from "../../components/navigation-bar/Navbar";
import Footer from "../../components/footer-section/Footer";
import HeroText from "../../components/hero-text/Herotext";
import DeptHeader from '../../components/department-header/deptHeader';

import heroStyles from "../../components/hero-text/Herotext.module.css";
import styles from '../team-page/Team.module.css';
import deptStyles from "../../components/department-header/deptHeader.module.css";

import EB from "../../assets/images/team-images/EB/EBimages";
import Francisco from '../../assets/images/team-images/advisers/francisco.svg';
import Enrequez from '../../assets/images/team-images/advisers/Enrequez.svg';
import Tech from "../../assets/images/team-images/TECHNOLOGY DEPARTMENT/techImages";
import Comm from "../../assets/images/team-images/COMMUNICATION DEPARTMENT/commImages";

function Team(){
  return(
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Navbar />
      <HeroText 
        header = "Welcome to the Team!"
        subtext = {
          <>
            The <span className={heroStyles.highlight1}>team</span> that <span className={heroStyles.highlight2}>empowers</span>, <span className={heroStyles.highlight3}>enlightens</span>, and <span className={heroStyles.highlight4}>nurtures</span> student developers at <br />TUP Manila for the 2023-2024 academic year!
          </>
        }
      />

      {/* Executives Board Layout */}
      <div className="align-items-center justify-content-center m-4">
        <h1 className={`${styles.department} m-0 p-0`}>Executive Board Officers</h1>
      </div>
      <div className=" d-flex flex-column align-items-center justify-content-center m-2">
        <div className="row g-3 ">
          <a href="https://www.linkedin.com/in/kienserapio" target="_blank" className={`${styles.imgContainer} col-6`}>
            <img src={EB.Serapio} alt="Kien Leriss R. Serapio" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/micoabas" target="_blank" className={`${styles.imgContainer} col-6`}>
            <img src={EB.Abas} alt="Jhondel Mico Abas" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/josh-j-pantalunan" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={EB.Pantalunan} alt="Josh Pantalunan" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/hannah-ropeta" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={EB.Ropeta} alt="Hannah Lorraine Ropeta" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/alfredmreyes/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 col-lg-3`}>
            <img src={EB.Reyes} alt="Alfred Reyes" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/luke-renacido" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={EB.Renacido} alt="Luke Joseph Renacido" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2 d-lg-none">
          <a href="https://www.linkedin.com/in/alfredmreyes/" target="_blank" className={`${styles.imgContainer} col-6 d-md-none`}>
            <img src={EB.Reyes} alt="Alfred Reyes" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/luke-renacido" target="_blank" className={`${styles.imgContainer} col-6 d-md-none`}>
            <img src={EB.Renacido} alt="Luke Joseph Renacido" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/luke-renacido" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={EB.Renacido} alt="Luke Joseph Renacido" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/zendysantos" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={EB.Zendy} alt="Zendy Santos" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jefferson-padua-730952381" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={EB.Padua} alt="Jefferson Padua" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/judetabuzo" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={EB.Tabuzo} alt="Jude S. Tabuzo Jr." className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ford-torion" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={EB.Torion} alt="Clifford Roy E. Torion" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/judetabuzo" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 d-lg-none`}>
            <img src={EB.Tabuzo} alt="Jude S. Tabuzo Jr." className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ford-torion" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 d-lg-none`}>
            <img src={EB.Torion} alt="Clifford Roy E. Torion" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/racy-ledres" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={EB.Ledres} alt="Racy Jhanna D. Ledres" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/racy-ledres" target="_blank" className={`${styles.imgContainer} col-6 d-md-none d-lg-flex col-lg-4`}>
            <img src={EB.Ledres} alt="Racy Jhanna D. Ledres" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/maria-leonabelle-santos" target="_blank" className={`${styles.imgContainer} col-6 col-md-6 d-lg-flex col-lg-4`}>
            <img src={EB.Santos} alt="Maria Leonabelle Santos" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mitchangelamaisog" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-6 col-lg-4`}>
            <img src={EB.Maisog} alt="Mitch Angela Maisog" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2 mb-5">
          <a href="https://www.linkedin.com/in/mitchangelamaisog" target="_blank" className={`${styles.imgContainer} col-12 d-md-none`}>
            <img src={EB.Maisog} alt="Mitch Angela Maisog" className={styles.image}/>
            <div className={styles.yellowContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>
      
      {/* Faculty Advisers */}
      <div className="align-items-center justify-content-center m-4">
        <h1 className={`${styles.department} m-0 p-0`}>Faculty Advisers</h1>
      </div>
      <div className=" d-flex flex-column align-items-center justify-content-center m-2 mb-5">
        <div className="row g-3 ">
          <a href="" target="_blank" className={`${styles.imgContainer} col-6`}>
            <img src={Francisco} alt="Engr. Elmar Francisco" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={`${styles.imgContainer} col-6`}>
            <img src={Enrequez} alt="Engr. Lejan Enriquez" className={styles.image}/>
            <div className={styles.greenContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* GDGoC DEPARTMENTS */}
      <div className="align-items-center justify-content-center m-5">
        <h1 className={`${heroStyles.header} m-0 p-0`}>GDGoC TUPM Departments</h1>
      </div>

      {/* Technology Department */}
      <DeptHeader 
        header = 'Technology Department'
        subtext={
          <>
            The Technology Department, comprising <span className={deptStyles.highlight1}>committed students</span>, <span className={deptStyles.highlight2}>conceives</span>, <span className={deptStyles.highlight3}>develops</span>, and <span className={deptStyles.highlight4}>implements</span> diverse activities, including workshops and internal projects across various technology sectors.
         </>
        }
      />

      <div className=" d-flex flex-column align-items-center justify-content-center m-3 mb-5">
        <div className="row g-3 d-flex align-items-center justify-content-center">
          <a href="https://www.linkedin.com/in/reign-ivann-bigol-b465b1343/" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3 `}>
            <img src={Tech.Bigol} alt="Reign Ivann Bigol" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sharmaine-hannah-valenzuela-238609383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEetQ5XxHHOGr2c5R3pi4vea8S_MUGT0TcMtrlSp-9XSOZP-RBu0xXMLZIK0OQ_aem_3NCxoY5faoJK7KJ1iTtTzA" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={Tech.Valenzuela} alt="Sharmaine Hannah Valenzuela" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vince-santos-116471381/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEeIOpXfyAqMd5BBm4uighb6VZ55nLSp-xvbueMpyi1OTYK5BrWisuiZvQu708_aem_dEEvje4rTA2ZADLLnrD9iw" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 col-lg-3`}>
            <img src={Tech.Santos} alt="Vince Merick Santos" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lowel-rubino-469216197/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEedQjrKBwSnV01JG09DN7kHkQKUAq_MUbWNBiaM6wCOtYDTrAz7StxziXIHsk_aem_RD3ywd4JuZ2AE8nrCflD1w" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={Tech.Rubino} alt="Lowel Jay Rubino" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/vince-santos-116471381/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEeIOpXfyAqMd5BBm4uighb6VZ55nLSp-xvbueMpyi1OTYK5BrWisuiZvQu708_aem_dEEvje4rTA2ZADLLnrD9iw" target="_blank" className={`${styles.imgContainer} col-6 d-md-none`}>
            <img src={Tech.Santos} alt="Vince Merick Santos" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lowel-rubino-469216197/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdjhUdGxYdHBPYjVYQ0F5VQEedQjrKBwSnV01JG09DN7kHkQKUAq_MUbWNBiaM6wCOtYDTrAz7StxziXIHsk_aem_RD3ywd4JuZ2AE8nrCflD1w" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 d-lg-none`}>
            <img src={Tech.Rubino} alt="Lowel Jay Rubino" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dan-jheniel-bringas-8a898035a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={Tech.Bringas} alt="Dan Jheniel P. Bringas" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/irwenfronda/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={Tech.Fronda} alt="Irwen G. Fronda" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2 d-md-none d-lg-flex">
          <a href="https://www.linkedin.com/in/dan-jheniel-bringas-8a898035a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} col-6 d-md-none d-lg-flex col-lg-3`}>
            <img src={Tech.Bringas} alt="Dan Jheniel P. Bringas" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/irwenfronda/" target="_blank" className={`${styles.imgContainer} col-6 d-md-none d-lg-flex col-lg-3`}>
            <img src={Tech.Fronda} alt="Irwen G. Fronda" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="http://www.linkedin.com/in/catherine-mae-dela-cruz-4448a6381" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={Tech.DelaCruz} alt="Catherine Mae G. Dela Cruz" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/alexander-galedo/" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={Tech.Galedo} alt="Alex Galedo" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="http://www.linkedin.com/in/catherine-mae-dela-cruz-4448a6381" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 d-lg-none`}>
            <img src={Tech.DelaCruz} alt="Catherine Mae G. Dela Cruz" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/alexander-galedo/" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 d-lg-none`}>
            <img src={Tech.Galedo} alt="Alex Galedo" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/eldian-maxi-punzalan/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={Tech.Punzalan} alt="Eldian Maxi D. Punzalan" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/eldian-maxi-punzalan/" target="_blank" className={`${styles.imgContainer} col-6 d-md-none d-lg-flex col-lg-3`}>
            <img src={Tech.Punzalan} alt="Eldian Maxi D. Punzalan" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sean-lucino-84686332a/" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={Tech.Lucino} alt="Sean V. Lucino" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/johnred-dumalagan-bb2092326/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 col-lg-3`}>
            <img src={Tech.Dumalagan} alt="Red Dumalagan" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/axel-magallanes-39b084294/" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 col-lg-3`}>
            <img src={Tech.Magallanes} alt="Axel Magallanes" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2 d-md-none">
          <a href="https://www.linkedin.com/in/johnred-dumalagan-bb2092326/" target="_blank" className={`${styles.imgContainer} col-6 d-md-none`}>
            <img src={Tech.Dumalagan} alt="Red Dumalagan" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/axel-magallanes-39b084294/" target="_blank" className={`${styles.imgContainer} col-6 d-md-none`}>
            <img src={Tech.Magallanes} alt="Axel Magallanes" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/christan-ray-aningat-a6532036b/" target="_blank" className={`${styles.imgContainer} col-6 col-md-4`}>
            <img src={Tech.Aningat} alt="Christan Aningat" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="http://www.linkedin.com/in/jamesivanmatienzo" target="_blank" className={`${styles.imgContainer} col-6 col-md-4`}>
            <img src={Tech.Matienzo} alt="James Ivan Matienzo" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/amiel-keith-padilla-6684a0381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4`}>
            <img src={Tech.Padilla} alt="Amiel Keith E. Padilla" className={styles.image}/>
            <div className={styles.blueContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* Communications Department */}
      <DeptHeader 
        header='Communications Department'
        subtext={
          <>
            The Communications Department endeavors to <span className={deptStyles.highlight1}>formulate innovative</span>, <span className={deptStyles.highlight2}>execute</span>, <span className={deptStyles.highlight3}>efficient</span> and <span className={deptStyles.highlight4}>sustain</span> impactful marketing strategies, cultivating a robust brand identity for our programs and events to reach a broader audience.
          </>
        }
      />
      <div className=" d-flex flex-column align-items-center justify-content-center m-2 mb-5">
        <div className="row g-3 ">
          <a href="" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={Comm.Lazo} alt="Nicole Drew Lazo" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 col-lg-3`}>
            <img src={Comm.Alcantara} alt="Juztynne Dhenielle Alcantara" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/liljanria-nicole-g-dequi%C3%B1a-4503a7377" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 col-lg-3`}>
            <img src={Comm.Liljanria} alt="Liljanria Nicole Dequiña" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/samantha-egar-84a27933b" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={Comm.Egar} alt="Samantha Egar" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/liljanria-nicole-g-dequi%C3%B1a-4503a7377" target="_blank" className={`${styles.imgContainer} col-6 d-md-none`}>
            <img src={Comm.Liljanria} alt="Liljanria Nicole Dequiña" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/samantha-egar-84a27933b" target="_blank" className={`${styles.imgContainer} col-6 col-md-4 d-lg-none`}>
            <img src={Comm.Egar} alt="Samantha Egar" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/may-corto" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={Comm.Corto} alt="May Corto" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={`${styles.imgContainer} d-none d-md-flex col-md-4 d-lg-none`}>
            <img src={Comm.Gayanes} alt="Prince Kyle Gayanes" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="https://www.linkedin.com/in/may-corto" target="_blank" className={`${styles.imgContainer} col-6 d-md-none d-lg-flex col-lg-3`}>
            <img src={Comm.Corto} alt="May Corto" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={`${styles.imgContainer} col-6 d-md-none d-lg-flex col-lg-3`}>
            <img src={Comm.Gayanes} alt="Prince Kyle Gayanes" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={Comm.Mique} alt="Aldred Mique" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/marc-john-lloyd-rivera-578978321" target="_blank" className={`${styles.imgContainer} d-none d-lg-flex col-lg-3`}>
            <img src={Comm.Rivera} alt="Marc John Lloyd Rivera" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
        <div className="row g-3 mt-2">
          <a href="" target="_blank" className={`${styles.imgContainer} col-6 d-lg-none`}>
            <img src={Comm.Mique} alt="Aldred Mique" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/marc-john-lloyd-rivera-578978321" target="_blank" className={`${styles.imgContainer} col-6 d-lg-none`}>
            <img src={Comm.Rivera} alt="Marc John Lloyd Rivera" className={styles.image}/>
            <div className={styles.redContainer}>
              <img src={EB.LinkedIn} alt="LinkedIn logo" className={styles.linkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* Operations Department */}
      <DeptHeader 
        header='Operations Department'
        subtext={
          <>
            The Operations team ensures <span className={deptStyles.highlight1}>seamless</span>, <span className={deptStyles.highlight2}>successful events</span>, <span className={deptStyles.highlight3}>plans</span> and <span className={deptStyles.highlight4}>achieves</span> yearly goals, supporting chapter growth and member enrichment with cause-aligned activities.
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default Team;