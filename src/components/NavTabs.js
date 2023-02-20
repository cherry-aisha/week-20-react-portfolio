import React from 'react';

const styles = {
  navBar: {
    background: "#BF9C54",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    listStyleType: 'none',
  },
  navItem: {
    marginLeft: '15px',
    padding: '10px',
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navBar}>
      <li style={styles.navItem}>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#myblog"
          onClick={() => handlePageChange('MyBlog')}

          className={currentPage === 'MyBlog' ? 'nav-link active' : 'nav-link'}
        >
          My Blog
        </a>
      </li>
      <li style={styles.navItem}>
        <a
          href="#contactme"

          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
