import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components";
import { HomeWithAuth, Map, ProfileWithAuth } from "./pages";
import { Box } from "@mui/material";
import './scss/app.scss'
class App extends React.Component {
  render() {
    return (
      <>
        <Box className="container">
          {this.props.isLoggedIn && (
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
          )}
          <section>
            <Switch>
              <Route exact path="/" component={HomeWithAuth} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithAuth} />
            </Switch>
          </section>
        </Box>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
