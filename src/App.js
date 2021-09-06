import "./App.css";
import React from "react";

const PAGES = {
  home: <Home/>,
  about: <About/>,
  profile: <Profile/>
}
class App extends React.Component() {
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
                <button onClick={() => this.navigateTo("about")}>About</button>
                <button onClick={() => this.navigateTo("profile")}>Profile</button>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default App;
