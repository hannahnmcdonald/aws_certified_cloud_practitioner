// Import React //
import React from 'react'
// // React Font Awesome Import //
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // Hamburger menu svg icon //
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// Import React-scroll //
import { Link } from 'react-scroll';
// // Import Scroll to Top npm //
// import ScrollToTop from "react-scroll-to-top";
// // React-Icons //
// import { BsArrowUpCircle } from 'react-icons/bs';

// NAVBAR //
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            {/* Navbar Hamburger Menu for mobile responsivity */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 {/* IMPORT Font Awesome Bars SVG Icon */}
                 {/* < FontAwesomeIcon icon = {faBars} style = {{ color: '#ffffff'}}/> */}
            </button>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        {/* Scroll to top option */}
                        {/* <ScrollToTop smooth component={<BsArrowUpCircle/>} /> */}
                        <li className="nav-item">
                            <Link smooth={true} to="cloudConcepts" className="nav-link">Cloud Concepts</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="securityAndCompliance" className="nav-link" >Security & Compliance</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="technology" className="nav-link">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="billingAndPricing" className="nav-link" >Billing & Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Export Navbar //
export default navbar 
