import Navbar from "../../components/navigation-bar/Navbar";
import Footer from "../../components/footer-section/Footer";
import HeroText from "../../components/hero-text/Herotext";

import heroStyles from "../../components/hero-text/Herotext.module.css";
import styles from '../team-page/Team.module.css';

import EB from "../../assets/images/team-images/EBimages";

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
      <div className="align-items-center justify-content-center m-4">
        <h1 className={styles.department}>Executive Board Officers</h1>
      </div>
      <div className="container align-items-center justify-content-center">
        <div className="row g-0">
          <a href="" target="_blank" className="col-6 d-flex align-items-center justify-content-center">
            <img src={EB.Serapio} alt="Kien_Leriss_R._Serapio" className={styles.image}/>
          </a>
          <a href="" target="_blank" className="col-6 d-flex align-items-center justify-content-center">
            <img src={EB.Serapio} alt="Kien_Leriss_R._Serapio" className={styles.image}/>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Team;