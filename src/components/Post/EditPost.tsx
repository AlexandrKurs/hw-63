import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosApi from "../../axiosApi.ts";

interface Post {
  title: string;
  content: string;
  createdAt?: string;
}

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosApi.get(`/posts/${id}.json`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (post) {
      setPost(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post) {
      try {
        await axiosApi.put(`/posts/${id}.json`, { ...post, createdAt: post.createdAt });
        navigate(`/posts/${id}`);
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;