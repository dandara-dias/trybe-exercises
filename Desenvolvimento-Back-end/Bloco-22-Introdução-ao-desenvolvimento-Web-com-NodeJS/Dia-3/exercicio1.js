const { expect } = require('chai');

const funcaoSinal = require('./exercicio2');

describe('Quando o número for maior que 0', () => {
  it('A resposta é uma string', () => {
    const resposta = funcaoSinal(1);

    expect(resposta).to.be.a('string');
  });

  it('Retorna "positivo"', () => {
    const resposta = funcaoSinal(1);

    expect(resposta).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que 0', () => {
  it('A resposta é uma string', () => {
    const resposta = funcaoSinal(-1);

    expect(resposta).to.be.a('string');
  });

  it('Retorna "negativo"', () => {
    const resposta = funcaoSinal(-1);

    expect(resposta).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a 0', () => {
  it('A resposta é uma string', () => {
    const resposta = funcaoSinal(0);

    expect(resposta).to.be.a('string');
  });

  it('Retorna "neutro"', () => {
    const resposta = funcaoSinal(0);

    expect(resposta).to.be.equals('neutro');
  });
});

describe('Quando o parâmetro não for um número', () => {
  it('A resposta é uma string', () => {
    //
  });

  it('Retorna "o valor deve ser um número"', () => {
    //
  });
});