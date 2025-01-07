import React from 'react';
import { Link } from 'react-router-dom';
import './css/BlogCard.css';

const BlogCard = ({ blog }) => {
  const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div className="blog-card">
      <h3>{blog.blogHeading}</h3>
      
      <div className="blog-meta">
        <p>Author: {blog.authorName}</p>
        <p>Department: {blog.authorDepartment}</p>
        <span className={`status ${blog.status}`}>{blog.status}</span>
        <p>Posted: {new Date(blog.dateOfPosting).toLocaleDateString()}</p>
      </div>
      
      <img 
        src={blog.blogImage || defaultImage} 
        alt={blog.blogHeading}
        className="blog-image"
        onError={(e) => {
          e.target.src = defaultImage;
          e.target.onerror = null; // Prevent infinite loop if default image fails
        }}
      />
      
      {blog.approvedBy && (
        <div className="approval-info">
          <p>Approved by: {blog.approvedBy.name}</p>
          <p>Role: {blog.approvedBy.role}</p>
        </div>
      )}
      
      <Link to={`/blogs/${blog._id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;