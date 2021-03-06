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
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Toolbar>
                  <Link to="/">
                    <Typography variant="h6" sx={{ ml: 2 }}>Home</Typography>
                  </Link>
                  <Link to="/map">
                    <Typography variant="h6" sx={{ ml: 2 }}>Map</Typography>
                  </Link>
                  <Link to="/profile">
                    <Typography variant="h6" sx={{ ml: 2 }}>Profile</Typography>
                  </Link>
                </Toolbar>
              </Box>
            </AppBar>
          )}
          <Switch>
            <Route exact path="/" component={HomeWithAuth} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileWithAuth} />
          </Switch>
        </Box>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
