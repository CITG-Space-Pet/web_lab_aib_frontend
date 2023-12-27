import React, { useState } from "react";

const Post = ({ username, text, likes, tags, onLike, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(!isLiked);
  };

  return (
    <div className={isLiked ? "post liked" : "post"}>
      <h3>{username}</h3>
      <p>{text}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <button onClick={handleLike} className="btn btn-light">
        {isLiked ? (
          <>
            <span>❤️</span>
            Unlike
          </>
        ) : (
          <>
            <span>🤍</span>
            Like
          </>
        )}
      </button>
      <button onClick={onDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default Post;