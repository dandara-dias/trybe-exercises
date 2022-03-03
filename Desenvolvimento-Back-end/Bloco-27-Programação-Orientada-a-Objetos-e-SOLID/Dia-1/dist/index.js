"use strict";
class Student {
    constructor(m, n) {
        this._matricula = m;
        this.nome = n;
        this._notasProva = [];
        this._notasTrabalho = [];
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
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
}
const student1 = new Student('202201', 'Maria da Silva');
console.log(student1);
const student2 = new Student('202202', 'João da Silva');
console.log(student2);
