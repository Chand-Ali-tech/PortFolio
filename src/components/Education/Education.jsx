import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Education.module.css";

function Education() {
  return (
    <section id="education" className={`${styles.wipeEffect} ${styles.educationSection}`}>
      <h1>Education & Work Experience</h1>
      <div className={styles.educationContainer}>
        {/* Education Section */}
        <div className={styles.column}>
          <h2 className={styles.sectionHeading}>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h2>
          <div className={styles.educationItem}>
            <h3>
              FAST NUCES, Lahore <span>2022 - 2026</span>
            </h3>
            <p>(Bachelor of Computer Science)</p>
          </div>
          <div className={styles.educationItem}>
            <h3>
              Punjab College, Sharaqpur <span>2021 - 2022</span>
            </h3>
            <p>FSC (Pre-Engineering)</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className={styles.column}>
          <h2 className={styles.sectionHeading}>
            <FontAwesomeIcon icon={faBagShopping} /> Work Experience
          </h2>
          <div className={styles.workItem}>
            <h3>
              ABC Corporation, Lahore <span>2020 - 2022</span>
            </h3>
            <p>Software Developer Intern</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
