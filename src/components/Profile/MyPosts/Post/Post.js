import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://img.douxie.com/upload/imgs/1211/1352272842946.jpg"></img>{" "}
      post1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
