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
    notasSum() {
        return [...this.notasProva, ...this.notasTrabalho].reduce((previousGrade, grade) => {
            grade += previousGrade;
            return grade;
        }, 0);
    }
    notasAverage() {
        const sumGrades = this.notasSum();
        const divider = this.notasProva.length + this.notasTrabalho.length;
        return Math.round(sumGrades / divider);
    }
}
const student1 = new Student('202201', 'Maria da Silva');
const student2 = new Student('202202', 'João da Silva');
console.log(student2);
student1.notasProva = [25, 20, 23, 23];
student1.notasTrabalho = [45, 45];
console.log(student1);
console.log('Soma de todas as notas: ', student1.notasSum());
console.log('Média de todas as notas: ', student1.notasAverage());
