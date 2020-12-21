import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe, updateNewPostText } from "./redux/state";
import { addPost } from "./redux/state";
import "./index.css";

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);
