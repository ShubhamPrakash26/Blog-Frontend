import React from 'react';
import './css/BlogStatusButton.css'; 
const BlogStatusButton = ({ status, onClick }) => {
  return (
    <button onClick={onClick} className={`btn-status ${status}`}>
      {status === 'pending' ? 'Approve' : status === 'approved' ? 'Reject' : 'Revert'}
    </button>
  );
};

export default BlogStatusButton;
