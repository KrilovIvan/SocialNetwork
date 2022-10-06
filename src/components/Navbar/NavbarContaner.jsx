import { connect } from "react-redux";
import Navbar from "./Navbar";
import { getFriends, setFriends } from "../../redux/navbarReducer";
import { useEffect } from "react";

const NavbarContaner = (props) => {
  useEffect(() => {
    props.getFriends();
    debugger;
    console.log(props.friends);
  }, [props.friends]);

  return (
    <Navbar
      navButtons={props.navButtons}
      friends={props.auth ? props.friends : []}
      usersData={props.usersData}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    navButtons: state.navbar.navButtons,
    friends: state.navbar.friends,
    auth: state.auth.isAuth,
  };
};

const NavbarContanerCont = connect(mapStateToProps, { getFriends, setFriends })(
  NavbarContaner
);

export default NavbarContanerCont;
