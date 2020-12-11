import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
      <div>
        <div className={s.posts}></div>
        <Post message="Hi, how a re you?" count="0" />
        <Post message="it's my first post" count="20" />
      </div>
    </div>
  );
};

export default MyPosts;
