import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (!projects.length) return <p>No projects found</p>;

  return (
    <div className="projects-container">
      {projects.map((proj, idx) => (
        <div key={idx} className="project-card">
          <h3>{proj.name}</h3>
          <p><strong>Author:</strong> {proj.author}</p>
          <p><strong>Languages:</strong> {proj.languages.join(", ")}</p>
          <p>{proj.description}</p>
        </div>
      ))}
    </div>
  );
}
