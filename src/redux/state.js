const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how a re you?!", likesCount: 0 },
        { id: 2, message: "Hi, how a re you?!", likesCount: 15 },
        { id: 3, message: "it's my first post!", likesCount: 5 },
        { id: 4, message: "it's my first post!", likesCount: 7 },
        { id: 5, message: "YO5!", likesCount: 23 },
        { id: 6, message: "YO6!", likesCount: 65 },
      ],
      newPostText: "itka.com",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "YO1!" },
        { id: 2, message: "YO2!" },
        { id: 3, message: "YO3!" },
        { id: 4, message: "YO4!" },
        { id: 5, message: "YO5!" },
        { id: 6, message: "YO6!" },
      ],
      dialogs: [
        { id: 1, name: "Kit" },
        { id: 2, name: "Kit1" },
        { id: 3, name: "Kit2" },
        { id: 4, name: "Kit3" },
        { id: 5, name: "Kit4" },
        { id: 6, name: "Kit5" },
      ],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: ADD-POST}
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 8,
        message: this._state.profilePage.newPostText,
        likesCount: 15,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export default store;
window.store = store;
