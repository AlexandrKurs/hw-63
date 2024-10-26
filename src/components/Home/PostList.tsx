import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        const response = await axiosApi.get("/posts.json");
        const fetchedPosts: Post[] = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <small>
              Created at: {new Date(post.createdAt).toLocaleString()}
            </small>
            <p>
              <Link to={`/posts/${post.id}`}>Read More &gt;&gt;</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
