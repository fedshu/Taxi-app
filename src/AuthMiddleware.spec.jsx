import { AuthMiddleware } from "./AuthMiddleware";
import { authenticate } from "./actions";
import { serverLogin } from "./api";

jest.mock("./api", () => ({ serverLogin: jest.fn(() => true) }));

describe("authMiddleware", () => {
  describe("authenticate", () => {
    it("authenticate through api", async () => {
      const dispatch = jest.fn();
      serverLogin.mockImplementation(async () => true);
      await AuthMiddleware({ dispatch })()(
        authenticate("testLogin", "testPassword")
      );

      expect(serverLogin).toBeCalledWith("testLogin", "testPassword");

      expect(dispatch).toBeCalledWith({ type: "LOG_IN" });
    });
  });
});
