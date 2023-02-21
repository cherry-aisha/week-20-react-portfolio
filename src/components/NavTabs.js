import React from 'react';
import './styles/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='navBar'>
      <li className='navItem'>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className='navItem'>
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className='navItem'>
        <a
          href="#myblog"
          onClick={() => handlePageChange('MyBlog')}

          className={currentPage === 'MyBlog' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className='navItem'>
        <a
          href="#contactme"

          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className='navItem'>
        <a
          href="#contactme"
          onClick={() => handlePageChange('ContactMe')
        }
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
