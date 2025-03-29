import { useState} from "react";
import styles from "./Projects.module.css";
import Project from "./Project";

function Projects() {
  
  // State to handle visibility of projects
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      name: "Tour-Folio",
      url: "/p5.jpg",
      technologies: ["MERN", "NODE JS", "React JS", "MongoDB", "Tailwind CSS"],
      description: "Professional website that includes almost everything of stuff related to tours and the places.",
      link: "https://tourfolio.vercel.app",
    },
    {
      name: "UpStarters",
      url: "/p7.png",
      technologies: ["MERN", "NODE JS", "React JS", "MongoDB", "Module CSS"],
      description: "Platform for rasing funds for bussiness startups.",
      link: "https://upstarters.vercel.app/",
    },
    {
      name: "StopWatch",
      url: "/p4.jpg",
      technologies: ["HTML", "CSS", "API"],
      description: "A stopwatch project that includes all functionalities of lap, play, pause, reset, etc.",
      link: "https://chand-ali-tech.github.io/StopWatch/",
    },
    {
      name: "The Quiz App",
      url: "/p6.png",
      technologies: ["React JS"],
      description: "A quiz app that includes all functionalities of quiz, score, timer, etc.",
      link: "https://quiz-app-zone.vercel.app/",
    },
    {
      name: "Quote-Generator",
      url: "/p1.jpg",
      technologies: ["HTML", "CSS", "JS"],
      description: "This is the Quote Generator website that I built in 2nd semester while learning the basics of front-end web development.",
      link: "https://chand-ali-tech.github.io/Quote-Generator/",
    },
    {
      name: "Educational-Platform",
      url: "/p2.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "A professional portfolio website showcasing my skills, experience, and projects in web development.",
      link: "https://chand-ali-tech.github.io/Educational-Platform/",
    },
    {
      name: "Peshawer-Zalmi",
      url: "/p3.jpg",
      technologies: ["HTML", "CSS", "API"],
      description: "A simple replica of Peshawer Zalmi official website",
      link: "https://google.com",
    },
    
  ];
  
  function scrollToSection(id){
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handleClick() {
    if(showMore)
      scrollToSection("projects")

    setShowMore(!showMore);
  }

  return (
    <section className={styles.projectsContainer}  id='projects'>
      <div className={styles.projectsHeader}>
        <h1>My Projects</h1>
      </div>

      <div className={styles.projectList}>
        {(showMore ? projects : projects.slice(0, 3)).map((project, index) => (
          <Project
            key={index}
            name={project.name}
            url={project.url}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

        <button id='__btn' onClick={handleClick}>
          {showMore ? "Show Less" : "Show More"}
        </button>
    </section>
  );
}

export default Projects;