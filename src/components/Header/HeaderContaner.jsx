import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, getAuth } from "../../redux/authReducer";
import Header from "./Header";
class HeaderContaner extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAuthUserData, getAuth })(
  HeaderContaner
);
