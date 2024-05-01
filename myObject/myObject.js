"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
var user = { name: "Arief", email: "abc@gmail.com", isActive: true };
// I havent set the type for email even though it is working with out error
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser(user);
// syntex for object 
function createCourse() {
    return { name: "reactjs", price: 1999 };
}
createCourse();
function userDetails(userId) {
    return { name: "Arief", email: "Arief", isActive: true, price: 199 };
}
userDetails({ name: "Arief", email: "Arief", isActive: true, price: 199 });
