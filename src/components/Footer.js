import React from 'react';
import './styles/Nav.css';

function Footer({ currentPage, handlePageChange }) {
    let portfolioData = this.props.portfolioData;
return (
    <footer>
        <div className="row">
            <div className="twelve columns">
                <ul className="social-links"></ul>
                <ul className="social-links">
                {
                portfolioData.socialLinks && portfolioData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className}/>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>
    );
}
