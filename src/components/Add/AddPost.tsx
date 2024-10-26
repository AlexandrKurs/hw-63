import React, { useState } from 'react';
import axiosApi from "../../axiosApi.ts";

const AddPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const createdAt = new Date().toISOString();
      await axiosApi.post('/posts.json', { title, content, createdAt });
      setTitle('');
      setContent('');
      alert('Post added!');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add New Post</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content:</label>
          <textarea
            className="form-control"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;