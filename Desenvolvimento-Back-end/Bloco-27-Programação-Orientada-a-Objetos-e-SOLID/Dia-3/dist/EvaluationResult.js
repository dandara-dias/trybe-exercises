"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EvaluationResult {
    constructor(evaluation, score) {
        this._score = Number();
        this._evaluation = evaluation;
        this.score = score;
    }
    get evaluation() {
        return this._evaluation;
    }
    set evaluation(value) {
        this._evaluation = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0)
            throw new Error('A pontuação deve ser positiva.');
        if (value > this.evaluation.score) {
            throw new Error(`A pontuação máxima é ${this.evaluation.score} pontos.`);
        }
        this._score = value;
    }
}
exports.default = EvaluationResult;
