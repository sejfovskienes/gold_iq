import React from "react";

const About = () => {
    const aboutContainerStyle = {
        marginTop: "3rem",
        padding: "2rem",
        maxWidth: "800px",
        backgroundColor: "#fdfdfd",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        color: "#000",
        fontFamily: "sans-serif",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom:"70px",
      };
      
      const headingStyle = {
        fontSize: "2rem",
        fontWeight: "600",
        marginBottom: "1rem",
      };
      
      const paragraphStyle = {
        fontSize: "1rem",
        lineHeight: "1.75rem",
        marginBottom: "1.25rem",
      };
      
      const socialContainerStyle = {
        display: "flex",
        gap: "1.5rem",
        marginTop: "1rem",
      };
      
      const linkStyle = {
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
        fontSize: "1rem",
      };

    return (
    <div style={aboutContainerStyle}>
      <h2 style={headingStyle}>👨‍💻 About the Project</h2>
      <p style={paragraphStyle}>
        This application is part of my bachelor’s thesis and serves as a modern platform for analyzing gold prices using a fusion of numerical, textual, and visual data. The core idea is to empower users with advanced machine learning models that provide real-time insights into gold market trends.
      </p>
      <p style={paragraphStyle}>
        Throughout the development of this project, I’ve had the privilege of being mentored by <strong>Prof. Kostadin Mishev</strong>. His guidance and expertise in AI, data science, and software architecture have been instrumental in shaping the design and direction of this application.
      </p>
      <p style={paragraphStyle}>
        The project combines cutting-edge technology with practical use cases, providing a foundation for future research, fintech tools, and market analysis solutions.
      </p>

      <h3 style={{ ...headingStyle, fontSize: "1.5rem", marginTop: "2rem" }}>🌐 Connect With Me</h3>
      <div style={socialContainerStyle}>
        <a style={linkStyle} href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a style={linkStyle} href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a style={linkStyle} href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
      <br></br>
      <br></br>
    </div>
    
  );
}

export default About;