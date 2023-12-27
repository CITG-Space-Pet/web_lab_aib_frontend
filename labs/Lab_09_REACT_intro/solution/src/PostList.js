import React, { useState } from "react";
import Post from "./Post.js";

const PostList = () => {
  const [posts, setPosts] = useState([
    { username: "Author 1", text: "text", likes: 0, tags: ["🎅"] },
    { username: "Author 2", text: "text", likes: 0, tags: ["🎅", "🎄"] },
    { username: "Author 3", text: "text", likes: 0, tags: ["📆", "🎅"] },
    { username: "Author 4", text: "text", likes: 0, tags: ["😻", "📆", "🎄"] },
    { username: "Author 5", text: "ЦМКО", likes: 0, tags: ["☠"] },
    { username: "Author 6", text: "Урааа НГ", likes: 0, tags: ["🍷", "🍸", "🍹", "🍺" ] },
  ]);
  const [usernameInput, setUsernameInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleLike = (index, isLiked) => {
    const updatedPosts = [...posts];
    if (isLiked) {
      updatedPosts[index].likes += 1;
    } else {
      updatedPosts[index].likes -= 1;
    }
    setPosts(updatedPosts);
  };

  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const addPost = () => {
    const username = usernameInput;
    const text = textInput;
    const likes = 0;
    const tags = tagInput.split(",").map((tag) => tag.trim());
    const newPost = {
      username,
      text,
      likes,
      tags,
    };
    setPosts([...posts, newPost]);
    setUsernameInput("");
    setTextInput("");
    setTagInput("");
  };

  const allTags = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };


  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          className="form-control"
          placeholder="Ваш никнейм"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Текст поста"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Теги через запятую"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />
        <button onClick={addPost} className="btn btn-secondary" size="lg">
          Добавить пост
        </button>
        <div className="tags-container">
          <p className="tags-label">Все теги:</p>
          {allTags.map((tag, index) => (
            <div
              key={index}
              className={selectedTags.includes(tag) ? "tag selected" : "tag"}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        {posts
          .filter((post) => {
            if (selectedTags.length === 0) {
              return true;
            } else {
              return post.tags.some((tag) => selectedTags.includes(tag));
            }
          })
          .map((post, index) => (
            <div className="col-md-4" key={index}>
              <Post
                username={post.username}
                text={post.text}
                likes={post.likes}
                tags={post.tags}
                onLike={(isLiked) => handleLike(index, isLiked)}
                onDelete={() => handleDelete(index)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;