import PropTypes from "prop-types";
import styles from "./Project.module.css";

function Project({ name, url, technologies, description, link }) {
  return (
    <section className={styles.projectContainer}>
      <img src={url} alt={`${name} project`} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h2 className={styles.projectName}>{name}</h2>
        <div className={styles.projectTechnologies}>
          {technologies.map((technology, index) => (
            <span key={index} className={styles.technologyBadge}>
              {technology}
            </span>
          ))}
        </div>
        <p className={styles.projectDescription}>{description}</p>
        {link && (
          <div className={styles.projectLink}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Project;
