import readline from 'readline-sync';

const scripts = [
  { name: 'Converter comprimento', script: './length' },
  { name: 'Converter massa', script: './mass' },
  { name: 'Converter volume (L)', script: './capacity' },
  { name: 'Converter área', script: './area' },
  { name: 'Converter volume (m³)', script: './volume' },
  { name: 'Lista MMORPG', script: './mmorpg' }
];

const scriptName = scripts.map(item => item.name);
const choice = readline.keyInSelect(scriptName, 'Escolha um número para executar o script: ');

require(scripts[choice].script);