import React, { useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'User1', text: 'Post 1', likes: 0 },
    { id: 2, username: 'User2', text: 'Post 2', likes: 0 },
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.username}</p>
          <p>{post.text}</p>
          <button onClick={() => handleLike(post.id)}>
            Лайк ({post.likes})
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;