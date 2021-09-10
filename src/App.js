import React from "react";
import {HomeWithAuth} from './Home'
import {Map} from './Map'
import {ProfileWithAuth} from './Profile'
import { connect } from "react-redux";
import "./App.css";

const PAGES = {
  home: (props) => <HomeWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>
}
class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    this.setState({ currentPage: this.props.isLoggedIn ? page : 'home' });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => this.navigateTo("home")}>Home</button>
                <button onClick={() => this.navigateTo("profile")}>Profile</button>
                <button onClick={() => this.navigateTo("map")}>Map</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    );
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn}),
)(App);
