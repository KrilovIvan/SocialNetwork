import React from "react";
import ProfileContaner from "./ProfileContaner";
import {
  getUserStatus,
  setUsersProfileActionCreator,
  updateUserStatus,
} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

let withRouterProfile = withRouter(ProfileContaner);

export default connect(mapStateToProps, {
  setUsersProfile: setUsersProfileActionCreator,
  getUserStatus,
  updateUserStatus,
})(withRouterProfile);
