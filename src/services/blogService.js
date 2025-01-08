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

export const approveBlog = async (blogId) => {
  const response = await axios.post(`${API_URL}/approveBlog`, {
    blogId,
    approverName: 'Admin',
    approverRole: 'Administrator'
  });
  return response.data;
};

export const rejectBlog = async (blogId) => {
  const response = await axios.post(`${API_URL}/rejectBlog`, {
    blogId,
    rejectorName: 'Admin',
    rejectorRole: 'Administrator'
  });
  return response.data;
};
export const pendingBlog = async (blogId) => {
  const response = await axios.post(`${API_URL}/pendingBlog`, {
    blogId,
    Name: 'Admin',
    Role: 'Administrator'
  });
  return response.data;
};