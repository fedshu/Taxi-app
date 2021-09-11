import { recordSaga } from "./recordSaga";
import { authenticateSaga } from "./AuthSaga";
import { authenticate } from "./actions";

jest.api("./api", () => ({ serverLogin: jest.fn(() => true) }));

describe('authSaga', () => {
    describe('authenticate', () => {
        it('authenticates through api', async () => {
            const dispatched = await recordSaga(
                authenticateSaga,
                authenticate('testlogin', 'testpassword')
            )
            expect(dispatched).toEqual([
                {
                    type: "LOG_IN"
                }
            ])
        })
    })
})
