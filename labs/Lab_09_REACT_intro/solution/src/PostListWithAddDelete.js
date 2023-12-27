import React, { useState } from 'react';

const PostListWithAddDelete = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ username: '', text: '', likes: 0});

  const handleAddPost = () => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: Date.now(), likes: 0 }]);
    setNewPost({ username: '', text: '', likes: 0});
  };

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

	const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={newPost.username}
          onChange={(e) => setNewPost({ ...newPost, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Текст поста"
          value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
        />
				<div>
    </div>
        <button onClick={handleAddPost}>Добавить пост</button>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.username}</p>
          <p>{post.text}</p>
					<button onClick={() => handleLike(post.id)}>
            Лайк ({post.likes})
          </button>
          <button onClick={() => handleDeletePost(post.id)}>Удалить пост</button>
        </div>
      ))}
    </div>
  );
};

export default PostListWithAddDelete;