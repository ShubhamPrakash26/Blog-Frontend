import React, { useEffect, useState } from 'react';
import { getApprovedBlogs } from '../services/blogService';
import BlogList from '../components/BlogList';
import './css/ApprovedBlogs.css'; 

const ApprovedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getApprovedBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Approved Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default ApprovedBlogs;
