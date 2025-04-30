"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "Sangma",
    birthYear: 1988,
    job: "WebDev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    //     Object method
    calcAge: function () {
        //    return 2037 - this.birthYear;
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    //     Challenge
    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${
            this.job
        }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    },
};

console.log(eph);

// Accessing object property
console.log(eph.lastName);
console.log(eph["firstName"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);

/* const interestedIn = prompt(
    "What do you want to know about Ephraim? Choose between firstName, lastName, age, job, and friends"
);
if (eph[interestedIn]) {
    console.log(eph[interestedIn]);
} else {
    console.log(
        "Wrong request. Choose between firstName, lastName, age, job, and friends"
    );
} */

// Adding new property
eph.location = "Bangladesh";
eph["twitter"] = "@ephS";

// Challenge
// "Ephraim has 3 friend and his best friend is called Steven"

console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[1]}`
);

// Calling object method
// console.log(eph.calcAge());
// console.log(eph["calcAge"]());
console.log(eph["calcAge"]());
console.log(eph.age);

// Challenge
// "Ephraim is a 49 years old WebDev, and he has a driver's license"
console.log(eph.getSummery());
