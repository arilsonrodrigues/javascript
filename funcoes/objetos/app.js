let ingredientes = ['arroz', 'feijao', 'carne', 'pimenta'];
let modificar = [];

function capitalizar(ingredientes){
    let modificar = [];

    for (pos in ingredientes){
        let letrainicial = ingredientes[pos].charAt(0).toUpperCase();
        let textocorte = ingredientes[pos].slice(1);
        let resposta = letrainicial + textocorte;
        modificar[pos] = resposta;
    }
    return modificar
}

function ordenar(ingredientes){
    return ingredientes.sort(function(a, b){
        return a.localeCompare(b);
    });
}

let resCapitalizar = (capitalizar(ingredientes));
let resOrdenar = (ordenar(ingredientes));

console.log(resCapitalizar);
console.log(resOrdenar);