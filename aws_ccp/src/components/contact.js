// Import React //
import React from 'react';
// Social Link Icons from React-Icons //
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const contact = () => {
    return (
        <footer>
            <div className= "container py-5 footer-container">
                <div className="row">
                    <div className="twelve columns">
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/hannah-mcdonald-302292215/">
                                <FaLinkedin className="icons-footer"/>
                            </a>
                            <a href= "mailto: hannahcodes@protonmail.com">
                                <FaEnvelope className="icons-footer"/>
                            </a>
                            <a href= "https://github.com/hannahnmcdonald">
                                <FaGithub className="icons-footer"/>
                            </a>
                        </div>
                            <p> Created by Hannah McDonald ♥️</p>
                        </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
            </div>
        </footer>
    )
}

export default contact