const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, "utf-8");

const patternNomes = /^([A-Za-zÀ-ÿ]+)(:?(\s[A-Za-zÀ-ÿ]+))+/gm;
// w -> Retorna tudo menos acentoadas
// ^ -> Âncora de inicio de linha
// ?: -> Não capturar o próximo grupo
// A-Z -> Maiusculas, a-z -> Minúsculas, Á-ÿ -> Acentuadas
// [^A-Z] -> Negação de maiúsculas 
const matchNomes = banco.match(patternNomes);
console.log(matchNomes);