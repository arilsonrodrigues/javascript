numero = document.getElementById('num')
lista = document.getElementById('flist')
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
    if(l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(inumero(num.value) && !ilista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        alert('erro valor já encontrado ou inválido')
    }
}
num.value=""
num.focus()

function finalizar(){
    if(valores.length == 0){
        alert('erro adicione o número')
    }else{
        tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML += ``
        res.innerHTML += `<p>Total de números ${tot}</p>`
        res.innerHTML += `<p>Maior ${maior}</p>`
        res.innerHTML += `<p>Menor ${menor}</p>`
        res.innerHTML += `<p>A soma total ${soma}</p>`
        res.innerHTML += `<p>A media ${media}</p>`
    }
}