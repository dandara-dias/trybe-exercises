"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n, b) {
        this._name = String();
        this._birthDate = new Date();
        this.name = n;
        this.birthDate = b;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }
    validateName(value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    static getAge(value) {
        const diff = Math.abs(+new Date().getTime - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }
    validateBirthDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        }
        if (Person.getAge(value) > 120) {
            throw new Error('A pessoa deve ter no máximo 120 anos.');
        }
    }
}
exports.default = Person;
