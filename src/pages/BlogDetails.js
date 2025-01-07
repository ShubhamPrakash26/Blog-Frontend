import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/BlogDetails.css';

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/getBlogById/${blogId}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching blog details');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="error-container">
        <h2>Blog Not Found</h2>
        <p>The requested blog could not be found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="blog-details-container">
      <div className="blog-header">
        <h1>{blog.blogHeading}</h1>
        <div className="blog-meta">
          <div className="author-info">
            <span>By {blog.authorName}</span>
            <span>Department: {blog.authorDepartment}</span>
          </div>
          <div className="date-info">
            <span>Posted on: {new Date(blog.dateOfPosting).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className={`status-badge ${blog.status.toLowerCase()}`}>
            {blog.status}
          </div>
        </div>
      </div>

      {blog.blogImage && (
        <div className="blog-image-container">
          <img 
            src={blog.blogImage} 
            alt={blog.blogHeading}
            className="blog-image"
          />
        </div>
      )}

      <div className="blog-content">
        {blog.blogContent.split('\n').map((paragraph, index) => (
          paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
        ))}
      </div>

      {blog.approvedBy && (
        <div className="approval-info">
          <h3>Approval Information</h3>
          <p>Approved by: {blog.approvedBy.name}</p>
          <p>Role: {blog.approvedBy.role}</p>
        </div>
      )}

      <div className="blog-footer">
        <button onClick={() => navigate(-1)} className="back-button">
          Back to Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;