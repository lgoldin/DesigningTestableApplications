/// <reference path="./typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../Web/Scripts/CalculatorService.ts" />

describe("Calculator Service Tests", () => {
    it("Do magic", () => {
        var calculator = jasmine.createSpyObj("calculator", ["Sum"]);
        calculator.Sum(10, 20).and.returnValue(30);

        var calculatorService: CalculatorService = new CalculatorService(<ICalculator>calculator);

        var result:string = calculatorService.DoMagic(10, 20);

        expect(result).toBe("El resultado de sumar 10 y 20 es 30");
        expect(calculator.Sum).toHaveBeenCalledWith(10, 20);
    });
});