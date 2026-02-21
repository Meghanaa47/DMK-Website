import React from "react";
import "../Styles/Projects.css";

const projects = [
  {
    title: "Career Guidance Portal",
    description: "Full-stack portal with quizzes and roadmaps for student career paths.",
    technologies: ["Java", "Servlets", "SQL"],
    github: "https://github.com/Meghanaa47/Major_Projects",
    live: "",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500", 
    type: "Fullstack",
  },
  {
    title: "GitHub Profile Finder",
    description: "Real-time GitHub user search app using REST API with dark mode.",
    technologies: ["JS", "API", "CSS3"],
    github: "https://github.com/Meghanaa47/GitProfile-Finder",
    live: "https://Meghanaa47.github.io/GitProfile-Finder/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhVlq3yUwgvtOIN5gJaZwvSUldT5rdehndw&s",
    type: "Web App",
  },
  {
    title: "Personal Portfolio",
    description: "Modern responsive portfolio built with React to showcase my work.",
    technologies: ["React", "JS", "CSS3"],
    github: "https://github.com/Meghanaa47/DMK-Portfolio",
    live: "https://Meghanaa47.github.io/DMK-Portfolio/",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500",
    type: "Frontend",
  },
  {
    title: "Expense Tracker",
    description: "Personal finance tool to track daily spending and categories.",
    technologies: ["React", "Web"],
    github: "https://github.com/Meghanaa47/ExpenseTracker",
    live: "https://Meghanaa47.github.io/ExpenseTracker/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhkskpv7taK98fx9qoFZN_VweOmcLO-L7mg&s",
    type: "Frontend",
  },
  {
    title: "Simple Calculator",
    description: "A clean, functional arithmetic calculator with a sleek UI.",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Meghanaa47/Calculator",
    live: "https://Meghanaa47.github.io/Calculator",
    image: "https://wallpapers.com/images/hd/basic-black-and-white-calculator-ap38v4tgv731d8qn.jpg",
    type: "Utility",
  },
  {
    title: "Valentine's Wish",
    description: "Interactive romantic landing page with custom animations.",
    technologies: ["JS", "CSS3", "HTML"],
    github: "https://github.com/Meghanaa47/ValentineWish",
    live: "https://meghanaa47.github.io/ValentineWish/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZ0wWCiUhvIAJxVxh82AZJiLPyHs99CaE5A&s",
    type: "Interactive",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-tag">{project.type}</div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-pills">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="pill">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-hover-overlay">
              <div className="link-group">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-btn live">Demo</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-btn code">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;