//let getData = () => {
    //return new Promise((resolve, reject) => {
        //resolve('Dados aqui')
        //reject('Erro aqui')
    //})
//}

//getData()
    //.then(value => console.log(value))
    //.catch(error => console.log(error))

//criação de promisses
let promise = new Promise((resolve, reject) => {
    nome = "Arilson"

    if(nome === "Arilson"){
        resolve('Usúario encontrado')
    }else{
        reject('Usúario não encontrado')
    }
})

promise.then((data) => {
    console.log(data)
})

//Encadeamento de Then's
let promise2 = new Promise((resolve, reject) => {
    nome = "Arilson"

    if(nome === "Arilson"){
        resolve('Usúario encontrado')
    }else{
        reject('Usúario não encontrado')
    }
})

promise2.then((data) => {
    return data.toLowerCase()
})
.then((stringmodificado) =>{
    console.log(stringmodificado)
})

//