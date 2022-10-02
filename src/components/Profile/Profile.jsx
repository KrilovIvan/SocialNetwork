import React from "react";
import MyPostsContaner from "./MyPosts/MyPostsContaner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContaner />
    </div>
  );
};
export default Profile;
