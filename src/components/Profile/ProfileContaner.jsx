import React from "react";
import { usersAPI } from "../../api/userAPI";
import Profile from "./Profile";

class ProfileContaner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1050;
    }
    usersAPI.getProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
      this.props.getUserStatus(userId);
    });
  }
  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

export default ProfileContaner;
