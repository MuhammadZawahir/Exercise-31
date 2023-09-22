"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise_30_1 = require("../Exercise 30");
if (Exercise_30_1.userNames.length <= 0) {
    console.log("\nWe need more users.");
}
else {
    console.log('\nWe have anough users.');
}
Exercise_30_1.userNames.splice(0, 5);
if (Exercise_30_1.userNames.length <= 0) {
    console.log("\nWe need more users.");
}
else {
    console.log('\nWe have anough users.');
}
