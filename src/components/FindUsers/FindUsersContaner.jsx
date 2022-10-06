import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowing,
  getUsers,
  getNewPage,
  deleteFollow,
  postFollow,
} from "../../redux/findusersReducer";
import { getFriends } from "../../redux/navbarReducer";
import FUser from "./FUser/FUser";
import s from "./FindUsers.module.css";
import preloader from "../../preloader.gif";
import React from "react";
import withAuthNavRep from "../../hoc/withAuthNavRep";
import ScrollButton from "./ScrollButton/ScrollButton";

class FindUsers extends React.Component {
  componentDidMount() {
    if (this.props.usersData.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onClickChanged = (currPage) => {
    this.props.getNewPage(this.props.pageSize, currPage);
  };

  getButtons() {
    let buttonsP = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      i++
    ) {
      buttonsP.push(i);
    }
    let mapButP = buttonsP.map((e) => {
      return (
        <button
          className={this.props.currentPage === e && s.selectedButton}
          onClick={() => {
            this.onClickChanged(e);
          }}
        >
          {e}
        </button>
      );
    });
    return mapButP;
  }

  findUsersElem() {
    let findUsersElem = this.props.usersData.map((e) => {
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleIsFollowing={this.props.toggleIsFollowing}
          isFollowingMass={this.props.isFollowingMass}
          deleteFollow={this.props.deleteFollow}
          postFollow={this.props.postFollow}
          getFriends={this.props.getFriends}
        />
      );
    });
    return (
      <>
        {findUsersElem}
        {this.props.isFetching ? (
          <div className={s.preloaderCont}>
            <img src={preloader} alt="preloader" className={s.preloader} />
          </div>
        ) : null}
      </>
    );
  }

  render() {
    return (
      <div>
        <ScrollButton />
        <div className={s.flexContaner}>
          {this.findUsersElem()}
          <div className={s.buttonContaner}>
            <button
              className={s.button}
              onClick={() => {
                this.onClickChanged(this.props.currentPage);
              }}
            >
              Показать еще
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.findUsers.usersData,
    currentPage: state.findUsers.currentPage,
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    isFetching: state.findUsers.isFetching,
    isFollowing: state.findUsers.isFollowing,
    isFollowingMass: state.findUsers.isFollowingMass,
  };
};

const AuthNavRepComp = withAuthNavRep(FindUsers);

const FindUsersContaner = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowing,
  getUsers,
  getNewPage,
  deleteFollow,
  postFollow,
  getFriends,
})(AuthNavRepComp);

export default FindUsersContaner;
