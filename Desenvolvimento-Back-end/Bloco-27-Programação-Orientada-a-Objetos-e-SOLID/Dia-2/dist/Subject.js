"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(n) {
        this._name = String();
        this.name = n;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    validateName(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
    }
}
exports.default = Subject;
