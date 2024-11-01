const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, "utf-8");

const regex = /Anna/;

const matchRegex = banco.match(regex);
//Método Strng que retorna os elementos da String que o utiliza
console.log(matchRegex);