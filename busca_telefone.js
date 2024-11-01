const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, "utf-8");

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g;
//d -> numeros, + -> em sequêncica, g -> No arquivo todo,s -> espaço, - hífen
//{n,n} podem ser 4 ou 5 digitos

const matchTelefone = banco.match(regexTelefone);
//Método Strng que retorna os elementos da String que o utiliza
console.log(matchTelefone);

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g;
// {n} limita o número de digitos a n

const matchCelular = banco.match(patternCel);
console.log(matchCelular);