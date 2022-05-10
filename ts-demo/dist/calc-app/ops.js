"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperation = exports.Operations = void 0;
var Operations;
(function (Operations) {
    Operations["Add"] = "add";
    Operations["Subtract"] = "subtract";
    Operations["Multiply"] = "multiply";
    Operations["Divide"] = "divide";
    Operations["Clear"] = "clear";
    Operations["Exit"] = "exit";
    Operations["History"] = "history";
})(Operations = exports.Operations || (exports.Operations = {}));
var operations = [
    'add',
    'subtract',
    'multiply',
    'divide',
    'clear',
    'exit',
    'history'
];
function isOperation(op) {
    return operations.includes(op);
}
exports.isOperation = isOperation;
