import {Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {getPosts, getPostsList} from "../services/api";

export default function Blog ({id}) {
    const [latestPost, setLatestPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [blogData, setBlogsData] = useState([]);
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
        getPostsList(3, 1)
        .then(response => {
            setBlogsData(response.data);
        })
      }, []);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error fetching posts</p>;

     
    return (
        <>
            <div className="container mt-4 blog" id={id}>
                <h1 className="text-center pt-3 pb-4">Check out our top blogs!</h1>
                <div className="row pt-4 pb-4">
                   
                   {latestPost.map(post => (
                    <div className="col-md-5 blog-bg" onClick={() => handleDivClick(post.id)} style={{backgroundImage: `url(${post.featured_image})`, cursor: 'pointer'}}>
                        <div className="text-bottom">
                            <h4 className="text-center"><Link to={"/innerblog/"+post.id} style={{color: 'white'}}>{post.title}</Link></h4>
                            <p className="text-center">See Our Latest Projects Come to Life</p>
                        </div>
                        
                    </div>
                   ))}
                    
                    <div className="col-lg-7 col-md-12">
                    {blogData.map(post => (
                       <div className="row blog-info">
                            <div className="col-md-3 image d-flex" onClick={() => handleDivClick(post.id)} ><img src={post.featured_image} alt="" style={{width: '100%', cursor: 'pointer'}}/></div>
                            <div className="col-md-9 info">
                                <h5><Link to={"/innerblog/"+post.id}>{post.title}</Link></h5>
                                <hr />
                                <p>{post.date}</p>
                            </div>
                        </div>
                         
                    ))}
                    <div className="d-flex justify-content-center">
                        <Link type="button" to="/blogs" className="btn btn-default loadblogs">Load more blogs</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}