import Person from "./Person";
import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _registration: string = String();
  private _salary: number = Number();
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this.registration = this.generateRegistration();
    this.salary = salary;
    this._admissionDate = new Date();
    this._subject = subject;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres.');
    }

    this._registration = value;
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

  generateRegistration(): string {
      const randomStr = String(Date.now()* (Math.random() + 1)).replace(/\W/g, '');

      return `PRF${randomStr}`;
  }
}