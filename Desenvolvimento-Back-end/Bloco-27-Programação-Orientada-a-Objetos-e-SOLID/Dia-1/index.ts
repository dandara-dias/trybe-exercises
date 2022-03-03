class Student {
  private _matricula: string;
  private _nome!: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(m: string, n: string) {
    this._matricula = m;
    this.nome = n;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
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
}

const student1 = new Student('202201', 'Maria da Silva');
console.log(student1);
const student2 = new Student('202202', 'João da Silva');
console.log(student2);
