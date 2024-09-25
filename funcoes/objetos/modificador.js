function fnCapitalizar(vetor){
    let modificar = [];
}

function fnOrdenar(vetor){
    return vetor.sort(function(a, b){
        return a.localeCompare(b);
    });
}

function fncCaixaAlta(vetor){
    for (pos in vetor){
        modificar[pos] = vetor[pos].toUpperCase();
    }
    return modificar
}

export default{
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fncCaixaAlta,
};