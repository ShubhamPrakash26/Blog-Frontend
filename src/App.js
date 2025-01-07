import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ApprovedBlogs from './pages/ApprovedBlogs';
import PendingBlogs from './pages/PendingBlogs';
import RejectedBlogs from './pages/RejectedBlogs';
import BlogDetails from './pages/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/main-page" />} />
            <Route path="/main-page" element={<MainPage />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/approved-blogs" element={<ApprovedBlogs />} />
            <Route path="/pending-blogs" element={<PendingBlogs />} />
            <Route path="/rejected-blogs" element={<RejectedBlogs />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="*" element={<Navigate to="/main-page" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;