let produtos = [
    {id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1},
    {id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3},
    {id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5},
    {id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2},
];

//let totalemreais = produtos.map((p) => p.preco.toFixed(0) * 5.50).reduce((acc, p) => acc + p ,0)
//console.log(totalemreais)

//let totalemdesconto = produtos.filter((p) => p.temDesconto).reduce((acc, p) => acc + p.preco * 0.3 - p.preco ,0)
//console.log(totalemdesconto)

let FaturamentoPromocao = produtos.map((p) => {
    return {...p, quantidade: p.quantidade + 10}
}).filter((p) => p.temDesconto).reduce((acc, p) => acc + p.preco * p.quantidade ,0)
console.log(FaturamentoPromocao.toLocaleString ('pt-br', {style: 'currency', currency: 'BRL'}))