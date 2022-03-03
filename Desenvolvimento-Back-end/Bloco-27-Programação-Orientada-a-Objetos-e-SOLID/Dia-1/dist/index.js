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
// class Client {
//   private _name!: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   get name(): string {
//     return this._name;
//   }
//   set name(value: string) {
//     this._name = value;
//   }
// }
// class OrderItem {
//   private _name!: string;
//   private _price!: number;
//   constructor(n: string, p: number) {
//     this.name = n;
//     this.price = p;
//   }
//   get name(): string {
//     return this._name;
//   }
//   set name(value: string) {
//     this._name = value;
//   }
//   get price(): number {
//     return this._price;
//   }
//   set price(value: number) {
//     this._price = value;
//   }
// }
// class Order {
//   private _client: Client;
//   private _items: OrderItem[] = [];
//   private _paymentMethod: string;
//   private _discount: number = 0;
//   constructor(c: Client, i: OrderItem[], p: string, d: number) {
//     this._client = c;
//     this.items = i;
//     this._paymentMethod = p;
//     this.discount = d;
//   }
//   get client(): Client {
//     return this._client;
//   }
//   set client(value: Client) {
//     this._client = value;
//   }
//   get items(): OrderItem[] {
//     return this._items;
//   }
//   set items(value: OrderItem[]) {
//     this._items = value;
//   }
//   get paymentMethod(): string {
//     return this._paymentMethod;
//   }
//   set paymentMethod(value: string) {
//     this._paymentMethod = value;
//   }
//   get discount(): number {
//     return this._discount;
//   }
//   set discount(value: number) {
//     this._discount = value;
//   }
//   totalOrder(): number {
//     return this.items.reduce((previousPrice, item) => {
//       const total = previousPrice += item.price;
//       return total;
//     }, 0);
//   }
//   discountOrder(): number {
//     return this.totalOrder() * (1 - this.discount);
//   }
// }
// const client1 = new Client('João');
// const item1 = new OrderItem('Sanduíche Natural', 5.00);
// const item2 = new OrderItem('Suco de Abacaxi', 5.00);
// const item3 = new OrderItem('Gelatina de Uva', 2.50);
// const order1 = new Order(client1, [item1, item2, item3], 'dinheiro', 0.10);
// console.log(order1);
// console.log('Total do pedido: ', order1.totalOrder());
// console.log('Pedido com desconto: ', order1.discountOrder());
class Data {
    constructor(d, m, y) {
        this._day = d;
        this._month = m;
        this._year = y;
    }
    get day() {
        return this._day;
    }
    set day(value) {
        this._day = value;
    }
    get month() {
        return this._month;
    }
    set month(value) {
        this._month = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
}
const date1 = new Data(3, 3, 2022);
console.log(date1);
