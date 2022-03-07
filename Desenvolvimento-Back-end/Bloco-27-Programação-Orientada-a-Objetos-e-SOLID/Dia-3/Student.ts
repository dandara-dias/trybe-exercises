import Person from "./Person";
import Enrollable from "./Enrollable";
import EvaluationResult from "./EvaluationResult";

export default class Student extends Person implements Enrollable {
  private _matricula: string = String();
  private _evaluationResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.matricula = this.geraMatricula();
    this._evaluationResults = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._matricula = value;
  }

  get evaluationResults(): EvaluationResult[] {
    return this._evaluationResults;
  }

  notasSum(): number {
    return [...EvaluationResult.arguments].reduce((previousGrade, grade) =>
      grade + previousGrade, 0);
  }

  notasAverage(): number {
    const sumGrades = this.notasSum();
    const divider = this._evaluationResults.length;

    return Math.round(sumGrades / divider);
  }

  geraMatricula(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationResults.push(value);
  }
}