const { expect, test } = require('@jest/globals');
const calculate = require('../main');

describe("calculate function", () => {
    test("Given a user inputs first number, '+', second number, return will be the sum of first number and second number", () => {
        expect(calculate(7,"+",5)).toEqual(12);
    });

    test("Given a user inputs first number, '-', second number, return will be first number minus second number", () => {
        expect(calculate(22,"-",12)).toEqual(10);
    });

    test("Given a user inputs first number, '/', second number, return will be first number divided by second number", () => {
        expect(calculate(24,"/",8)).toEqual(3);
    });

    test("Given a user inputs first number, '*', second number, return will be the first number times the second number", () => {
        expect(calculate(10,"*",38)).toEqual(380);
    });
    
    test("Given a user inputs first number, '^2', return will be first number squared", () => {
        expect(calculate(4,"^2")).toEqual(16);
    })

    test("Given a user inputs first number, 'square root', return will square root the first number", () => {
        expect(calculate(81,"square root")).toEqual(9);
    })

    test("Given user inputs empty strings then return will be 'No number'", () => {
        expect(calculate("","","")).toEqual("No number");
    });

    test("Given user inputs nothing then return will be 'No number'", () => {
        expect(calculate()).toEqual("No number");
    });

});

// Given a user inputs first number, '+', second number, return will be the sum of first number and second number
// Given a user inputs first number, '-', second number, return will be first number minus second number
// Given a user inputs first number, '/', second number, return will be first number divided by second number
// Given a user inputs first number, '*', second number, return will be the first number times the second number
// Given a user inputs first number, '^2', return will be first number squared
// Given a user inputs first number, 'square root', return will square root the first number
// Given user inputs empty strings then return will be 'No number'
// Given user inputs nothing then return will be 'No number'
