import Navbar from "../../components/navigation-bar/Navbar";
import HeroText from "../../components/hero-text/Herotext";
import ProjectCard from "../../components/project-card/ProjectCard";
import styles from "../project-page/Project.module.css";
import heroStyles from "../../components/hero-text/Herotext.module.css";
import websiteProjectImg from "../../assets/images/project-images/gdgoc-website.svg";

function Project(){
  return(
    <>
      <Navbar />
      <HeroText 
        header = "Explore our Project"
        subtext = {
          <>
            Explore tech excellence with GDSC TUP Manila! Join us for <span className={heroStyles.highlight1}>innovative projects</span>, <span className={heroStyles.highlight2}>tech excellence</span>, <span className={heroStyles.highlight3}>vibrant events</span>, and a <span className={heroStyles.highlight4}>dynamic community</span>. Elevate your skills and be part of shaping the future together!
          </>
        }
      />
      <ProjectCard 
        image = {websiteProjectImg}
        title = "GDGoC TUPM - Official Website"
        description = "Welcome to the Google Developer Student Club - TUP Manila website. Immerse yourself in a community of dedicated members, uncover a diverse array of services, and actively engage in the development of unforgettable projects!"
        designer="Juan Dela Cruz"
        developer="Cruz Dela Juan"
      />
    </>
  );
}

export default Project