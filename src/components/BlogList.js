import React from 'react';
import BlogCard from './BlogCard';
import './css/BlogList.css';

const BlogList = ({ blogs, onStatusChange }) => {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs found</p>;
  }

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogCard 
          key={blog._id} 
          blog={{
            ...blog,
            datePosted: new Date(blog.dateOfPosting).toLocaleDateString(),
            author: blog.authorName,
            department: blog.authorDepartment
          }}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default BlogList;