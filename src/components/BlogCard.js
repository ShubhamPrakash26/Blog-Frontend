import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/BlogCard.css';

const BlogCard = ({ blog, onStatusChange }) => {
  const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image';
  const location = useLocation();
  const isMainPage = location.pathname === '/main-page';
  
  const [showDialog, setShowDialog] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const handleStatusChange = (e) => {
    e.preventDefault();
    const newStatus = e.target.value;
    setPendingAction(newStatus);
    setShowDialog(true);
  };

  const handleConfirm = () => {
    if (onStatusChange && pendingAction) {
      onStatusChange(blog._id, pendingAction);
    }
    setShowDialog(false);
    setPendingAction(null);
  };

  const handleCancel = () => {
    setShowDialog(false);
    setPendingAction(null);
  };

  return (
    <>
      <div className="blog-card">
        <h3>{blog.blogHeading}</h3>
        
        <div className="blog-meta">
          <p>Author: {blog.authorName}</p>
          <p>Department: {blog.authorDepartment}</p>
          
          {isMainPage && (
            <div className="status-container">
              <select 
                value={blog.status}
                onChange={handleStatusChange}
                className={`status-select ${blog.status.toLowerCase()}`}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          )}
          
          {!isMainPage && (
            <span className={`status ${blog.status.toLowerCase()}`}>
              {blog.status}
            </span>
          )}
          
          <p>Posted: {new Date(blog.dateOfPosting).toLocaleDateString()}</p>
        </div>
        
        <img 
          src={blog.blogImage || defaultImage} 
          alt={blog.blogHeading}
          className="blog-image"
          onError={(e) => {
            e.target.src = defaultImage;
            e.target.onerror = null;
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

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h3>Confirm Status Change</h3>
            <p>Are you sure you want to change the status to {pendingAction}?</p>
            <div className="dialog-buttons">
              <button onClick={handleCancel} className="cancel-button">Cancel</button>
              <button onClick={handleConfirm} className="confirm-button">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;