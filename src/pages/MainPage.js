import React, { useEffect, useState, useRef } from 'react';
import BlogList from '../components/BlogList';
import { getApprovedBlogs, getPendingBlogs, getRejectedBlogs } from '../services/blogService';
import BlogStatusButton from '../components/BlogStatusButton';
import './css/MainPage.css';
import axios from 'axios';

const MainPage = () => {
  const [approvedBlogs, setApprovedBlogs] = useState([]);
  const [pendingBlogs, setPendingBlogs] = useState([]);
  const [rejectedBlogs, setRejectedBlogs] = useState([]);

  // Function to fetch blogs
  const fetchBlogs = async () => {
    setApprovedBlogs(await getApprovedBlogs());
    setPendingBlogs(await getPendingBlogs());
    setRejectedBlogs(await getRejectedBlogs());
  };

  useEffect(() => {
    fetchBlogs(); 
  }, []);

  const updateBlogStatus = (blogId, newStatus) => {
    axios
      .post(`http://localhost:5000/api/blogs/update-status`, {
        blogId,
        status: newStatus,
      })
      .then((response) => {
        fetchBlogs();  
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
  };

  const handleStatusChange = (blogId, currentStatus) => {
    const newStatus = currentStatus === 'approved' ? 'rejected' : 'approved';
    updateBlogStatus(blogId, newStatus);
  };

  return (
    <div>
      <h1>Main Page</h1>
      
      <div>
        <h2>Approved Blogs</h2>
        <BlogList
          blogs={approvedBlogs}
          onStatusChange={handleStatusChange}  
        />
      </div>

      <div>
        <h2>Pending Blogs</h2>
        <BlogList
          blogs={pendingBlogs}
          onStatusChange={handleStatusChange} 
        />
      </div>

      <div>
        <h2>Rejected Blogs</h2>
        <BlogList
          blogs={rejectedBlogs}
          onStatusChange={handleStatusChange}  
        />
      </div>
    </div>
  );
};

export default MainPage;
