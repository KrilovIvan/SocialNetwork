import dialogsReducer from "./dialogsReducer";
import profileReucer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "It's my first post",
          countLikes: 23,
        },
        {
          id: 2,
          message: "Hello!",
          countLikes: 50,
        },
      ],
      newText: "",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Azat" },
        { id: 3, name: "Vladimir" },
        { id: 4, name: "Lev" },
        { id: 5, name: "Alexander" },
      ],
      messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How're you?" },
        { id: 3, message: "I'm fine" },
      ],
      newText: "",
    },
    navbar: {
      navButtons: [
        {
          name: "Profile",
          path: "/profile",
          image:
            "https://img.icons8.com/external-others-inmotus-design/344/external-User-vkontakte-others-inmotus-design-6.png",
        },
        {
          name: "Messages",
          path: "/dialogs",
          image:
            "https://img.icons8.com/external-others-inmotus-design/344/external-Mail-vkontakte-others-inmotus-design.png",
        },
        {
          name: "News",
          path: "/news",
          image:
            "https://img.icons8.com/external-others-inmotus-design/344/external-Info-vkontakte-others-inmotus-design-2.png",
        },
        {
          name: "Music",
          path: "/music",
          image:
            "https://img.icons8.com/external-others-inmotus-design/344/external-Headphones-vkontakte-others-inmotus-design-4.png",
        },
        {
          name: "Settings",
          path: "/settings",
          image:
            "https://img.icons8.com/external-others-inmotus-design/344/external-Settings-vkontakte-others-inmotus-design-3.png",
        },
      ],
      friends: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Azat" },
        { id: 3, name: "Vladimir" },
        { id: 4, name: "Lev" },
        { id: 5, name: "Alexander" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State is changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReucer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store._state;
