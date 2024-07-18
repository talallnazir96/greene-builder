import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import icon from '../assets/images/arrow-right-circle.png';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Banner({ id }) {
    let spanStyle = {color: 'rgba(28, 42, 61, 1)', fontWeight: '600'};
    return (
        <>
            <div className="container-fluid p-0" id={ id }>
                <div className="banner">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="banner-heading">Where Dreams Take <br/>Shape, One Home at a Time</h1>
                            <div className="banner-text">Building Your Future - Renovating, Inspecting, and Customizing Your Dream Home with Greene Builders Inc</div>
                            <div className="banner-button">
                                        <Link
                                            className="btn btn-default"
                                            to="services-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Our Service <img src={icon} alt="" width="20px" /></Link>
                                        <Link
                                            className="btn btn-primary"
                                            to="contact-section"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} // Adjust offset as needed
                                            duration={500}
                                        >Get Quote</Link>
                                {/* <a href="/" className="btn btn-default">Our Services <img src={icon} alt="" width="20px" /></a>
                                <a href="/" className="btn btn-primary">Get Qoute</a> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="excellence-section">
                                <h4>Excellence in Renovation & Construction</h4>
                                <p>At Greene Builders Inc., we're evolving to meet the diverse needs of our 
                                    Florida communities. With over 40 years of excellence in constructing over 2,000 
                                    homes, we are proud to introduce our expanded services. Now, alongside building
                                    your perfect home, we offer comprehensive renovation and building inspection
                                    services to bring new life to existing spaces and ensure peace of mind in 
                                    your investments.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.collapse:not(.show)').css('display', function(index, value) {
            return value === 'none' ? 'block' : 'none'; // Toggles between 'block' and 'none'
        });
    });
});
