import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <Link to={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;


