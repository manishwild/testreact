import React from 'react'
import '../css/Project.css'
import ProjectCard from './ProjectCard'


function Project() {
  const projects = [
    { id: 1, image: '/image/project-01.png', title: 'Dashboard' },
    { id: 2, image: '/image/project-02.png', title: 'Landing Page' },
    { id: 3, image: '/image/project-03.png', title: 'Mobile App' },
    { id: 4, image: '/image/project-04.png', title: 'All Projects' },
  ]

  return (
    <div className="our-projects">
      <h2>Our Projects</h2>
      <p>
        We have been providing great flooring for service problem solutions and
        finished the task.
      </p>
      <div className="project-filters">
        <button>All Projects</button>
        <button>Mobile App</button>
        <button>Landing Page</button>
        <button className="active">Dashboard</button>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
