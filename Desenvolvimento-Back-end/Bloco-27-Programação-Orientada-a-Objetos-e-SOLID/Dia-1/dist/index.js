"use strict";
// class Student {
//   private _matricula: string;
//   private _nome!: string;
//   private _notasProva: number[];
//   private _notasTrabalho: number[];
//   constructor(m: string, n: string) {
//     this._matricula = m;
//     this.nome = n;
//     this._notasProva = [];
//     this._notasTrabalho = [];
//   }
//   get matricula(): string {
//     return this._matricula;
//   }
//   set matricula(value: string) {
//     this._matricula = value;
//   }
//   get nome(): string {
//     return this._nome;
//   }
//   set nome(value: string) {
//     this._nome = value;
//   }
//   get notasProva(): number[] {
//     return this._notasProva;
//   }
//   set notasProva(value: number[]) {
//     if (value.length > 4) {
//       throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
//     }
//     this._notasProva = value;
//   }
//   get notasTrabalho(): number[] {
//     return this._notasTrabalho;
//   }
//   set notasTrabalho(value: number[]) {
//     if (value.length > 2) {
//       throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos');
//     }
//     this._notasTrabalho = value;
//   }
//   notasSum(): number {
//     return [...this.notasProva, ...this.notasTrabalho].reduce((previousGrade, grade) => {
//       grade += previousGrade;
//       return grade;
//     }, 0);
//   }
//   notasAverage(): number {
//     const sumGrades = this.notasSum();
//     const divider = this.notasProva.length + this.notasTrabalho.length;
//     return Math.round(sumGrades / divider);
//   }
// }
// const student1 = new Student('202201', 'Maria da Silva');
// const student2 = new Student('202202', 'João da Silva');
// console.log(student2);
// student1.notasProva = [25, 20, 23, 23];
// student1.notasTrabalho = [45, 45];
// console.log(student1);
// console.log('Soma de todas as notas: ', student1.notasSum());
// console.log('Média de todas as notas: ', student1.notasAverage());
class Client {
    constructor(n) {
        this.name = n;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class OrderItem {
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
class Order {
    constructor(c, i, p, d) {
        this._items = [];
        this._discount = 0;
        this._client = c;
        this.items = i;
        this._paymentMethod = p;
        this.discount = d;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(value) {
        this._paymentMethod = value;
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
        this._discount = value;
    }
}
const client1 = new Client('João');
const item1 = new OrderItem('Sanduíche Natural', 5.00);
const item2 = new OrderItem('Suco de Abacaxi', 5.00);
const item3 = new OrderItem('Gelatina de Uva', 2.50);
const order1 = new Order(client1, [item1, item2, item3], 'dinheiro', 0.10);
console.log(order1);
