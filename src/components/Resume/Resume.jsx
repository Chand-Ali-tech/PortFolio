import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faUsers,
  faBriefcase,
  faClock,
  faTrophy,
  faFile,
} from "@fortawesome/free-solid-svg-icons"; // Import the `faFile` icon
import styles from "./Resume.module.css";

function Resume() {
  const url = "CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section id="resume">
      <h1 className={styles.title}>My Resume</h1>
      <div className={styles.grid}>
        <div className={styles.headingCard}>
          <FontAwesomeIcon icon={faDiagramProject} className={styles.icon} />
          <h2>30+ Projects</h2>
        </div>
        <div className={styles.headingCard}>
          <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
          <h2>3+ Years of Experience</h2>
        </div>
        <div className={styles.headingCard}>
          <FontAwesomeIcon icon={faUsers} className={styles.icon} />
          <h2>10+ Clients</h2>
        </div>
        <div className={styles.headingCard}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <h2>100+ Hours of Work</h2>
        </div>
        <div className={styles.headingCard}>
          <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
          <h2>Top 10% in the Industry</h2>
        </div>
        

        

      </div>
      <button className={styles.downloadButton} onClick={handleDownload}>
        Download Resume <FontAwesomeIcon icon={faFile} className={ styles.__set} /> {/* Use the imported `faFile` icon */}
      </button>
    </section>
  );
}

export default Resume;
