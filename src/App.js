import React from "react";
import {Home} from './Home'
import {Map} from './Map'
import {Profile} from './Profile'
import "./App.css";

const PAGES = {
  home: <Home/>,
  map: <Map/>,
  profile: <Profile/>
}
class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
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
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
