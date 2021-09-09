import React from "react";
import { withAuth } from "./AuthContext";

export class Profile extends React.Component {
  unauthenticate = () => this.props.logOut();

  render() {
    return (
      <p>
        Profile
        <button onClick={this.unauthenticate}>Log out</button>
      </p>
    );
  }
}

export const ProfileWithAuth = withAuth(Profile);
