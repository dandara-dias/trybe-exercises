"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    turnOn() {
        console.log('Ligando carro');
    }
    turnOff() {
        console.log('Desligando carro');
    }
    turn(direction) {
        console.log(`Virando para a ${direction}`);
    }
    speedUp() {
        console.log('Acelerando carro');
    }
    speedDown() {
        console.log('Reduzindo a velocidade do carro');
    }
    stop() {
        console.log('Parando carro');
    }
    honk() {
        console.log('Acionando a buzina');
    }
    openTheDoor(door) {
        console.log(`Fechando a porta ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a porta ${door}`);
    }
}
exports.default = Car;
