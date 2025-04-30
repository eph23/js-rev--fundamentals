"use strict";
// Function declarations
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAgeDeclaration("Age from function declaration", 1988));

// Function expressions
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};
console.log("Age from function expression", calcAgeExpression(1988));

// Arrow functions
const calcAgeArrow = (birthYear) => 2037 - birthYear;

console.log("Age from arrow function", calcAgeArrow(1988));

// Functions calling other functions
// Helper function
const cutFruitPieces = function (fruit) {
    return fruit * 4;
};

// Helper function called inside another function
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
};

console.log(fruitProcessor(2, 5));
