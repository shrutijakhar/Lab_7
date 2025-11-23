import React from "react";
import Skills from "../components/Skills.jsx"; 

export default function About() {
  const education = ["BSc Computer Science — Dalhousie University"];

  const experience = [
    {
      role: "Student IT Analyst — Canada Revenue Agency (CRA)",
      desc: "Analyzed data, automated workflows, and supported internal IT modernization projects."
    },
    {
      role: "Software Engineering Co-op — Agropur Cooperative",
      desc: "Developed backend services, automated QA processes, and built workflow optimization tools."
    }
  ];

  return (
    <div className="about-container">
      
      <section className="about-intro">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science student at Dalhousie University passionate about building  
            <span className="highlight-text"> interactive web applications</span>, exploring  
            <span className="highlight-text"> AI & computer vision</span>, and creating  
            impactful solutions through clean, efficient code.
          </p>
        </div>
      </section>

      <section className="about-cards">

        <AboutCard title="Education">
          <ul>
            {education.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </AboutCard>

        <AboutCard title="Skills">
          <Skills />
        </AboutCard>

        
        <AboutCard title="Career Goals">
          <p>
            I aim to grow as a full-stack developer and contribute to impactful,  
            user-centered software products.
          </p>
        </AboutCard>

        
        <AboutCard title="Experience">
          <ul>
            {experience.map((exp, i) => (
              <li key={i}>
                <strong>{exp.role}</strong>
                <br />
                {exp.desc}
              </li>
            ))}
          </ul>
        </AboutCard>

      </section>
    </div>
  );
}

function AboutCard({ title, children }) {
  return (
    <div className="about-card">
      <h4>{title}</h4>
      {children}
    </div>
  );
}
