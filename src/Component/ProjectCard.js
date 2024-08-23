import React from 'react'
import '../css/ProjectCard.css'

function ProjectCard({ image, title }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

export default ProjectCard
