import React from "react";
import profileInfo from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props) => {
  return (
    <div className={profileInfo.contaner}>
      <div className={profileInfo.backImgCont}>
        <img
          src="https://get.wallhere.com/photo/2560x1080-px-photography-ultra-wide-1289245.jpg"
          alt="bacground"
        />
      </div>
      <div className={profileInfo.descriotionBlock}>
        <div className={profileInfo.avaNName}>
          <img
            className={profileInfo.avaImg}
            src={
              props.profile?.photos.large != null
                ? props.profile.photos.large
                : "https://www.helicon.ru/local/templates/main/img/no-photo.png"
            }
            alt="profile"
          />
          <div className={profileInfo.userName}>{props.profile?.fullName}</div>
        </div>
        <div className={profileInfo.stata}>
          {/* <div className={profileInfo.statusBar}>{props.profile?.aboutMe}</div> */}
          <ProfileStatus
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
          <div
            className={profileInfo.myPhotos}
            onClick={() => {
              alert("My photos");
            }}
          >
            My photos
          </div>
          <div
            className={profileInfo.myVideos}
            onClick={() => {
              alert("My videos");
            }}
          >
            My videos
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
