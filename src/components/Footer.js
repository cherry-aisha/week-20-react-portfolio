import React from 'react';
import './styles/Footer.css';

function Footer({ currentPage, handlePageChange }) {
return (
    <footer className="footerBar">
        <div className="row">
            <div className="twelve columns">
                <p>This is a footer</p>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>
    );
}
export default Footer;