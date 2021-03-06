import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "./../../../redux/state";

const MyPosts = (props) => {
  let postDataJSX = props.postData.map((post) => (
    <Post message={post.message} count={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add</button>
          <button>Remove</button>
        </div>
      </div>
      <div>
        <div className={s.posts}></div>
        {postDataJSX}
      </div>
    </div>
  );
};

export default MyPosts;
