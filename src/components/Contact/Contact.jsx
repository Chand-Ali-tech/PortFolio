import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Free solid icons
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Free brand icons
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.grid}>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <h2>+92312-4034055</h2>
        </div>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <h2>chand.ali.web@gmail.com</h2>
        </div>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <h2>
            <a
              href="https://linkedin.com/in/chand-ali-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/chand-ali-tech
            </a>
          </h2>
        </div>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <h2>
            <a
              href="https://github.com/Chand-Ali-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Chand-Ali-tech
            </a>
          </h2>
        </div>
        <div className={styles.contactCard}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <h2>
            <a
              href="https://instagram.com/chand.khaleel"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/chand.khaleel
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Contact;
