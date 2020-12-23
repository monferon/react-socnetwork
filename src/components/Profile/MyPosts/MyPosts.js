import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postDataJSX = props.postData.map((post) => (
    <Post message={post.message} count={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'ADD-POST'});
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  };
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChange}
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
