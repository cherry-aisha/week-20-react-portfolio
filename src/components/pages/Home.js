import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="background">
      <div className="">
      <h1 className="">About Me</h1>
      <p>
       I'm Cherry, a web developer with 3 years+ experience, serving UK-based clients in web design,
       web maintanence and graphic design. Additonal skills include copywriting, video editng and digital marketing.
       I have completed the coding bootcamp with University of Birmingham!
      </p>
    </div>
      <aside className="avatarContainer">
      <a href="#home" target="_blank">
            <img className="avatar" src="https://raw.githubusercontent.com/cherry-aisha/week-20-react-portfolio/89159933559023e2fddf1ccce486055cd18fe7c3/public/Assets/avatar.png" alt="GitHub"/>
            </a>
      </aside>
    </div>
  );
}
