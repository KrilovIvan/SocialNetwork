import { usersAPI } from "../api/userAPI";
const GET_FRIENDS = "GET_FRIENDS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";
let initialState = {
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
    {
      name: "Find Users",
      path: "/findusers",
      image:
        "https://img.icons8.com/external-others-inmotus-design/344/external-Magnifier-vkontakte-others-inmotus-design-2.png",
    },
  ],
  friends: [],
  isFollowingMass: [],
  isFollowing: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS: {
      console.log("friends", action);
      return {
        ...state,
        friends: [...action.friendsData],
      };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        isFollowingMass: action.isFollowing
          ? [...state.isFollowingMass, action.userId]
          : state.isFollowingMass.filter((id) => id !== action.userId),
      };
    }
    case FOLLOW: {
      return {
        ...state,
        friends: state.friends.map((e) => {
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
        friends: state.friends.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: false };
          }
          return e;
        }),
      };
    }
    default:
      return state;
  }
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

export const getFriends = () => {
  return (dispatch) => {
    usersAPI.getFriends().then((data) => {
      dispatch(setFriends(data.items));
    });
  };
};

export const toggleIsFollowing = (isFollowing, userId) => {
  return { type: TOGGLE_IS_FOLLOWING, isFollowing, userId };
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setFriends = (friendsData) => {
  return { type: GET_FRIENDS, friendsData };
};
export default navbarReducer;
