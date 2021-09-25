import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute, Map, ProfileWithAuth } from "./components";
import { HomeWithAuth } from "./Home";
import { Paper } from "@mui/material";
class App extends React.Component {
  render() {
    return (
      <>
        <Paper variant="outlined" square>
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

          <main>
            <section>
              <Switch>
                <Route exact path="/" component={HomeWithAuth} />
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={ProfileWithAuth} />
              </Switch>
            </section>
          </main>
        </Paper>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
