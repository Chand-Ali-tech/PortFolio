import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faReact,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // MongoDB
import { faDocker } from "@fortawesome/free-brands-svg-icons"; // Docker

import styles from "./Skills.module.css"; // Import the CSS Module

function Skills() {
  return (
    <section className={styles.__skills}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
          <span className={styles.skillName}>HTML5</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
          <span className={styles.skillName}>CSS3</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faJs} className={styles.icon} />
          <span className={styles.skillName}>JavaScript</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faNode} className={styles.icon} />
          <span className={styles.skillName}>Node.js</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
          <span className={styles.skillName}>React</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faGit} className={styles.icon} />
          <span className={styles.skillName}>Git</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span className={styles.skillName}>GitHub</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <span className={styles.skillName}>MongoDB</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faDocker} className={styles.icon} />
          <span className={styles.skillName}>Docker</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
