"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var t;
console.log(typeof t);
t = 'hello';
console.log(typeof t);
t = '42';
console.log(typeof t);
var doIt2 = function () {
    console.log('did it');
};
var nums2 = [1, 2, 3, 4, 5];
var newNums2 = __spreadArray(__spreadArray([], nums2, true), [6], false);
