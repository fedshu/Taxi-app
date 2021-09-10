import { logIn } from "./actions";
import { AUTHENTICATE } from "./actions";
import { serverLogin } from "./api";

export const AuthMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
