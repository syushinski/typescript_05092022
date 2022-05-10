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
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendHistory = void 0;
var appendHistory = function (history, opName, opValue) {
    history.push({
        id: Math.max.apply(Math, __spreadArray(__spreadArray([], history.map(function (h) { return h.id; }), false), [0], false)) + 1,
        opName: opName,
        opValue: opValue,
    });
};
exports.appendHistory = appendHistory;
