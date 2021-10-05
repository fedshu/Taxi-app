import { takeEvery, call, put } from "redux-saga/effects";
import { authenticate, logIn } from "./actions";
import { serverLogin } from "./api";

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  try {
    yield call(serverLogin, email, password);
    yield put(logIn());
  } catch (error) {
    console.error(error);
  }
}

export function* authSaga() {
  yield takeEvery(authenticate.toString(), authenticateSaga);
}
