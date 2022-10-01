import { usersAPI } from "../api/userAPI";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURR_PAGE = "SET_CURR_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
  usersData: [],
  currentPage: 1,
  pageSize: 4,
  totalUsersCount: null,
  isFetching: true,
  isFollowing: false,
  isFollowingMass: [],
};

const findusersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: true };
          }
          return e;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: false };
          }
          return e;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData],
      };
    }
    case SET_CURR_PAGE: {
      return { ...state, currentPage: action.currentPage + 1 };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        isFollowingMass: action.isFollowing
          ? [...state.isFollowingMass, action.userId]
          : state.isFollowingMass.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setCurrentPage(currentPage));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const getNewPage = (pageSize, currPage) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currPage));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const deleteFollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, id));
    usersAPI.deleteFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleIsFollowing(false, id));
    });
  };
};

export const postFollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, id));
    usersAPI.postFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(toggleIsFollowing(false, id));
    });
  };
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsers = (usersData) => {
  return { type: SET_USERS, usersData };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURR_PAGE, currentPage };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount };
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export const toggleIsFollowing = (isFollowing, userId) => {
  return { type: TOGGLE_IS_FOLLOWING, isFollowing, userId };
};

export default findusersReducer;
