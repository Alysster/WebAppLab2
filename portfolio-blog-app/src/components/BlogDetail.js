import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css'; 

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>{blog.date}</p>
    </div>
  );
};

export default BlogDetail;
