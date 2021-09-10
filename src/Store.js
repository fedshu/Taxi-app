import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { AuthMiddleware } from "./AuthMiddleware";

export const store = createStore(rootReducer, applyMiddleware(AuthMiddleware));
