interface ICalculator {
    plus(number1: number, number2: number): number;
    minus(number1: number, number2: number): number;
    times(number1: number, number2: number): number;
    divide(number1: number, number2: number): number;
}

function sum(number1: number, number2: number): number {
    return number1 + number2;
}

const minus = (number1: number, number2: number): number => number1 - number2;

const calculator = {
    plus: sum,
    minus,
    times: function (number1: number, number2: number): number { return number1 * number2; },
    divide: (number1: number, number2: number): number => number1 / number2,
}