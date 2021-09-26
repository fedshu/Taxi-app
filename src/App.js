import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components";
import { HomeWithAuth, Map, ProfileWithAuth } from "./pages";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import "./scss/app.scss";
class App extends React.Component {
  render() {
    return (
      <>
        <Box className="container">
          {this.props.isLoggedIn && (
            <AppBar position="static" color="default">
              <Toolbar>
                <Link to="/">
                  <Typography>Home</Typography>
                </Link>
                <Link to="/map">
                  <Typography>Map</Typography>
                </Link>
                <Link to="/profile">
                  <Typography>Profile</Typography>
                </Link>
              </Toolbar>
            </AppBar>
          )}
          <section className="container__content">
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
