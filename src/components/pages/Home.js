import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="background">
      <div>
      
      </div>
      <div className="avatar-container">
      <img className="avatar" src="../Assets/avatar.png" alt="Profile Avatar"></img>
      </div>
      <div className="about-me-container">
      <h1 className="about-me home-header">About Me</h1>
      <p>
       I'm Cherry, a web developer with 3 years+ experience, serving UK-based clients in web design,
       web maintanence and graphic design. Additonal skills include copywriting, video editng and digital marketing.
       I have completed the coding bootcamp with University of Birmingham!
      </p>
    </div>
    </div>
  );
}
