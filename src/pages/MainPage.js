import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import { 
  getApprovedBlogs, 
  getPendingBlogs, 
  getRejectedBlogs,
  approveBlog,
  rejectBlog
} from '../services/blogService';
import './css/MainPage.css';

const MainPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllBlogs = async () => {
    try {
      const [approved, pending, rejected] = await Promise.all([
        getApprovedBlogs(),
        getPendingBlogs(),
        getRejectedBlogs()
      ]);
      
      setBlogs([...approved, ...pending, ...rejected]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to fetch blogs');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const handleStatusChange = async (blogId, newStatus) => {
    try {
      if (newStatus === 'Approved') {
        await approveBlog(blogId);
      } else if (newStatus === 'Rejected') {
        await rejectBlog(blogId);
      }
      
      // Refresh the blogs list after status update
      await fetchAllBlogs();
    } catch (error) {
      console.error('Error updating blog status:', error);
      setError('Failed to update blog status');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="main-page">
      <h1>All Blogs</h1>
      <BlogList blogs={blogs} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default MainPage;