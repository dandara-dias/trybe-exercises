"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(value, base, convertion) {
    const from = units.indexOf(base);
    const to = units.indexOf(convertion);
    const exp = (to - from);
    return value * Math.pow(10, exp);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const from = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a unidade base: ');
    const to = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a conversão: ');
    const base = units[from];
    const convertion = units[to];
    const result = convert(value, base, convertion);
    console.log(`${value}${units[from]} é igual a ${result}${units[to]}`);
}
exec();
