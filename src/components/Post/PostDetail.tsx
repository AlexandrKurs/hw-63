import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi.ts";

interface Post {
  title: string;
  content: string;
  createdAt: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosApi.get(`/posts/${id}.json`);
        setPost({ id, ...response.data });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axiosApi.delete(`/posts/${id}.json`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <small>Created at: {new Date(post.createdAt).toLocaleString()}</small>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate(`/posts/${id}/edit`)}>Edit</button>
    </div>
  );
};

export default PostDetail;
