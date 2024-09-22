numero = document.getElementById('num')
lista = document.getElementById('flista')
res = document.getElementById('res')
valores = []

function inumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function ilista(n, l){
    if(l.indexOf(Number(num.value))!=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(inumero(num.value) && ilista(num.value, valores)){
        alert('erro você digitou o númro novamente ou o número é inválido')
    }else{
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado`
        lista.appendChild(item)
    }
}

function finalizar(){
    if(valores.length == 0){
        alert('erro digite o número')
    }else{
        tot = valores.length
        soma=0
        media=0
        maior=valores[0]
        menor=valores[0]

        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML += ``
        res.innerHTML += `o total de valores ${tot}`
        res.innerHTML += `a soma dos valores ${soma}`
        res.innerHTML += `a media entre os valores ${media}`
        res.innerHTML += `o maior valor ${maior}`
        res.innerHTML += `o menor valor ${menor}`
    }
}