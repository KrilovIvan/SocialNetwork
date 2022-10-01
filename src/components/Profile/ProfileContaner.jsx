import React from "react";
import { usersAPI } from "../../api/userAPI";
import Profile from "./Profile";

class ProfileContaner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    usersAPI.getProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
  }
  render() {
    return <Profile profile={this.props.profile} />;
  }
}

export default ProfileContaner;
