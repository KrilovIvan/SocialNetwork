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
      };

    default:
      return state;
  }
};

export const getAuth = () => {
  return (dispatch) => {
    usersAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setAuthUserData(data.data.id, data.data.email, data.data.login, true)
        );
      }
    });
  };
};

export const login = (email, password, rememberMe, setStatus) => {
  return (dispatch) => {
    usersAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth());
      } else {
        setStatus(response.data.messages);
      }
    });
  };
};

export const logout = () => (dispatch) => {
  usersAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return { type: SET_AUTH_DATA, data: { userId, email, login, isAuth } };
};
export default authReducer;
