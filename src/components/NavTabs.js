import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#myblog"
          onClick={() => handlePageChange('MyBlog')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'MyBlog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contactme"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          ContactMe
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
