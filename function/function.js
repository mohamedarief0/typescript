"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any annotating. So please avoide 'any' type.
var hero;
function getHero() {
    return 5;
}
hero = getHero();
// removing any in the below code.
function vlaue(a) {
    return a + 5;
}
vlaue(5);
function greet(name, num) {
    console.log("Hi" + name + "is your number Id:" + num);
}
greet("Arief", 112);
// normal function
function isSignIn(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
isSignIn("Arief", "a@demo.com");
//arrow function
var isLogIn = function (name, email, isPaid) {
};
isLogIn("Arief", "email.com", true);