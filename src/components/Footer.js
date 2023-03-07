import React from 'react';
import './styles/Footer.css';

function Footer({ currentPage, handlePageChange }) {
return (
    <footer className="footerBar">
        <div className="row">
            <div className="twelve columns">
                <p className="footerContent">Find Me on Social Media!</p>
        </div>
        <div class="social-icons">
            <a href="https://github.com/cherry-aisha" target="_blank">
            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="GitHub"/>
            </a>
            <a href="https://www.instagram.com/cherry.aisha/" target="_blank">
            <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new.png" alt="Instagram"/>
            </a>
            <a href="mailto:cherry@test.com">
            <img src="https://img.icons8.com/material-outlined/24/000000/email.png" alt="Email"/>
            </a>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>
    );
}
export default Footer;