import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs';

export const getApprovedBlogs = async () => {
  const response = await axios.get(`${API_URL}/getVerifiedBlogs`);
  return response.data;
};

export const getPendingBlogs = async () => {
  const response = await axios.get(`${API_URL}/getPendingBlogs`);
  return response.data;
};

export const getRejectedBlogs = async () => {
  const response = await axios.get(`${API_URL}/getRejectedBlogs`);
  return response.data;
};

export const getBlogById = async (blogId) => {
  const response = await axios.get(`${API_URL}/getBlogById/${blogId}`);
  return response.data;
};

export const updateBlogStatus = async (blogId, newStatus) => {
  const response = await axios.post(`${API_URL}/updateStatus`, { blogId, status: newStatus });
  return response.data;
};
