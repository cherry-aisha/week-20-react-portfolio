import React from 'react';
import './styles/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='nav'>
      <div className="logo">
      <a href="#home" target="_blank">
            <img className="avatar" src="https://raw.githubusercontent.com/cherry-aisha/week-20-react-portfolio/a0c56ce21c0d239a4079c6a9b5a7be8ca140e08a/public/Assets/avatar.png" alt="GitHub"/>
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
