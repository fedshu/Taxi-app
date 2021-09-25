import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions";

class Profile extends React.Component {
  unauthenticate = () => {
    this.props.logOut();
  };

  render() {
    return (
      <p>
        Profile
        <button onClick={this.unauthenticate}>Log out</button>
      </p>
    );
  }
}

export const ProfileWithAuth = connect(null, { logOut })(Profile);
