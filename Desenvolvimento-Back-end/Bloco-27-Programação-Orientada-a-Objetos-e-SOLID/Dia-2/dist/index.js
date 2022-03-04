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
// import Student from "./Student";
// const student1 = new Student('Estudante Um', new Date('2005/03/17'));
// const student2 = new Student('Estudante Dois', new Date('2006/07/19'));
// const student3 = new Student('Estudante Três', new Date('2004/06/06'));
// const student4 = new Student('Estudante Quatro', new Date('2005/11/05'));
// const student5 = new Student('Estudante Cinco', new Date('2006/09/11'));
// student1.notasProva = [25, 20, 25, 23];
// student2.notasProva = [25, 20, 25, 23];
// student3.notasTrabalho = [50, 45];
// student4.notasTrabalho = [47, 42];
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
// console.log(student5);
// import Employee from "./Employee";
// const testInterfaceEmployee: Employee = {
//   registration: 'FNC1234567891011',
//   salary: 1200.00,
//   admissionDate: new Date(),
//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
//     return `FNC${randomStr}`;
//   }
// }
// console.log(testInterfaceEmployee);
// console.log(testInterfaceEmployee.generateRegistration());
const Subject_1 = __importDefault(require("./Subject"));
const subject1 = new Subject_1.default('Matemática');
const subject2 = new Subject_1.default('História');
const subject3 = new Subject_1.default('Filosofia');
console.log(subject1);
console.log(subject2);
console.log(subject3);
