"use strict";
let t;
console.log(typeof t);
t = 'hello';
console.log(typeof t);
t = '42';
console.log(typeof t);
const doIt2 = () => {
    console.log('did it');
};
const nums2 = [1, 2, 3, 4, 5];
const newNums2 = [...nums2, 6];
