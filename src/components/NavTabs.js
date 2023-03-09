import React from 'react';
import './styles/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='nav'>
    <ul className='navUl'>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link:active' : 'nav-link'}
        >Home</a>
      </li>
      <li  className='nav-item'>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link:active' : 'nav-link'}
        >Portfolio</a>
      </li>
      <li  className='nav-item'>
        <a
          href="#contactme"

          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link:active' : 'nav-link'}
        >Contact Me</a>
      </li>
      <li  className='nav-item'>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')
        }
          className={currentPage === 'Resume' ? 'nav-link:active' : 'nav-link'}
        >Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
