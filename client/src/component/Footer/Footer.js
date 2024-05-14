import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
      <h1 className="Votereum">Votereum</h1>
        <p>
        
          <a
            className="profile"
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fund-Raising
          </a>
          
        </p>
        <p>
          
          <a
            className="profile"
            href="http://localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-Voting
          </a>
          
        </p>
      </div>
    </div>
  </>
);

export default Footer;
