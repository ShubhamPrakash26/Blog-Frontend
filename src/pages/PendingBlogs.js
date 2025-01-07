import React, { useEffect, useState } from 'react';
import { getPendingBlogs } from '../services/blogService';
import BlogList from '../components/BlogList';
import './css/PendingBlogs.css'; 

const PendingBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getPendingBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Pending Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs are pending for approval.</p>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
};

export default PendingBlogs;
