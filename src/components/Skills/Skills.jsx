import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faReact,
  faGit,
  faGithub,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons"; // MongoDB, C++
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons"; // Tailwind CSS (Alternative icon)
import { faServer } from "@fortawesome/free-solid-svg-icons"; // Express.js
import { faPython } from "@fortawesome/free-brands-svg-icons"; // Python

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
          <FontAwesomeIcon icon={faServer} className={styles.icon} />
          <span className={styles.skillName}>Express.js</span>
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
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faFeatherAlt} className={styles.icon} />
          <span className={styles.skillName}>Tailwind CSS</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <span className={styles.skillName}>C++</span>
        </div>
        <div className={styles.skillItem}>
          <FontAwesomeIcon icon={faPython} className={styles.icon} />
          <span className={styles.skillName}>Python</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
