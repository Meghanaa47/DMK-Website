import React from "react";
import "../Styles/Home.css";
import Profile from "../assets/Profile.png";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Content: 60% width on Desktop */}
        <div className="home-left">
          <h4 className="greeting">Hello, I'm</h4>
          <h1 className="name-title">Devi Kontham</h1>
          <h2 className="role-typing">
            Aspiring <span>Software Engineer</span>
          </h2>
          
          <p className="about-description">
            Skilled in <b>Java, Spring Boot</b>, and modern web technologies. 
            I specialize in building <b>scalable full-stack applications</b> and 
            solving complex problems with <b>efficient algorithms (DSA)</b>.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/devikontham47" target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Meghanaa47" target="_blank" rel="noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:meghanakontham28@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://leetcode.com/u/meghana327/" target="_blank" rel="noreferrer" title="LeetCode">
              <i className="fas fa-code"></i>
            </a>
          </div>

          <div className="cta-area">
            <a href="https://drive.google.com/file/d/14xGPeP_krG9WfGZEVWEQuEK9H4VxbeSr/view?usp=sharing" 
               target="_blank" 
               rel="noreferrer" 
               className="btn-resume">
              View My Resume
            </a>
          </div>
        </div>

        {/* Right Content: 40% width on Desktop */}
        <div className="home-right">
          <div className="image-frame">
             <img src={Profile} alt="Devi Kontham" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;