import React from 'react';
import Background from '../../Assets/background.png';

const styles = {
  homeHeader: {
    backgroundImage: "url("+{Background}+")",
    backgroundSize: 'cover',
    justifyContent: 'center',
    color: '#3F2D30',
    fontFamily: '"Now", "sans-serif"',
  },
  navItem: {
    marginLeft: '15px',
    padding: '10px',
  }
}

export default function Home() {
  return (
    <div>
      <h1 style ={styles.homeHeader}>Cherry Aisha Web Developer's Portfolio</h1>
      <p>

      </p>
    </div>
  );
}
