import { usersAPI } from "../api/userAPI";

const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const getAuth = () => {
  return (dispatch) => {
    usersAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
      }
    });
  };
};

export const setAuthUserData = (data) => {
  return { type: SET_AUTH_DATA, data: data };
};
export default authReducer;
