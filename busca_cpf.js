const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, "utf-8");

const patternCPF = /\d{3,11}[.-]?\d{3,11}[.-]?\d{3,11}[.-]?\d{2}/g;
// . -> Fora dos parênteses significa que pode vir qualquer coisa
// [.-*...] -> Os caracteres especias que estiverem dentro dos parênteses serão acrescentados
// ? o pattern anterior é considerado opcional, pode ou não existir 
const matchCPF = banco.match(patternCPF);
console.log(matchCPF);