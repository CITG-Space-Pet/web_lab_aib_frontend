import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import PostList from "./PostList.js";

ReactDOM.render(
  <React.StrictMode>
    <PostList />
  </React.StrictMode>,
  document.getElementById("root")
);
