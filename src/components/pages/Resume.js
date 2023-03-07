import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
    function PDFDownloadLink() {
  return (
    <a href="/Assets/resume.pdf" download="resume.pdf">
    Download Cherry Aisha's Resume
  </a>
  );
}
return (
    <div className='resume'>
      <h1>Resume</h1>
      <h2>My Skills</h2>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>API's</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>SQL</li>
      <li>Mongoose</li>
      <li>React</li>
      <li>Graph.ql</li>
      <li>Mern Stack</li>
      <li>Wordpress</li>
      <li>UX UI Design</li>
      <PDFDownloadLink />
    </div>
);
}