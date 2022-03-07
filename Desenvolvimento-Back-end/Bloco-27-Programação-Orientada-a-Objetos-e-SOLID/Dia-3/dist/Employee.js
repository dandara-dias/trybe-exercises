"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Employee extends Person_1.default {
    constructor(name, birthDate, salary) {
        super(name, birthDate);
        this._matricula = String();
        this._salary = Number();
        this.salary = salary;
        this._admissionDate = new Date();
        this.matricula = this.geraMatricula();
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        if (value.length < 16) {
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        }
        this._matricula = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0) {
            throw new Error('O salário não pode ser negativo.');
        }
        this._salary = value;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de admissão não pode ser uma data no futuro.');
        }
        this._admissionDate = value;
    }
    geraMatricula() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/W/g, '');
        return `FUNC${randomStr}`;
    }
}
exports.default = Employee;
