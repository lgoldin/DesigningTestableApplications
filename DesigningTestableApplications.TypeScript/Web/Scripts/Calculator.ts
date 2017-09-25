/// <reference path="Interfaces/ICalculator.ts"/>

class Calculator implements ICalculator {
    Sum(x: Number, y: Number): Number {
        return +x + +y;
    }
}