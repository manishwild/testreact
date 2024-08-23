import React from 'react'
import '../css/Body.css'

function Body() {
const steps = [
  {
    number: '1',
    title: 'Complete Briefing',
    description:
      'You must write brief to build a job so that worker who see your job believe in your abilities.',
    link: 'Learn More',
    color: '#3A6EF6',
  },
  {
    number: '2',
    title: 'Predetermined Deadline',
    description:
      'The deadline has been determined in advance so that the time to work on the project can be maximized.',
    link: 'Learn More',
    color: '#F6A33A',
  },
  {
    number: '3',
    title: 'Using Design System',
    description:
      'Using a design system so that the projects being worked on can be of the same layout and design.',
    link: 'Learn More',
    color: '#3AF6B6',
  },
]


return (
  <div className="how-it-works">
    <h2>How It Works</h2>
    <p>
      Hire proven pros with confidence using the world’s largest and remote
      talent platform.
    </p>
    <div className="steps">
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div className="step-number" style={{ backgroundColor: step.color }}>
            {step.number}
          </div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <a href="#">{step.link}</a>
        </div>
      ))}
    </div>
  </div>
)
}

export default Body
