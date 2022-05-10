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
var j; // implicity any
console.log(typeof j);
j = 'hello';
console.log(typeof j);
j = 42;
console.log(typeof j);
var doIt1 = function (msg) {
    console.log(msg);
};
var nums = [1, 2, 3, 4, 5];
var newNums = __spreadArray(__spreadArray([], nums, true), [6], false);
