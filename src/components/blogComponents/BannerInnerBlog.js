import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import backgroundimage from "../../assets/images/inner-blog.png";
import {Link, useParams, useNavigate} from "react-router-dom";
import {getPostbyID, getPostsList} from "../../services/api";

export default function BannerInnerBlog() {
    const {id} = useParams();
    console.log(id)
    const [data, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogData, setBlogsData] = useState([]);
    const navigate = useNavigate();

    const handleDivClick = (id) => {
        navigate(`/innerblog/${id}`); // Navigate to the desired route
    };

    useEffect(() => {
        console.log('aaaa')
        getPostbyID(id)
          .then(response => {
            setPost(response.data);
            
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []);
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            getPostbyID(id)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchPosts();
      }, [id]);
      useEffect(() => {
        getPostsList(3, 0)
        .then(response => {
            setBlogsData(response.data);
        })
      }, []);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error fetching posts</p>;
    let bannerStyle = {height: '40vh', backgroundImage: 'unset'};
    let blogsList = {
        marginTop: 0
    }
    return (
        <>
        
              <div className="container-fluid p-0" id="banner-section">
                <div className="banner-blog inner" style={bannerStyle}>
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="banner-heading">{data.title}</h1>
                        </div>
                    </div>      
                </div>
            </div>
            <div className="container-fluid p-6 d-flex justify-content-center">
                <div className="description-section">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={data.featured_image} />
                            <div dangerouslySetInnerHTML={{ __html: data.description }} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            
            
            <div className="container-fluid  latest-blog">
            <div className="row all-blogs">
                    <h2 className="fw-bold" style={blogsList}>Recent blogs</h2>
                    {blogData.map(post => (
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="image-wrap" onClick={() => handleDivClick(post.id)} style={{cursor: 'pointer'}}>
                                    <img className="card-img-top" src={post.featured_image} />
                                </div> 
                                <div className="card-body">
                                    <p className="blog-date">{post.date}</p>
                                    <p className="card-text fw-bold">{post.title}</p>
                                    <p className="card-desc">{post.excerpt}</p>
                                    <Link to={"/innerblog/"+post.id}>Read article</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                   
                    
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
