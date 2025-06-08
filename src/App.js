import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import profilePic from './assets/profile.jpg';
import project1 from './assets/creditcard.jpg';
import project2 from './assets/onlinebookstore.jpg';
import project3 from './assets/operaatingSystem.jpg';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">Dhanashree</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero" id="about">
        <div className="profile-container" data-aos="zoom-in">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <h1 className="hero-title" data-aos="fade-up">
          Hi, I'm Dhanashree <span className="wave">👋</span>
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Associate Engineer Software Developer | OS Specialist
        </p>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
          A dedicated developer with 2 years of experience in operating system development and customization.
          I specialize in system-level programming, scripting, and performance optimization for enterprise environments.
        </p>
        <a href="#projects" className="cta-button" data-aos="fade-up" data-aos-delay="600">
          View My Work
        </a>
      </header>

      <section id="projects" className="section projects">
        <h2 data-aos="fade-up">Projects</h2>
        <div className="project-grid">
          <div className="card" data-aos="zoom-in">
            <img src={project1} alt="Project 1" />
            <h3>Credit Card Fraud Detection</h3>
            <p>
              Developed a fraud detection system using machine learning algorithms to identify and prevent fraudulent
              transactions. The solution enhances security by accurately flagging potentially fraudulent activities in real-time.
            </p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <img src={project2} alt="Project 2" />
            <h3>Online Book Store</h3>
            <p>
              An Online Book Store is a web-based platform that allows users to browse, search, and purchase books digitally,
              offering a convenient and efficient alternative to traditional bookstores.
            </p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <img src={project3} alt="Project 3" />
            <h3>OS Development in Healthcare</h3>
            <p>
              Designed and customized operating system components to support secure, real-time data processing in healthcare environments.
              Focused on performance optimization, device integration, and compliance with medical data standards.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact" data-aos="fade-up" data-aos-once="true">
        <h2>Contact Me</h2>
        <form
          action="https://formspree.io/f/xwpbvylv"  /* Replace with your Formspree endpoint or any other backend service */
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="_replyto" required placeholder="Your Email" />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Write your message here..."></textarea>

          <button type="submit" className="cta-button">Send</button>
        </form>
      </section>

      <footer className="footer" data-aos="fade-up" data-aos-once="true">
        <p>
          📧 <a href="mailto:dguggarigoudar@gmail.com" target="_blank" rel="noopener noreferrer">Connect Me</a> &nbsp;
          🌐 <a href="https://www.linkedin.com/in/dhanashree-guggarigoudar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
