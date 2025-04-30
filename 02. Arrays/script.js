"use strict";

const friends = ["Michael", "Steven", "Bob"];

// Access array value
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutating array values
friends[2] = "Antu";
console.log(friends);

// JS expects expression
const firstName = "Ephraim";
const eph = [firstName, "Sangma", 2037 - 1988, "WebDev", friends];
console.log(eph);
console.log(eph.length);

// Exercise
const years = [1990, 1967, 2002, 2010, 2018];

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];

console.log(ages);

// Basic array operations
friends.push("Jay");
console.log(friends);

friends.unshift("Sara");
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Jay"));

if (friends.includes(friends[1])) {
    console.log(`You have a friend called ${friends[1]}`);
}
