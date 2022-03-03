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
        const date = `${y}-${m}-${d}`;
        if (!this.validateDate(d, m, y)) {
            d = 1;
            m = 1;
            y = 1900;
        }
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
    validateDate(d, m, y) {
        const date = `${y}-${m}-${d}`;
        if (new Date(date).getDate() !== d)
            return false;
        return true;
    }
    getMonthName() {
        const months = [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ];
        return months[this.month - 1];
    }
    isLeapYear() {
        return this._year % 4 === 0;
    }
    compare(date) {
        const currentDate = `${this.year}-${this.month}-${this.day}`;
        const otherDate = `${date.year}-${date.month}-${date.day}`;
        if (new Date(currentDate) > new Date(otherDate))
            return 1;
        if (new Date(currentDate) < new Date(otherDate))
            return -1;
        return 0;
    }
    format(formatting) {
        const conditions = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
            (!formatting.match(/d{2}/g)) // verifica se tem o dia na formatação
        ];
        if (conditions.every(cond => cond)) {
            throw new Error(`O formato passado é inválido: ${formatting}`);
        }
        const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
        const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
        const year = this.year.toString();
        const dateFormatting = formatting
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substr(-2));
        return dateFormatting;
    }
}
const date1 = new Data(3, 3, 2022);
console.log(date1);
console.log('Dia: ', date1.day);
console.log('Mês: ', date1.month);
console.log('Mês por extenso: ', date1.getMonthName());
console.log('Ano: ', date1.year);
console.log('É bissexto? ', date1.isLeapYear() ? 'Sim' : 'Não');
console.log(date1.format('dd/mm/aaaa'));
console.log(date1.format('dd-mm-aaaa'));
console.log(date1.format('aaaa/mm/dd'));
console.log(date1.format('aaaa-mm-dd'));
console.log(date1.format('dd de M de aa'));
console.log(date1.format('dd, M de aaaa'));
const otherDate = new Data(19, 3, 2002);
const comparing = date1.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[comparing + 1]} a segunda.`);
const invalidDate = new Data(31, 2, 2021);
console.log('Teste data inválida: ', invalidDate);
console.log('Teste formato inválido: ', invalidDate.format('a m d'));
