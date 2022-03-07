import Person from "./Person";
import Enrollable from "./Enrollable";

export default class Student extends Person implements Enrollable {
  private _matricula: string = String();
  private _notasProva: number[] = [];
  private _notasTrabalho: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.matricula = this.geraMatricula();
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

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
    }

    this._notasProva = value;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos');
    }

    this._notasTrabalho = value;
  }

  notasSum(): number {
    return [...this.notasProva, ...this.notasTrabalho].reduce((previousGrade, grade) =>
      grade + previousGrade, 0);
  }

  notasAverage(): number {
    const sumGrades = this.notasSum();
    const divider = this.notasProva.length + this.notasTrabalho.length;

    return Math.round(sumGrades / divider);
  }

  geraMatricula(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}