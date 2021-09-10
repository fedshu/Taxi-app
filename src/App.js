import React from "react";
import { connect } from "react-redux";
import { Switch, Route,Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { HomeWithAuth } from "./Home";
import { Map } from "./Map";
import { ProfileWithAuth } from "./Profile";
import "./App.css";

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
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={HomeWithAuth} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithAuth} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
