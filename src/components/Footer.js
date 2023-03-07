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
            <img className="icon" src="https://www.indigomoonfilmfest.com/wp-content/uploads/instagram.jpg" alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/cherry-dakin-a4b171234/" target="_blank">
            <img className="icon" src="https://w7.pngwing.com/pngs/762/963/png-transparent-linkedin-logo-media-network-social-square-share-social-media-networks-color-shapes-icon.png" alt="Instagram"/>
            </a>
            <a href="mailto:cherry@test.com">
            <img className="icon" src="https://icons-for-free.com/iconfiles/png/512/high+quality+mail+media+social+social+media+square+icon-1320192616401317183.png" alt="Email"/>
            </a>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>
    );
}
export default Footer;