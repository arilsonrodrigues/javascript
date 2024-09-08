function info(){
    num = document.getElementById('txtn')
    tab = document.getElementById('seltab')
    if (txtn.value == 0){
        alert('[ERRO] digite novamente')
    }else{
        n = Number(num.value)
        for(c=1;c<=10;c++){
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        item.innerHTML = 'Atualize a página!'
    }
}