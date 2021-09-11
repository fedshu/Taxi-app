import { authenticateSaga } from "./authSaga";
import { authenticate } from "./actions";
import { recordSaga } from "./recordSaga";

jest.mock("./api", () => ({ serverLogin: jest.fn(() => true) }));

describe("authSaga", () => {
  describe("authenticate", () => {
    it("authenticates through api", async () => {
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate("testlogin", "testpassword")
      );
      console.log("dispatchedawd222", dispatched);
      expect(dispatched).toEqual([
        {
          type: "LOG_IN",
        },
      ]);
    });
  });
});
