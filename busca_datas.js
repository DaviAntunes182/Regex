const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, "utf-8");

const patternData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm;
const patternAno = /\d{4}$/gm;

// $ Indica que estamos procurando ao final da linha
// [.- /*...] -> Os caracteres especias que estiverem dentro dos parênteses serão acrescentados
// ? o pattern anterior é considerado opcional, pode ou não existir 
const matchData = banco.match(patternData);
console.log(matchData);
const matchAno = banco.match(patternAno);
console.log(matchAno);