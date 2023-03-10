import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
return (
    <div className="background-r">
      <h1 className="h">Resume</h1>
      <h2 className="h">My Skills</h2>
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
function PDFDownloadLink() {
  return (
    <div>
    <a href="/Assets/resume.pdf" download="resume.pdf">
    Download Cherry Aisha's Resume
  </a>
  </div>
  );
}
}