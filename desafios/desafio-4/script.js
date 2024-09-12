function info(){
    txtn = document.getElementById('txtn')
    tab = document.getElementById('seltab')
    if(txtn.value == 0){
        alert('[ERR0] digite novamente')
    }else{
        n = Number(txtn.value)
        for(c=1; c<=10; c++){
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}