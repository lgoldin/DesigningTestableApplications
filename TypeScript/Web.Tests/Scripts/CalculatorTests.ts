/// <reference path="./typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../Web/Scripts/Calculator.ts" />

describe("Calculator Tests", () => {
    it("Sum must be  30", () => {
        var calculator: Calculator = new Calculator();

        var result: Number = calculator.Sum(10, 20);

        expect(result).toBe(30);
    });

    it("Sum must be  5", () => {
        var calculator: Calculator = new Calculator();

        var result: Number = calculator.Sum(3, 2);

        expect(result).toBe(5);
    });
});