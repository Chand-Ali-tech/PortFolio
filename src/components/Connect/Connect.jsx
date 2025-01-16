import { useState } from "react";
import styles from "./Connect.module.css";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <section id="connect">
      <h1>Get in touch!</h1>
      <div className={styles.connectContainer}>
        <div className={styles.formContainer}>
          <h2>Send us a message 🚀</h2>
          {/* Formspree integration */}
          <form 
            action="https://formspree.io/f/xdkkyjaq" 
            method="POST"
          >
            <div className={styles.formGroup}>
             
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className={styles.formGroup}>
             
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className={styles.formGroup}>
             
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
              />
            </div>
            <div className={styles.formGroup}>
              
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connect;