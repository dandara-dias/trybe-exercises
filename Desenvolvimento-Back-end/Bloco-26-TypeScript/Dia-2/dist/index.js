"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const readline_sync_1 = __importDefault(require("readline-sync"));
const monthsNames = Object.values(months_1.default).map(item => item);
const chooseMonths = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano');
const month = Object.values(months_1.default)[chooseMonths];
const seasonsNorth = {
    [seasons_1.default.spring]: [months_1.default.march, months_1.default.april, months_1.default.may, months_1.default.june],
    [seasons_1.default.summer]: [months_1.default.june, months_1.default.july, months_1.default.august, months_1.default.september],
    [seasons_1.default.fall]: [months_1.default.september, months_1.default.october, months_1.default.november, months_1.default.december],
    [seasons_1.default.winter]: [months_1.default.december, months_1.default.january, months_1.default.february, months_1.default.march],
};
const seasonsSouth = {
    [seasons_1.default.spring]: seasonsNorth[seasons_1.default.fall],
    [seasons_1.default.summer]: seasonsNorth[seasons_1.default.winter],
    [seasons_1.default.fall]: seasonsNorth[seasons_1.default.spring],
    [seasons_1.default.winter]: seasonsNorth[seasons_1.default.summer],
};
const hemispheres = {
    'North': seasonsNorth,
    'South': seasonsSouth,
};
const chooseHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério');
const hemisphere = Object.keys(hemispheres)[chooseHemisphere];
console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log('Estações: ');
const chosenHemisphereSeasons = Object.values(hemispheres)[chooseHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const season = entry[0];
    const Month = entry[1];
    if (Month.includes(month))
        console.log(season);
});
const Car_1 = __importDefault(require("./Car"));
const Colors_1 = __importDefault(require("./Colors"));
const Doors_1 = __importDefault(require("./Doors"));
const Directions_1 = __importDefault(require("./Directions"));
const gol = new Car_1.default('Volkswagen', Colors_1.default.silver, 4);
gol.openTheDoor(Doors_1.default.driver); // Ele então entra em seu volkswagen gol prata de 4 portas
gol.closeTheDoor(Doors_1.default.driver);
gol.turnOn(); // liga seu carro e começa o trajeto
gol.speedUp(); // Siga em frente;
gol.speedDown(); // Em 600 metros vire a esquerda;
gol.turn(Directions_1.default.left); // Vire a esquerda;
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.right); // Em 200 metros na rotatória pegue a segunda saída a direita;
gol.speedUp(); // Mantenha em frente pelos próximos 1,2 quilômetros;
gol.speedDown(); // Em 300 metros vire a direita;
gol.turn(Directions_1.default.right); // Vire a direita;
gol.speedDown(); // Em 400 metros você chegará ao seu destino;
gol.stop(); // Você chegou ao seu destino.
gol.openTheDoor(Doors_1.default.behind_ride); // a pessoa passageira entra pela porta de trás do lado do carona
gol.closeTheDoor(Doors_1.default.behind_ride);
gol.speedUp(); // Siga em frente;
gol.speedDown(); // Em 300 metros vire a direita;
gol.turn(Directions_1.default.right); // Vire a direita;
gol.speedUp(); // Mantenha em frente pelos próximos 2 quilômetros;
gol.speedDown(); // Em 200 metros vire a esquerda;
gol.turn(Directions_1.default.left); // Vire a esquerda;
gol.speedUp();
gol.speedDown(); // Em 400 metros vire a direita;
gol.turn(Directions_1.default.right); // Vire a direita;
gol.speedDown(); // Em 100 metros você chegará ao destino.
gol.stop(); // Você chegou ao destino.
gol.openTheDoor(Doors_1.default.behind_ride); // A pessoa passageira desce do veículo
gol.closeTheDoor(Doors_1.default.behind_ride);
gol.speedUp(); //  a pessoa motorista segue para a próxima corrida.
const calabresa = {
    flavor: 'Calabresa',
    slices: 8,
};
console.log(calabresa);
const marguerita = {
    flavor: 'Marguerita',
    slices: 6,
};
console.log(marguerita);
const nutella = {
    flavor: 'Nutella',
    slices: 4,
};
console.log(nutella);
const Calabresa = {
    flavor: 'Calabresa',
    slices: 4,
};
console.log(Calabresa);
const frango = {
    flavor: 'Frango',
    slices: 6,
};
console.log(frango);
const pepperoni = {
    flavor: 'Pepperoni',
    slices: 8,
};
console.log(pepperoni);
const palmito = {
    flavor: 'Palmito',
    slices: 4,
};
console.log(palmito);
const cogumelo = {
    flavor: 'Cogumelo',
    slices: 6,
};
console.log(cogumelo);
const marshmallow = {
    flavor: 'Marshmallow',
    slices: 4,
};
console.log(marshmallow);
