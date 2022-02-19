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


import Car from "./Car";
import Colors from "./Colors";
import Doors from "./Doors";
import Directions from "./Directions";

const gol = new Car('Volkswagen', Colors.silver, 4);

gol.openTheDoor(Doors.driver); // Ele então entra em seu volkswagen gol prata de 4 portas
gol.closeTheDoor(Doors.driver);
gol.turnOn(); // liga seu carro e começa o trajeto
gol.speedUp(); // Siga em frente;
gol.speedDown(); // Em 600 metros vire a esquerda;
gol.turn(Directions.left); // Vire a esquerda;
gol.speedUp();
gol.speedDown();
gol.turn(Directions.right); // Em 200 metros na rotatória pegue a segunda saída a direita;
gol.speedUp(); // Mantenha em frente pelos próximos 1,2 quilômetros;
gol.speedDown(); // Em 300 metros vire a direita;
gol.turn(Directions.right); // Vire a direita;
gol.speedDown(); // Em 400 metros você chegará ao seu destino;
gol.stop(); // Você chegou ao seu destino.
gol.openTheDoor(Doors.behind_ride); // a pessoa passageira entra pela porta de trás do lado do carona
gol.closeTheDoor(Doors.behind_ride);
gol.speedUp(); // Siga em frente;
gol.speedDown(); // Em 300 metros vire a direita;
gol.turn(Directions.right); // Vire a direita;
gol.speedUp(); // Mantenha em frente pelos próximos 2 quilômetros;
gol.speedDown(); // Em 200 metros vire a esquerda;
gol.turn(Directions.left); // Vire a esquerda;
gol.speedUp();
gol.speedDown(); // Em 400 metros vire a direita;
gol.turn(Directions.right); // Vire a direita;
gol.speedDown(); // Em 100 metros você chegará ao destino.
gol.stop(); // Você chegou ao destino.
gol.openTheDoor(Doors.behind_ride); // A pessoa passageira desce do veículo
gol.closeTheDoor(Doors.behind_ride);
gol.speedUp(); //  a pessoa motorista segue para a próxima corrida.



import Pizza from "./Pizza";

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

console.log(marguerita);

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
}

console.log(nutella);



import PizzaComum from "./PizzaComum";
import PizzaVegetariana from "./PizzaVegetariana";
import PizzaDoce from "./PizzaDoce";

const Calabresa: PizzaComum = {
  flavor: 'Calabresa',
  slices: 4,
}

console.log(Calabresa);

const frango: PizzaComum = {
  flavor: 'Frango',
  slices: 6,
}

console.log(frango);

const pepperoni: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 8,
}

console.log(pepperoni);

const palmito: PizzaVegetariana = {
  flavor: 'Palmito',
  slices: 4,
}

console.log(palmito);

const cogumelo: PizzaVegetariana = {
  flavor: 'Cogumelo',
  slices: 6,
}

console.log(cogumelo);

const marshmallow: PizzaDoce = {
  flavor: 'Marshmallow',
  slices: 4,
}

console.log(marshmallow);



type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item) => {
  return item < 3;
}));

console.log(myFilter(['a', 'b', 'c'], (item) => {
  return item !== 'a';
}));