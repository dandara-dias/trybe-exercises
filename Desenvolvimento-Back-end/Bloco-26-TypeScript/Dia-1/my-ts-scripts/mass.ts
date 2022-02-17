const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert(value: number, base: string, convertion: string): number {
  const from = units.indexOf(base);
  const to = units.indexOf(convertion);
  const exp = (to - from);

  return value * Math.pow(10, exp);
}