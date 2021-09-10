import React from "react";
import { HomeWithAuth } from "./Home";
import { Map } from "./Map";
import { ProfileWithAuth } from "./Profile";
import { connect } from "react-redux";
import "./App.css";
import { Switch, Link, Route } from "react-router";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Profile</Link>
              </li>
              <li>
                <Link to="/profile">Map</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={HomeWithAuth} />
              <Route exact path="/map" component={Map} />
              <Route exact path="/profile" component={ProfileWithAuth} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
