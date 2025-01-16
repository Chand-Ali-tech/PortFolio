import PropTypes from "prop-types"; // Import PropTypes
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Header({ theme, setTheme }) {
  const [sideBar, setSideBar] = useState(false);

  function handleDarkClick() {
    setTheme("night");
    document.body.classList.remove("day");
    document.body.classList.add("night");
  }

  function handleLightClick() {
    setTheme("day");
    document.body.classList.remove("night");
    document.body.classList.add("day");
  }

  function handleSidebar() {
    setSideBar(!sideBar);
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src="/1.jpg" alt="Logo" />
      </div>

      <div className={styles.themeChanger}>
        {theme === "night" ? (
          <button
            id="btn1"
            onClick={handleLightClick}
            className={styles.sunIcon}
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
        ) : (
          <button
            id="btn2"
            onClick={handleDarkClick}
            className={styles.moonIcon}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        )}
      </div>

      
      {/* Sidebar toggle icons */}
      <div className={styles.sidebarIcon} onClick={handleSidebar}>
      
        {sideBar ? (
          <ImCross className={styles.sidebarIcon} />
        ) : (
          <FaBars className={styles.sidebarIcon} />
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${sideBar ? styles.active : ""}`}>
        <h1 onClick={() => scrollToSection("projects")}>Projects</h1>
        <h1 onClick={() => scrollToSection("contact")}>Contact</h1>
        <h1 onClick={() => scrollToSection("education")}>Education</h1>
        <h1 onClick={() => scrollToSection("resume")}>Resume</h1>
        <h1 onClick={() => scrollToSection("connect")} id="connect_btn">
          Let's Connect
        </h1>
      </nav>

      {/* Theme Changer Button */}
    </header>
  );
}

// Prop validation
Header.propTypes = {
  theme: PropTypes.string.isRequired, // theme must be a string and required
  setTheme: PropTypes.func.isRequired, // setTheme must be a function and required
};

export default Header;