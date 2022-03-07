"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const EvaluationResult_1 = __importDefault(require("./EvaluationResult"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._matricula = String();
        this.matricula = this.geraMatricula();
        this._evaluationResults = [];
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
    get evaluationResults() {
        return this._evaluationResults;
    }
    notasSum() {
        return [...EvaluationResult_1.default.arguments].reduce((previousGrade, grade) => grade + previousGrade, 0);
    }
    notasAverage() {
        const sumGrades = this.notasSum();
        const divider = this._evaluationResults.length;
        return Math.round(sumGrades / divider);
    }
    geraMatricula() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
    addEvaluationResult(value) {
        this._evaluationResults.push(value);
    }
}
exports.default = Student;
