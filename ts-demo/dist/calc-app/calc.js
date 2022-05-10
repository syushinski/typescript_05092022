"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_readline_1 = __importDefault(require("node:readline"));
var ops_1 = require("./ops");
var history_1 = require("./history");
var result = 0;
var history = [];
var rl = node_readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Calc > '
});
rl.prompt();
rl.on('line', function (line) {
    var _a = line.split(' '), rawOpName = _a[0], rawOpValue = _a[1];
    var opName = rawOpName.trim();
    var opValue = parseFloat(rawOpValue);
    if (!(0, ops_1.isOperation)(opName)) {
        console.log("The request operation ".concat(opName, " is not valid."));
        rl.prompt();
        return;
    }
    switch (opName) {
        case ops_1.Operations.Add:
            (0, history_1.appendHistory)(history, opName, opValue);
            result += opValue;
            console.log(result);
            break;
        case ops_1.Operations.Subtract:
            (0, history_1.appendHistory)(history, opName, opValue);
            result -= opValue;
            console.log(result);
            break;
        case ops_1.Operations.Multiply:
            (0, history_1.appendHistory)(history, opName, opValue);
            result *= opValue;
            console.log(result);
            break;
        case ops_1.Operations.Divide:
            (0, history_1.appendHistory)(history, opName, opValue);
            result /= opValue;
            console.log(result);
            break;
        case ops_1.Operations.Clear:
            result = 0;
            history.splice(0, history.length);
            break;
        case ops_1.Operations.Exit:
            return;
        case ops_1.Operations.History:
            console.log(history);
            break;
        default:
            throw new Error("should never get here");
    }
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});
