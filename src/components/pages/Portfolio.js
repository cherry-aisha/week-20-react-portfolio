import React from 'react';
import GenCards from '../Cards';

export default function Portfolio() {
  return (
    <div className="portfolio-h-bg">
      <div>
      <h1 className="portfolio-h">Portfolio Page</h1>
      </div>
      <div className="cards">
      <GenCards />
      </div>
    </div>
  );
}