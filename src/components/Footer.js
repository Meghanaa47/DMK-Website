import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Meghana Kontham. All rights reserved.</p>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/devikontham47" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Meghanaa47" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="mailto:meghanakontham28@gmail.com"><i className="fas fa-envelope"></i></a>
        <a href="https://leetcode.com/u/meghana327/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
