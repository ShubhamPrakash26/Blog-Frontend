import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/create-blog">Create Blog</Link></li>
        <li><Link to="/approved-blogs">Approved Blogs</Link></li>
        <li><Link to="/pending-blogs">Pending Blogs</Link></li>
        <li><Link to="/rejected-blogs">Rejected Blogs</Link></li>
        <li><Link to="/all-blogs">All Blogs</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;