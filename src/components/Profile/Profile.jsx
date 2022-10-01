import React from "react";
import MyPostsContaner from "./MyPosts/MyPostsContaner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContaner />
    </div>
  );
};
export default Profile;
