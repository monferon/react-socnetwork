import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add</button>
        <button>Remove</button>
      </div>
      <div>
        <div className={s.posts}></div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
