"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const scripts = [
    { name: 'Converter comprimento', script: './length' },
    { name: 'Converter massa', script: './mass' },
    { name: 'Converter volume (L)', script: './capacity' },
    { name: 'Converter área', script: './area' },
    { name: 'Converter volume (m³)', script: './volume' },
    { name: 'Lista MMORPG', script: './mmorpg' }
];
const scriptName = scripts.map(item => item.name);
const choice = readline_sync_1.default.keyInSelect(scriptName, 'Escolha um número para executar o script: ');
require(scripts[choice].script);
