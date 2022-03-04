"use strict";
// import Person from "./Person";
Object.defineProperty(exports, "__esModule", { value: true });
const testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FNC${randomStr}`;
    }
};
console.log(testInterfaceEmployee);
// console.log(testInterfaceEmployee.generateRegistration());
