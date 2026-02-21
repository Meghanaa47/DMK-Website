import React from "react";
import "../Styles/Skills.css";

const skillGroups = [
  {
    category: "Frontend Development",
    icon: "fas fa-desktop",
    skills: ["HTML5", "CSS3", "JavaScript", "Figma (UI Design)"]
  },
  {
    category: "Backend Development",
    icon: "fas fa-server",
    skills: ["Java (Core)", "JDBC", "Servlets & JSP", "Spring Boot"]
  },
  {
    category: "Databases",
    icon: "fas fa-database",
    skills: ["MySQL", "Oracle SQL"]
  },
  {
    category: "Tools & Deployment",
    icon: "fas fa-toolbox",
    skills: ["Git & GitHub", "Vercel", "Eclipse IDE"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <div className="skill-card-unified" key={idx}>
            <div className="card-header">
              <i className={group.icon}></i>
              <h3>{group.category}</h3>
            </div>
            <div className="skill-body">
              {group.skills.map((skill, i) => (
                <div className="skill-row" key={i}>
                  <i className="fas fa-check"></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;