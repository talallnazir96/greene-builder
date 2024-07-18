import React from 'react';
import NavbarBlog from '../components/blogComponents/NavbarBlog';
import Footer from '../components/Footer';
import BannerBlog from '../components/blogComponents/BannerBlog';
import LatestBlog from '../components/blogComponents/LatestBlog';
const BlogPage = () => {
  return (
    <>
        <NavbarBlog />
            <BannerBlog/>
            <LatestBlog/>
        <Footer/>
    </>
  );
};

export default BlogPage;