import React, { useState } from 'react';

const PostListWithTags = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ username: '', text: '', likes: 0, tags: [] });
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleAddPost = () => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: Date.now() }]);
    setNewPost({ username: '', text: '', likes: 0, tags: [] });
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

  const handleTagChange = (e) => {
		const selectedTags = e.target.value.split(',').map((tag) => tag.trim());
		setNewPost((prevPost) => ({ ...prevPost, tags: selectedTags }));
	};

  const handleFilterByTag = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const filteredPosts = selectedTags.length
    ? posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)))
    : posts;

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

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
        <input
          type="text"
          placeholder="Тэги (через запятую)"
          value={newPost.tags.join(',')}
          onChange={handleTagChange}
        />
        <button onClick={handleAddPost}>Добавить пост</button>
      </div>
      <div>
        <h3>Теги:</h3>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilterByTag(tag)}
            style={{ fontWeight: selectedTags.includes(tag) ? 'bold' : 'normal' }}
          >
            {tag}
          </button>
        ))}
      </div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <p>{post.username}</p>
          <p>{post.text}</p>
          <p>Теги: {post.tags.join(', ')}</p>
          <button onClick={() => handleLike(post.id)}>
            Лайк ({post.likes})
          </button>
          <button onClick={() => handleDeletePost(post.id)}>Удалить пост</button>
        </div>
      ))}
    </div>
  );
};

export default PostListWithTags;
