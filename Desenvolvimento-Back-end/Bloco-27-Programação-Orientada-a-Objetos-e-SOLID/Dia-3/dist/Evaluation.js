"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Evaluation {
    constructor(teacher, score, type) {
        this._score = Number();
        this._type = String();
        this._teacher = teacher;
        this.type = type;
        this.score = score;
    }
    get teacher() {
        return this._teacher;
    }
    set teacher(value) {
        this._teacher = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0)
            throw new Error('A pontuação deve ser positiva.');
        if (this.type === 'prova' && value > 25) {
            throw new Error('A pontuação deve ser menor que 25 pontos.');
        }
        if (this.type === 'trabalho' && value > 50) {
            throw new Error('A pontuação deve ser menor que 50 pontos.');
        }
        this._score = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        if (!['prova', 'trabalho'].includes(value)) {
            throw new Error('O tipo de avaliação não é válido.');
        }
        this._type = value;
    }
}
exports.default = Evaluation;
