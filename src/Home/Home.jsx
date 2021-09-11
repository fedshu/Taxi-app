import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
export class Home extends React.Component {
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in <Link to="/profile">Go to profile</Link>
          </p>
        ) : (
          <LoginForm></LoginForm>
        )}
      </>
    );
  }
}

export const HomeWithAuth = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(Home);
