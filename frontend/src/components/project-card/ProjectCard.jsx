import styles from "../project-card/ProjectCard.module.css";


function ProjectCard({image, title, description, designer, developer}){
  return(
    <>
      {/* Mobile design */}
      <div className={`${styles.card} d-flex flex-column align-items-center d-md-none`}>
        <img src={image} alt={title} className={styles.projectImage}/>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <span className={styles.role}>Designers: <span className={styles.name}>{designer}</span></span>
        <span className={styles.role}>Developers: <span className={styles.name}>{developer}</span></span>
        <button className={styles.viewButton}>View Project</button>
      </div>
      {/* Tablet design */}
      <div className={`${styles.card} d-none d-xl-none d-md-flex flex-column align-items-center`}>
        <h1 className={styles.title}>{title}</h1>
        <div className="d-flex justify-content-center gap-4">
          <img src={image} alt={title} className={styles.projectImage}/>
          <div className="d-flex flex-column align-items-start">
            <p className={styles.description}>{description}</p>
            <span className={styles.role}>Designers: <span className={styles.name}>{designer}</span></span>
            <span className={styles.role}>Developers: <span className={styles.name}>{developer}</span></span>
            <button className={styles.viewButton}>View Project</button>
          </div>
        </div>
      </div>
      {/* Desktop Design */}
      <div className={`${styles.card} d-none d-xl-flex justify-content-center`}>
        <div className="d-flex justify-content-center gap-4">
          <img src={image} alt={title} className={styles.projectImage}/>
          <div className="d-flex flex-column align-items-start">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <span className={styles.role}>Designers: <span className={styles.name}>{designer}</span></span>
            <span className={styles.role}>Developers: <span className={styles.name}>{developer}</span></span>
            <button className={styles.viewButton}>View Project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;