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
            <a href="https://www.linkedin.com/in/cherry-dakin-a4b171234/" target="_blank">
            <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAe7X///8AcbDi6/MAd7N9rM4Ac7G70eStyN/I2ukAebQAdbI5j79Unsjo8vjM4u7Y6fIfiLy00uWew9sHfrZvqs52qc3T5O+ly+FvpMpopcuMudcUg7qny+Hg7/ZDlMKAtNTw9/u92eljoMiTuNWBttWUwNukw9s5k8K61+jZwmoZAAAEoUlEQVR4nO2dbVvbIBSGgTJUSGjStNtsrX1x69b//weXtNMaDVR30YOePfcXP5RcF7e8JhxAyEeqpqynggV12VRPXuLv30mhnM6ds2Rop4pJz9CXxubOVWKsKf3JcCz4FN8JLcaPhmPFrQCPWDU+GnrBU7BVFP5gWHKsokd02RlOTO58XBA1aQ0LrnW0wxZSVCp3Li6KqkTjcmfiorhGMO5nOnQp6tx5uDC1YDLZBgAAAAAAAAAAAAAAAADAf43VRrUYx3SJ1Ro9b8YjX00WhWK4BmnN3fIprkrez/gFHLmd7FGteMU72GO0UY81p3gAa6tXgqwUrXtdgh1zNhEBZjEoKDd3XLqb6bCgZBNdZb6HDCWPQrR2EzRsWBSifggKSs+iO3051verae7cpUBtI4Ylh4aoRhHDrxyGxKjhFw6G5lvEkMW0xiwjhizijd06Yqg5GNoiLLhlMeILNfTqxKgZtpOaeUiQx5RGRAqRSRG2hRhoiXserbDDDdbTikM/+oiZDQhOORkKU25eVlFuG+DctPem7+d82uATRuzuj3qb7Vxx6UX7OHW3ur19KDRTvwNaa2uZNUAAwEfgsLQdoN+pukjKF6vG1radlnPmiOs6MEKlPub6JszDc0X3I5JycVK01hlRr+Y/d8ur9perSbOYlYU1uc7pePu3NnMVSXn9OAlqTcrd2L9K4G8WqzzxAWkNtSqWm2Aiv5tmCBBIaWhNMbzYemJfk894Uxrq5oxfR0N98EpCQ32uAI/4grY5JjO0JvzR7gUz0pqazNBMIj+/YEGpmMpQlW8XlPInoWIywzfX0QMlXVtMZbh6l6CUNdnAmMjw1zta4YExWZBnKsPNOw3lmqqeJjKMRQMMs6F63Uhk+A/siPrTfIYbovXXfIZyTTNBzWhY0VTTjIZyRVKIOQ1p+pqchhXJkJjTkGbqltVwRtEQsxpOKKppVkOS8SKrIUlYWV7D3wQNMa8hxStUckO/XTZNs9zfvyXxkqAhpjWs1nW3R7NbdVJ3X89/P90ShM6lNPRz87zrcKo8V5AUwYEJDV8flK71uc83n6qWDh6UrmJB1pJkR0cyQz8YCGfPfEcliCRPZjgb7vhjUdaSZM9KKsP7UIsy0c9wBHtWUhkuQmO3ji5oEAz5qQzDr3rTzb/8Yz6c4SY8sKnYrpzdpzEchwe2yCZVKb9/GsPInmEX2El97rkPZngdMfwSeY5gQ8DlDXXMkGDqndlwzN7wG/taSnDhSGbDEQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMKwj7kZBfG3z7druV/hlKMf4V129taHn7sh2CYbO0e4vx8tdo5wbBuhjTzH8Px+AAAAAAAAAAAAAAAAAAAAAAAA4ESdOwMXphYl46vfRXcqsWiy3LlLhmsEwVGLOVGVoDjlPB+2kILiZN58mH1rKBn3Nd3p562hF1zrqRX+YDh8DQMDrOouPekMB67S4IAWh1tdDobSl+yK0ZrSy5OhlJNCOT4FqZ0q9n/NxFP0bdWUXOaoddmcbjr5A5XhWJeQSJXvAAAAAElFTkSuQmCC" alt="Instagram"/>
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