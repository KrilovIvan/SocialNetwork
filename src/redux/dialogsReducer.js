const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const addedMessage = {
        id: 4,
        message: state.newText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, addedMessage],
        newText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newText: action.newText };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
