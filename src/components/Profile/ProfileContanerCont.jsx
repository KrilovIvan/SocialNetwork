import React from "react";
import ProfileContaner from "./ProfileContaner";
import { setUsersProfileActionCreator } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import withAuthNavRep from "../../hoc/withAuthNavRep";
function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
let AuthNavRepComp = withAuthNavRep(ProfileContaner);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let withRouterProfile = withRouter(AuthNavRepComp);

export default connect(mapStateToProps, {
  setUsersProfile: setUsersProfileActionCreator,
})(withRouterProfile);