import React from 'react';
import './styles/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className='navBar'>
      <li className='nav-item'>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link:active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li  className='nav-item'>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link:active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li  className='nav-item'>
        <a
          href="#contactme"

          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link:active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li  className='nav-item'>
        <a
          href="#contactme"
          onClick={() => handlePageChange('ContactMe')
        }
          className={currentPage === 'ContactMe' ? 'nav-link:active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
