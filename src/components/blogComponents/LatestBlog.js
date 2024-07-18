import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import {getPosts, getPostsList} from "../../services/api";
const LatestBlog = () => {
    const [latestPost, setLatestPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogData, setBlogsData] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const navigate = useNavigate();

    const handleDivClick = (id) => {
        navigate(`/innerblog/${id}`); // Navigate to the desired route
    };
    useEffect(() => {
        getPosts(1)
          .then(response => {
            setLatestPost(response.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []);
      useEffect(() => {
        getPostsList(100, 1)
        .then(response => {
            setBlogsData(response.data);
        })
      }, []);
      const handleShowMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3); // Show 5 more posts on each click
      };
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error fetching posts</p>;
      
    return (
        <>
            <div className="container-fluid latest-blog">
                <div className="row">
                {latestPost.map(post => (
                    <>
                        <div className="col-md-6">
                            <div className="latest-bg" onClick={() => handleDivClick(post.id)} style={{cursor: 'pointer'}}>
                                <img src={post.featured_image} width="100%"/>
                            </div>
                        </div>
                        <div className="col-md-5 mx-4">
                            <h4>{post.date}</h4>
                            <h2 className="mt-4 fw-bold">{post.title}</h2>
                            <p className="mt-4">
                                {post.excerpt}
                            </p>
                            <Link to={"/innerblog/"+post.id}>Read article</Link>
                        </div>
                    </>
                ))}
                </div>
                <div className="row all-blogs">
                    <h2 className="fw-bold">All blogs</h2>
                    {blogData.slice(0, visiblePosts).map(post => (
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
                <div className="d-flex justify-content-center">
                <button type="button"  onClick={handleShowMore} className="btn btn-default loadblogs">Load more blogs</button>
                </div>
                
            </div>
        </>
    );
}
export default LatestBlog;