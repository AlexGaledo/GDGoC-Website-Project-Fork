import styles from '../department-header/deptHeader.module.css';

function HeroText({header, subtext}){
  return(
    <div className={`${styles.container} d-flex flex-column align-items-center`}>
      <h1 className={styles.header}>{header}</h1>
      <p className={styles.subtext}>{subtext}</p>
    </div>
  );
}

export default HeroText;