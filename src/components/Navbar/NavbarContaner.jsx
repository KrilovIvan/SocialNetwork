import { connect } from "react-redux";
import Navbar from "./Navbar";
const mapStateToProps = (state) => {
  return {
    navButtons: state.navbar.navButtons,
    friends: state.navbar.friends,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const NavbarContaner = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContaner;
