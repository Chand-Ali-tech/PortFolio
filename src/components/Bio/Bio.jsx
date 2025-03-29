import { useState, useEffect, useRef } from "react";
import styles from "./Bio.module.css";

function Bio() {
  const titles = [
    "MERN STACK Developer.",
    "NODE JS Developer.",
    "REACT JS Developer.",
    "FULL STACK Developer.",
    "SOFTWARE ENGINEER.",
  ];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 30;
  const pauseTime = 2500;
  const [isVisible, setIsVisible] = useState(false);
  const bioRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && displayText.length < currentTitle.length) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, typingSpeed);
    } else if (displayText.length === 0 && isDeleting) {
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setCurrentTitle(titles[(titleIndex + 1) % titles.length]);
    } else if (displayText.length === currentTitle.length && !isDeleting) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentTitle, titleIndex]);

  return (
    <div
      className={`${styles.bioContainer} ${isVisible ? styles.flyIn : ""}`}
      ref={bioRef}
    >
      <div className={styles.textSection}>
        <h1>
          Hi👋, I'm <span>CHAND ALI</span>,
        </h1>
        <p>
          <span>{displayText}</span>
        </p>
      </div>

      <div className={styles.imageSection}>
        <img src="Me-4.jpg" alt="Chand Ali" />
      </div>
    </div>
  );
}

export default Bio;
