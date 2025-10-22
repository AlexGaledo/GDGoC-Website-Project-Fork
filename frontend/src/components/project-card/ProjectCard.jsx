import styles from "../project-card/ProjectCard.module.css";


function ProjectCard({image, title, description}){
  return(
    <>
      
      {/* Mobile design */}
      <div className={`${styles.card} d-flex flex-column align-items-center d-md-none`}>
        <img src={image} alt={title} className={styles.projectImage}/>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
          <div className="d-flex flex-column gap-2">
            <div className={styles.roleContainer}>
              <p className={styles.role}>UI/UX designers:</p>
              <p className={styles.name}>Alfred M. Reyes</p>
              <p className={styles.name}>Sharmaine Hannah Valenzuela</p>
              <p className={styles.name}>Lowel-Jay Rubino</p>
              <p className={styles.name}>Vince Merick Santos </p>
            </div>
            <div className={styles.roleContainer}>
              <p className={styles.role}>AI/ML Developers:</p>
              <p className={styles.name}>Red Dumalagan</p>
              <p className={styles.name}>Axel Magallanes</p>
              <p className={styles.name}>Christan Aningat</p>
              <p className={styles.name}>Vince Merick Santos </p>
            </div>
            <div>
              <p className={styles.role}>Front End Developers:</p>
              <p className={styles.name}>John Paul S. Monter</p>
              <p className={styles.name}>Dan Jheniel, P. Bringas</p>
              <p className={styles.name}>Irwen G. Fronda</p>
              <p className={styles.name}>Catherine Mae G. Dela Cruz</p>
            </div>
            <div>
              <p className={styles.role}>Back End Developers:</p>
              <p className={styles.name}>Alex Galedo</p>
              <p className={styles.name}>Eldian Maxi D. Punzalan</p>
              <p className={styles.name}>Sean V. Lucino</p>
            </div>
          </div>
        <button className={styles.viewButton}>View Project</button>
      </div>

      {/* Tablet design */}
      <div className={`${styles.card} d-none d-xl-none d-md-flex flex-column align-items-center`}>
        <h1 className={styles.title}>{title}</h1>
        <div className="d-flex justify-content-center gap-4">
          <img src={image} alt={title} className={styles.projectImage}/>
          <div className="d-flex flex-column align-items-start">
            <p className={styles.description}>{description}</p>
            <div className="d-flex">
              <div className="d-flex flex-column gap-4">
                <div className={styles.roleContainer}>
                  <p className={styles.role}>UI/UX designers:</p>
                  <p className={styles.name}>Alfred M. Reyes</p>
                  <p className={styles.name}>Sharmaine Hannah Valenzuela</p>
                  <p className={styles.name}>Lowel-Jay Rubino</p>
                  <p className={styles.name}>Vince Merick Santos </p>
                </div>
                <div className={styles.roleContainer}>
                  <p className={styles.role}>AI/ML Developers:</p>
                  <p className={styles.name}>Red Dumalagan</p>
                  <p className={styles.name}>Axel Magallanes</p>
                  <p className={styles.name}>Christan Aningat</p>
                  <p className={styles.name}>Vince Merick Santos </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-4">
                <div>
                  <p className={styles.role}>Front End Developers:</p>
                  <p className={styles.name}>John Paul S. Monter</p>
                  <p className={styles.name}>Dan Jheniel, P. Bringas</p>
                  <p className={styles.name}>Irwen G. Fronda</p>
                  <p className={styles.name}>Catherine Mae G. Dela Cruz</p>
                </div>
                <div>
                  <p className={styles.role}>Back End Developers:</p>
                  <p className={styles.name}>Alex Galedo</p>
                  <p className={styles.name}>Eldian Maxi D. Punzalan</p>
                  <p className={styles.name}>Sean V. Lucino</p>
                </div>
              </div>
            </div>
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
            <div className="d-flex">
              <div className="d-flex flex-column gap-4">
                <div className={styles.roleContainer}>
                  <p className={styles.role}>UI/UX designers:</p>
                  <p className={styles.name}>Alfred M. Reyes</p>
                  <p className={styles.name}>Sharmaine Hannah Valenzuela</p>
                  <p className={styles.name}>Lowel-Jay Rubino</p>
                  <p className={styles.name}>Vince Merick Santos </p>
                </div>
                <div className={styles.roleContainer}>
                  <p className={styles.role}>AI/ML Developers:</p>
                  <p className={styles.name}>Red Dumalagan</p>
                  <p className={styles.name}>Axel Magallanes</p>
                  <p className={styles.name}>Christan Aningat</p>
                  <p className={styles.name}>Vince Merick Santos </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-4">
                <div>
                  <p className={styles.role}>Front End Developers:</p>
                  <p className={styles.name}>John Paul S. Monter</p>
                  <p className={styles.name}>Dan Jheniel, P. Bringas</p>
                  <p className={styles.name}>Irwen G. Fronda</p>
                  <p className={styles.name}>Catherine Mae G. Dela Cruz</p>
                </div>
                <div>
                  <p className={styles.role}>Back End Developers:</p>
                  <p className={styles.name}>Alex Galedo</p>
                  <p className={styles.name}>Eldian Maxi D. Punzalan</p>
                  <p className={styles.name}>Sean V. Lucino</p>
                </div>
              </div>
            </div>

            <button className={styles.viewButton}>View Project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;