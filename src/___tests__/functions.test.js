const functions = require('../functions');

describe("Add Numbers", () => {
    it("should add 2 numbers correctly", () => {
        expect(functions.add(2, 2)).toEqual(4);
        expect(functions.add(2, -2)).toEqual(0);
        expect(functions.add(-2, -2)).toEqual(-4);
    });

    it("should not add strings", () => {
        expect(functions.add("2", 2)).toBe(null);
    });

    it("should not add objects", () => {
        expect(functions.add({}, {})).toBe(null);
    });

    // async calls - example 1 (promises)
    it("fetched user should be Ervin Howell - promises", () => {
        expect.assertions(1);
        return functions.getUserName().then(data => {
            expect(data).toEqual("Ervin Howell");
        });
    });

    // async calls - example 2 (resolves in promises)
    it('Works with resolves', () => {
        expect.assertions(1);
        return expect(functions.getUserName()).resolves.toEqual("Ervin Howell");
    });

    // async calls - async/await
    it("using async/await", async () => {
        expect.assertions(1);
        const data = await functions.getUserName();
        expect(data).toEqual("Ervin Howell");
    });
});