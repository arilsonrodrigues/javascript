function info(){
   txti = document.getElementById('txti')
   txtf = document.getElementById('txtf')
   txts = document.getElementById('txts')
   res = document.getElementById('res')
   if(txti.value == 0 || txtf.value == 0 || txts.value == 0){
    alert('[ERRO] digite novamnete')
   }else{
    res.innerHTML = `<p>Contagem:</p>`
    i = Number(txti.value)
    f = Number(txtf.value)
    s = Number(txts.value)
    if(i<f){
        for(c = i; i<=f; i+=s){
            res.innerHTML += `\ ${i}`
        }
    }else{
        for(c = i; i>=f; i-=s){
            res.innerHTML += `\ ${i}`
        }
    }
   }
}