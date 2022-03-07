"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._matricula = String();
        this._notasProva = [];
        this._notasTrabalho = [];
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
    get notasProva() {
        return this._notasProva;
    }
    set notasProva(value) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
        }
        this._notasProva = value;
    }
    get notasTrabalho() {
        return this._notasTrabalho;
    }
    set notasTrabalho(value) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos');
        }
        this._notasTrabalho = value;
    }
    notasSum() {
        return [...this.notasProva, ...this.notasTrabalho].reduce((previousGrade, grade) => grade + previousGrade, 0);
    }
    notasAverage() {
        const sumGrades = this.notasSum();
        const divider = this.notasProva.length + this.notasTrabalho.length;
        return Math.round(sumGrades / divider);
    }
    geraMatricula() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
}
exports.default = Student;
