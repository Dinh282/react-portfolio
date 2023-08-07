import React from 'react';

const Project = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={imageUrl} alt={`Screenshot of ${title}`} />
      <p>{description}</p>
      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;