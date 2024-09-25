let produtos = [
{
    produto: "Arroz",
    preco: 5
},
{
    produto: "Feijão",
    preco: 4
},
{
    produto: "Macarrão",
    preco: 6
},
{
    produto: "Carne",
    preco: 10
}    
]

let total = produtos.map(p => p.preco * 5,50).reduce((a, b) => a + b ,0)
console.log(total)