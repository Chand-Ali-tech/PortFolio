import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <h2>Follow Me</h2>
          <div className={styles.icons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com/chand.khaleel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/chand-ali-tech"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Chand-Ali-tech"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>Email: chand.ali.web@gmail.com</p>
          <p>Phone: 0312-4034055</p>
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Chand Ali. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
