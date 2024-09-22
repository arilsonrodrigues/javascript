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
    if(inumero(num.value) && !ilista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `o valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        alert('o número já foi adicionado ou o número é inválido')
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
        res.innerHTML += `<p>o total de valores ${tot}</p>`
        res.innerHTML += `<p>a soma entre os valores ${soma}</p>`
        res.innerHTML += `<p>a media entre os valores ${media}</p>`
        res.innerHTML += `<p>o maior valor ${maior}</p>`
        res.innerHTML += `<p>o menor valor ${menor}</p>`
    }
}