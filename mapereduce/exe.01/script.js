let produtos = [
{    
    nome: "notebook",
    preco: 2100, 
},
{
    nome: "smartphone",
    preco: 400
},
{
    nome: "carregador",
    preco: 100
}
]
//transforma dólar em real e soma os valores//
let total = produtos.map(p => p.preco * 5,50).reduce((a, b) => a + b ,0)
console.log(total)
