import './App.css';
import React from 'react';

class App extends React.Component() {

  state = { currentPage: 'home' };

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button>

                </button>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default App;
