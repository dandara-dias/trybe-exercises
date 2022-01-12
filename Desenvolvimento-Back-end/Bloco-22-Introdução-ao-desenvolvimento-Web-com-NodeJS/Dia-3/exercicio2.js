function sinal(num) {
  if (num > 0) {
    return 'positivo';
  } else if (num < 0) {
    return 'negativo';
  } else if (num === 0) {
      return 'neutro';
  }

  return ''
}

module.exports = sinal;