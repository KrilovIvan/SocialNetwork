import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  like,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dataPosts: state.profilePage.postsData,
    newPostText: state.profilePage.newText,
    id: state.profilePage.postsData.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (upText) => {
      dispatch(updateNewPostTextActionCreator(upText));
    },
    addedPost: () => {
      dispatch(addPostActionCreator());
    },
    addLike: (postId) => {
      dispatch(like(postId));
    },
  };
};

const MyPostsConataner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConataner;
