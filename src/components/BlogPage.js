import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../services/blogService';
import './css/BlogPage.css'; 
const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(blogId);
      setBlog(data);
    };
    fetchBlog();
  }, [blogId]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-page">
      <h2>{blog.blogHeading}</h2>
      <p>{blog.authorName}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
    </div>
  );
};

export default BlogPage;
