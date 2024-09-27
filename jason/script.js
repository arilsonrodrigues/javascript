let produtos = [
    {id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1},
    {id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3},
    {id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5},
    {id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2},
];

let json = JSON.stringify(produtos)
console.log(json)
console.log(typeof json)

let obj = JSON.parse(json)
console.log(obj)
console.log(typeof obj)