"use strict";
// import Person from "./Person";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const pessoa1 = new Person('Pessoa Um', new Date('1980/01/25'));
// const pessoa2 = new Person('Pessoa Dois', new Date('2005/10/02'));
// console.log(pessoa1);
// console.log(pessoa2);
const Student_1 = __importDefault(require("./Student"));
const student1 = new Student_1.default('Estudante Um', new Date('2005/03/17'));
const student2 = new Student_1.default('Estudante Dois', new Date('2006/07/19'));
const student3 = new Student_1.default('Estudante Três', new Date('2004/06/06'));
const student4 = new Student_1.default('Estudante Quatro', new Date('2005/11/05'));
const student5 = new Student_1.default('Estudante Cinco', new Date('2006/09/11'));
student1.notasProva = [25, 20, 25, 23];
student2.notasProva = [25, 20, 25, 23];
student3.notasTrabalho = [50, 45];
student4.notasTrabalho = [47, 42];
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
