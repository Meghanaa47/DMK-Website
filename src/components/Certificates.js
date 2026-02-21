import React from "react";
import "../Styles/Certificates.css";

// Import your assets
import JavaCert from "../assets/JavaCert.jpeg";
import PythonCert from "../assets/python_certificate.jpg";
import CCert from "../assets/C_programming.jpg";

const certificates = [
  {
    title: "Responsive Web Design",
    institute: "freeCodeCamp",
    skills: "HTML5, CSS3, Flexbox, Grid, Responsive layouts",
    link: "https://www.freecodecamp.org/certification/meghana_kontham/responsive-web-design",
    type: "certificate"
  },
  {
    title: "C Programming",
    institute: "Great Learning",
    skills: "Basics of C, Pointers, Functions, Arrays, Problem-solving",
    link: CCert,
    type: "certificate"
  },
  {
    title: "Java Programming",
    institute: "Nptel",
    skills: "Java basics, OOP concepts, Collections, Exception handling",
    link: JavaCert,
    type: "certificate"
  },
  {
    title: "Python Programming",
    institute: "Skill Rack",
    skills: "Python basics, Data Structures, OOP, Libraries: Pandas, NumPy",
    link: PythonCert, 
    type: "certificate"
  },
  {
    title: "Code Frenzy & Eye Bugs",
    institute: "Internal Hackathon",
    skills: "Teamwork, Problem Solving, Competitive coding",
    type: "achievement"
  },
  {
    title: "Problem Solving",
    institute: "LeetCode & GeeksforGeeks",
    skills: "Solved 450+ problems covering Arrays, Strings, DSA topics",
    type: "achievement"
  },
  {
    title: "SIH Participation",
    institute: "Smart India Hackathon",
    skills: "Selected for internal presentation, idea implementation, teamwork",
    type: "achievement"
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="section-title">Certifications & Achievements</h2>
      
      <div className="certifications-container">
        {certificates.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              {cert.institute && (
                <p>
                  <strong>Institute:</strong> {cert.institute}
                </p>
              )}
              <p className="cert-skills">{cert.skills}</p>
            </div>

            <div className="cert-footer">
              {cert.type === "certificate" ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert"
                >
                  View Certificate
                </a>
              ) : (
                <span className="btn-achievement">
                  <i className="fas fa-trophy" style={{marginRight: '8px'}}></i>
                  Achievement
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;