import months from "./months";
import seasons from "./seasons";
import readline from 'readline-sync';

const monthsNames = Object.values(months).map(item => item);
const chooseMonths = readline.keyInSelect(monthsNames, 'Escolha um mês do ano');
const month = Object.values(months)[chooseMonths];

const seasonsNorth = {
  [seasons.spring]: [months.march, months.april, months.may, months.june],
  [seasons.summer]: [months.june, months.july, months.august, months.september],
  [seasons.fall]: [months.september, months.october, months.november, months.december],
  [seasons.winter]: [months.december, months.january, months.february, months.march],
}

const seasonsSouth = {
  [seasons.spring]: seasonsNorth[seasons.fall],
  [seasons.summer]: seasonsNorth[seasons.winter],
  [seasons.fall]: seasonsNorth[seasons.spring],
  [seasons.winter]: seasonsNorth[seasons.summer],
}

const hemispheres = {
  'North': seasonsNorth,
  'South': seasonsSouth,
}

const chooseHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério');
const hemisphere = Object.keys(hemispheres)[chooseHemisphere];

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log('Estações: ');

const chosenHemisphereSeasons = Object.values(hemispheres)[chooseHemisphere];

Object.entries(chosenHemisphereSeasons).map((entry) => {
  const season = entry[0];
  const Month = entry[1];

  if(Month.includes(month)) console.log(season);
});