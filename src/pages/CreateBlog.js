import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/CreateBlog.css';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    authorName: '',
    authorDepartment: '',
    blogImage: '',
    blogHeading: '',
    blogContent: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      blogImage: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/blogs/createBlog', formData);
      
      if (response.data) {
        alert('Blog created successfully!');
        navigate('/pending-blogs');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-container">
      <h1>Create New Blog</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="create-blog-form">
        <div className="form-group">
          <label htmlFor="authorName">Author Name *</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorDepartment">Department *</label>
          <input
            type="text"
            id="authorDepartment"
            name="authorDepartment"
            value={formData.authorDepartment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="blogHeading">Blog Title *</label>
          <input
            type="text"
            id="blogHeading"
            name="blogHeading"
            value={formData.blogHeading}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="blogImage">Image URL (Optional)</label>
          <input
            type="text"
            id="blogImage"
            name="blogImage"
            value={formData.blogImage}
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="blogContent">Blog Content *</label>
          <textarea
            id="blogContent"
            name="blogContent"
            value={formData.blogContent}
            onChange={handleChange}
            rows="10"
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;