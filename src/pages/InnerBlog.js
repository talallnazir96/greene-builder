import React from "react";
import NavbarBlog from '../components/blogComponents/NavbarBlog';
import BannerInnerBlog from "../components/blogComponents/BannerInnerBlog";
import Footer from "../components/Footer";
const InnerBlog = () => {
    return (
        <>
            <NavbarBlog />
            <BannerInnerBlog/>
            <Footer />
        </>
    );
}
export default InnerBlog;