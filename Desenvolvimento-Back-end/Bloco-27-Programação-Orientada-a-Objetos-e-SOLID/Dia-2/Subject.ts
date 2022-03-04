export default class Subject {
  private _name: string = String();

  constructor(n: string) {
    this.name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);

    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }
}