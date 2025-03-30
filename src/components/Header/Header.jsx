import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Header({ theme, setTheme }) {
  const [sideBar, setSideBar] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < prevScrollY || currentScrollY < 10); // Show on scroll up
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

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
      setSideBar(false); // Close sidebar after clicking a link
    }
  };

  return (
    <header className={`${styles.header} ${!visible ? styles.hidden : ""}`}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src="/1.jpg" alt="Logo" />
      </div>

      {/* Sidebar Toggle Icon (☰) */}
      <div className={styles.sidebarIcon} onClick={handleSidebar}>
        <FaBars />
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${sideBar ? styles.active : ""}`}>
        {/* Close Icon (❌) should be inside the menu */}
        <div className={styles.closeIcon} onClick={handleSidebar}>
          <ImCross />
        </div>

        <h1 onClick={() => scrollToSection("projects")}>Projects</h1>
        <h1 onClick={() => scrollToSection("contact")}>Contact</h1>
        <h1 onClick={() => scrollToSection("education")}>Education</h1>
        <h1 onClick={() => scrollToSection("resume")}>Resume</h1>
        <h2
          onClick={() => scrollToSection("connect")}
          className={styles.connect_btn}
        >
          Let's Connect
        </h2>

        {/* Theme Changer */}
        <div className={styles.themeChanger}>
          {theme === "night" ? (
            <button
              onClick={handleLightClick}
              className={`${styles.sunIcon} ${styles.btn}`}
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
          ) : (
            <button
              onClick={handleDarkClick}
              className={`${styles.moonIcon} ${styles.btn}`}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

// Prop validation
Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
