import React from "react";
import FUser from "../FindUsers/FUser/FUser";
import { connect } from "react-redux";
import { getFriends } from "../../redux/navbarReducer";
import preloader from "../../preloader.gif";
import s from "../FindUsers/FindUsers.module.css";
import {
  follow,
  unfollow,
  toggleIsFollowing,
  deleteFollow,
  postFollow,
} from "../../redux/navbarReducer";
import { useEffect } from "react";

const FriendsContaner = (props) => {
  // useEffect(() => {
  // props.getFriends();
  // }, [props.friends]);

  const findFriendsElem = () => {
    let findFriendsElem = props.friends.map((e) => {
      let followedStr = [];
      if (e.followed === true) {
        followedStr.push("Отписаться");
      } else {
        followedStr.push("Подписаться");
      }
      return (
        <FUser
          id={e.id}
          followed={e.followed}
          name={e.name}
          status={e.status}
          location={e.location}
          photos={e.photos}
          followedStr={followedStr}
          follow={props.follow}
          unfollow={props.unfollow}
          toggleIsFollowing={props.toggleIsFollowing}
          isFollowingMass={props.isFollowingMass}
          deleteFollow={props.deleteFollow}
          postFollow={props.postFollow}
        />
      );
    });
    return <>{findFriendsElem}</>;
  };
  return (
    <>
      <div className={s.flexContaner}>{findFriendsElem()}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends,
    isFetching: state.findUsers.isFetching,
    isFollowingMass: state.findUsers.isFollowingMass,
    usersData: state.findUsers.usersData,
  };
};

export default connect(mapStateToProps, {
  getFriends,
  follow,
  unfollow,
  toggleIsFollowing,
  deleteFollow,
  postFollow,
})(FriendsContaner);
