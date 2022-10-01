import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
  auth: state.auth.isAuth,
});

const withAuthNavRep = (Component) => {
  const NavRepComponent = (props) => {
    if (!props.auth) {
      return <Navigate replace to="/login" />;
    }

    return <Component {...props} />;
  };

  let ConnectedAuthNavRepComp = connect(mapStateToPropsForRedirect)(
    NavRepComponent
  );
  return ConnectedAuthNavRepComp;
};

export default withAuthNavRep;
