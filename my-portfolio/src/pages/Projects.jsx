// src/pages/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Social Media Platform — Dalhousie University",
      points: [
        "Designed and developed a full-stack platform for student interaction.",
        "Implemented user authentication, role-based access control, and dynamic course management using Spring Boot.",
        "Built a responsive front-end in ReactJS integrated via REST APIs.",
        "Used MySQL database with schema design based on normalization and indexing."
      ],
    },
    {
      title: "SmartLibrary Manager — Java & SQL",
      points: [
        "Developed a console-based application to manage library operations.",
        "Added features for book management, issue/return logs, and user tracking.",
        "Implemented full CRUD operations with SQL joins and stored procedures.",
        "Ensured data integrity using validations and optimized queries."
      ],
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}
