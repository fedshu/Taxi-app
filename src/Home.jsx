import React from "react";
import { connect } from "react-redux";
import { authenticate } from "./actions";
export class Home extends React.Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  goToProfile = () => {
      this.props.navigate('profile')
  }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28" />
            <button type="submit">Submit</button>
          </form>
        )}
      </>
    );
  }
}

export const HomeWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Home);
