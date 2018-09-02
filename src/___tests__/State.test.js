import App from '../App';

const State = require('../State');

describe("tests for the State", () => {
    it("getInitialState gets called", () => {
        const spy = jest.spyOn(State, 'getInitialState');
        const app = new App();
        expect(app).toBeDefined();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
