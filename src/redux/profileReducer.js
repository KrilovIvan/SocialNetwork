import { usersAPI } from "../api/userAPI";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const LIKE = "LIKE";
const SET_STATUS = "SET_STATUS";
let initialState = {
  postsData: [
    {
      id: 1,
      message: "It's my first post",
      countLikes: 23,
      likeFlag: true,
    },
    {
      id: 2,
      message: "Hello!",
      countLikes: 50,
      likeFlag: true,
    },
  ],
  newText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const adeddPost = {
        id: 3,
        message: state.newText,
        countLikes: 0,
        likeFlag: true,
      };

      if (adeddPost.message !== "") {
        return {
          ...state,
          postsData: [...state.postsData, adeddPost],
          newText: "",
        };
      } else {
        alert("Пост не должен быть пустым!");
      }
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newText: action.newText };
    }
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case LIKE: {
      return {
        ...state,
        postsData: state.postsData.map((e) => {
          if (e.id === action.postId) {
            let count = e.countLikes;
            let flag = e.likeFlag;
            return flag
              ? { ...e, countLikes: count + 1, likeFlag: !flag }
              : count > 0
              ? { ...e, countLikes: count - 1, likeFlag: !flag }
              : { ...e, countLikes: count, likeFlag: !flag };
          }
          return e;
        }),
      };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const like = (postId) => {
  return { type: LIKE, postId };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const setUsersProfileActionCreator = (profile) => {
  return { type: SET_USERS_PROFILE, profile: profile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    usersAPI
      .getStatus(userId)
      .then((response) => dispatch(setStatus(response.data)));
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
