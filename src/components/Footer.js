import React from 'react';
import './styles/Footer.css';

function Footer({ currentPage, handlePageChange }) {
return (
    <footer className="footerBar">
        <div className="row">
            <div className="twelve columns">
                <p className="footerContent">Find Me on Social Media!</p>
        </div>
        <div className="social-icons">
            <a href="https://github.com/cherry-aisha" target="_blank">
            <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1024px-Github-desktop-logo-symbol.svg.png" alt="GitHub"/>
            </a>
            <a href="https://www.instagram.com/cherry.aisha/" target="_blank">
            <img className="icon" src="https://www.pngfind.com/pngs/m/349-3493616_instagram-circle-logo-transparent-hd-png-download.png" alt="Instagram"/>
            </a>
            <a href="mailto:cherry@test.com">
            <img className="icon" src="https://e7.pngegg.com/pngimages/412/858/png-clipart-computer-icons-email-gmail-email-miscellaneous-purple-thumbnail.png" alt="Email"/>
            </a>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>
    );
}
export default Footer;