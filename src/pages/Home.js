import React, {useEffect} from "react";
import Banner from "../components/Banner";
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

const Home = () => {

    const { hash } = useLocation();
    useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      console.log('Element ID to scroll to:', elementId); // Log element ID
      const element = document.getElementById(elementId);
      if (element) {
        console.log('Element found:', element); // Log if element is found
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Element not found');
      }
    }
    }, [hash]);
    return (
        <>
            <Navbar/>
            <Banner id="banner-section" />
            <Experience id="about-section" />
            <Services id="services-section" />
            <Projects id="projects-section" />
            <Contact id="contact-section" />
            <Blog id="blog-section" />
            <Footer />
        </>
    );
};

export default Home;