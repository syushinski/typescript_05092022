"use strict";
// const person = {
//   firstName: 'Bob',
//   lastName: 'Smith',
// };
// const person2 = {
//   firstName: 'Sally',
//   lastName: 'Smith',
// };
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var person = {
    firstName: 'Bob',
    lastName: 'Smith',
};
console.log(person.firstName);
// const person2 = new Person('Sally', 'Smith');
