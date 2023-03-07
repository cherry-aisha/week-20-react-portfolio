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
      <PDFDownloadLink />
    </div>
);
}