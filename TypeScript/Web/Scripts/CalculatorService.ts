/// <reference path="Interfaces/ICalculator.ts"/>

class CalculatorService {

    constructor(private calculator: ICalculator) {

    }

    DoMagic(x: Number, y: Number): string {
        var sumResult: Number = this.calculator.Sum(x, y);

        return `El resultado de sumar ${x} y ${y} es ${sumResult}`;
    }
}