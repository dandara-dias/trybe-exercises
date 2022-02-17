import readline from 'readline-sync';

const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, base: string, convertion: string): number {
  const from = units.indexOf(base);
  const to = units.indexOf(convertion);
  const exp = (to - from);

  return value * Math.pow(10, exp);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: ');
  const from = readline.keyInSelect(units, 'Escolha um número para a unidade base: ');
  const to = readline.keyInSelect(units, 'Escolha um número para a conversão: ');

  const base = units[from];
  const convertion = units[to];

  const result = convert(value, base, convertion);

  console.log(`${value}${units[from]} é igual a ${result}${units[to]}`);
}

exec();