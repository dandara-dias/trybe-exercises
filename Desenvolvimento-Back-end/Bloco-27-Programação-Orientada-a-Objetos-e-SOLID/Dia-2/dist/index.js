"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const pessoa1 = new Person_1.default('Pessoa Um', new Date('1980/01/25'));
const pessoa2 = new Person_1.default('Pessoa Dois', new Date('2005/10/02'));
console.log(pessoa1);
console.log(pessoa2);
