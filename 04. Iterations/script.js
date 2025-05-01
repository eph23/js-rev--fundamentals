"use strict";

// The for loop
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight rep - ${rep}`);
}

// Looping arrays, breaking and continuing
const ephArr = [
    "Ephraim",
    "Sangma",
    2037 - 1988,
    "WebDev",
    ["Michael", "Steven", "Bob"],
    true,
];

const types = [];

for (let i = 0; i < ephArr.length; i++) {
    console.log(ephArr[i]);

    //     types.push(typeof ephArr[i]);
    if (typeof ephArr[i] === "string") {
        types.push(typeof ephArr[i]);
    }
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log("Ages", ages);

// Continue
console.log("===continue===");
for (let i = 0; i < ephArr.length; i++) {
    if (typeof ephArr[i] !== "string") {
        continue;
    } else {
        console.log(ephArr[i]);
    }
}

// Breaking
console.log("===breaking===");
for (let i = 0; i < ephArr.length; i++) {
    if (typeof ephArr[i] === "number") {
        break;
    } else {
        console.log(ephArr[i]);
    }
}

// Looping backwards
console.log("===Looping backwards===");
for (let i = ephArr.length - 1; i >= 0; i--) {
    console.log(i, ephArr[i]);
}

// Loop in loop
console.log("===Loops in loop===");
const exercises = ["Weight lifting", "Plank", "Jumping rabbit"];
for (let exercise = 0; exercise < exercises.length; exercise++) {
    console.log(`--- Starting exercise ${exercises[exercise]}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`${exercises[exercise]} rep ${rep}`);
    }
}

// The while loop
console.log("===The while loop===");
let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights rep ${rep}`);
    rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`😲😲😲 You rolled a ${dice}....!`);
    }
}
