import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("./Home", () => ({ HomeWithAuth: () => <div>Home content</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./Profile", () => ({
  ProfileWithAuth: () => <div>Profile content</div>,
}));

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );

    expect(container.innerHTML).toMatch("Home content");
  });

  describe("When clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const mockStore = {
        getState: () => ({ auth: { isLoggedIn: true } }),
        subscribe: () => {},
        dispatch: () => {},
      };
  
      const history = createMemoryHistory();
  
      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
  
      fireEvent.click(getByText("Map"));
      expect(container.innerHTML).toMatch("Map");
      fireEvent.click(getByText("Profile"));
      expect(container.innerHTML).toMatch("Profile");
    });
  });
});

