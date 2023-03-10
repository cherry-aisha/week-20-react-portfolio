import React from 'react';
import './styles/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='nav'>
      <div className="logo">
      <a href="#home" target="_blank">
            <img className="logo" src="https://github.com/cherry-aisha/week-20-react-portfolio/blob/main/public/Assets/logo.png?raw=true" alt="GitHub"/>
            </a>
      </div>
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
