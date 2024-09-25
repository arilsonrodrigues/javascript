import modificador from "./modificador.js";

console.log(modificador);

let ingredientes = ['arroz', 'feijao', 'carne', 'pimenta'];
let resCapitalizar = modificador.capitalizar(ingredientes);
let resOrdenar = modificador.ordenar(resCapitalizar);
let resCaixaAlta = modificador.caixaAlta(ingredientes);

console.log(resCapitalizar);
console.log(resOrdenar);
console.log(resCaixaAlta);