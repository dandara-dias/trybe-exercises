"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const Subject_1 = __importDefault(require("./Subject"));
const Teacher_1 = __importDefault(require("./Teacher"));
const estudante1 = new Student_1.default('Estudante Um', new Date('2005/03/17'));
console.log(estudante1);
const materia1 = new Subject_1.default('Matemática');
const professor1 = new Teacher_1.default('Professor Um', new Date('1980/03/30'), 2000, materia1);
console.log(professor1);
// const pessoa1 = new Person('Pessoa Um', new Date('2002/03/19')); erro, pois não é possível criar uma instância de uma classe abstrata
