import React, { useEffect, useState } from 'react';
import { getRejectedBlogs } from '../services/blogService';
import BlogList from '../components/BlogList';
import './css/RejectedBlogs.css'; 
const RejectedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getRejectedBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    
    <div>
      <h1>Rejected Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs have been rejected.</p>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
};

export default RejectedBlogs;
