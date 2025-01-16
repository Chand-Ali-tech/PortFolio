import PropTypes from 'prop-types';

import styles from './Project.module.css';

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
    name: PropTypes.string.isRequired, // Ensures 'name' is a required string
    url: PropTypes.string.isRequired, // Ensures 'url' is a required string
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensures 'technologies' is a required array of strings
    description: PropTypes.string.isRequired, // Ensures 'description' is a required string
    link: PropTypes.string, // Ensures 'link' is an optional string
};

export default Project;