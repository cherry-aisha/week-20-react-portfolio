import React from 'react';
import './styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Password Generator',
      image: 'https://raw.githubusercontent.com/cherry-aisha/week-3-password-generator/34ac8849d5a5cb0fd93dc72ffa6ea8a8174cc4ce/Assets/Demo.gif',
      description: 'Unique Password Generator',
      tags: ['Javascript'],
      url: 'https://cherry-aisha.github.io/week-3-password-generator/',
    },
    {
      id: 2,
      title: 'Coding Quiz',
      image: 'https://github.com/cherry-aisha/week-4-code-quiz/raw/main/assets/codequiz.gif',
      description: '',
      tags: ['Javascript'],
      url: 'https://cherry-aisha.github.io/week-4-code-quiz/',
    },
    {
      id: 3,
      title: 'Work Day Scheduler',
      image: 'https://github.com/cherry-aisha/week-5-work-day-scheduler/raw/main/Assets/demo.gif?raw=true',
      description: '',
      tags: ['Javascript'],
      url: 'https://cherry-aisha.github.io/week-5-work-day-scheduler/',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: 'https://github.com/cherry-aisha/week-6-weather-dashboard/raw/main/assets/demo/demo.gif?raw=true',
      description: '',
      tags: ['Javascript'],
      url: 'https://cherry-aisha.github.io/week-6-weather-dashboard/',
    },
    {
      id: 5,
      title: 'Project 5',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['React', 'Material UI', 'HTML'],
      url: '#',
    },
    {
      id: 6,
      title: 'Project 6',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['React', 'Material UI', 'HTML'],
      url: '#',
    },
  ];

  return (
    <main className="container">
      {projects.map((project) => (
        <div className="card" key={project.id}>

          <img src={project.image} alt={project.title} className=""/>
          
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </main>
  );
};

export default Portfolio;