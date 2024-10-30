import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/portfolio')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
