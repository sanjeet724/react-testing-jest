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
});