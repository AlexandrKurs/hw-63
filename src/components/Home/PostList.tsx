import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosApi from "../../axiosApi.ts";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosApi.get('/posts.json');
        const fetchedPosts: Post[] = Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key],
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Posts</h1>
      <div className="list-group mt-4">
        {posts.map(post => (
          <div key={post.id} className="list-group-item">
            <h5 className="mb-1">{post.title}</h5>
            <small className="text-muted">Created at: {new Date(post.createdAt).toLocaleString()}</small>
            <div className="mt-2">
              <Link to={`/posts/${post.id}`} className="btn btn-link">Read More &gt;&gt;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;