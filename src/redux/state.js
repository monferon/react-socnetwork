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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost(postMessage) {
    let newPost = {
      id: 8,
      message: this._state.profilePage.newPostText,
      likesCount: 15,
    };
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
