import logo from '../assets/images/Logo.png';
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-white ${isScrolled ? 'scrolled' : ''}`}>
                <div className='container-fluid'>
                    <div className="row width-100">
                        <div className="col-md-3">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="col-lg-7 col-md-9 main-menu">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="banner-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="about-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="services-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="projects-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="blog-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 d-none d-lg-block">
                                        <Link
                                            className="btn btn-default"
                                            to="contact-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Contact Us</Link>
                            {/* <button className="btn btn-default">Contact Us</button> */}
                        </div>
                    </div>   
                </div>
            </nav>
        </>
    );
}