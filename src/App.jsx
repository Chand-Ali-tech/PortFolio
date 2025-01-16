import { useState, useEffect} from "react";
import "./App.css";
import Bio from "./components/Bio/Bio";
import Connect from "./components/Connect/Connect";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";

function App() {
  const [theme, setTheme] = useState("night"); // Set initial theme to night

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "night") {
      root.style.setProperty("--background-color", "black");
      root.style.setProperty("--text-color", "grey");
    } else {
      root.style.setProperty("--background-color", "grey");
      root.style.setProperty("--text-color", "black");
    }
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Bio />
      <Education />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Connect />
      <Footer /> 
    </>
  );
}
export default App;