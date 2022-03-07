import Enrollable from "./Enrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrollable {
  private _matricula: string = String();
  private _salary: number = Number();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);

    this.salary = salary;
    this._admissionDate = new Date();
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

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo.');
    }
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }

    this._admissionDate = value;
  }

  geraMatricula(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/W/g, '');

    return `FUNC${randomStr}`;
  }
}