"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let no1 = prompt("Enter ur 1st no here:");
let no2 = prompt("Enter ur 2nd no here:");
let operation = prompt("'for operation: +,-,*,/'");
if (operation === '+') {
    console.log("addition:", no1 + no2);
}
else if (operation === '-') {
    console.log("substraction:", no1 - no2);
}
else if (operation === '*') {
    console.log("multiplication:", no1 + no2);
}
else if (operation === '/') {
    console.log("division:", no1 / no2);
    if (no2 == 0) {
        console.log("syntax error");
    }
}
else {
    console.log("error");
}
;
