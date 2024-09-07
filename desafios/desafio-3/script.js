function info(){
     ini = document.getElementById('txti')
     fim = document.getElementById('txtf')
     pas = document.getElementById('txtp')
     res = document.getElementById('res')
    if (ini.value == 0 || fim.value == 0 || pas.value == 0){
        alert('[ERRO] preencha os dados')
    }else{
        res.innerHTML = `Contagem:`
          ini = Number(txti.value)
          fim = Number(txtf.value)
          pas = Number(txtp.value)
          if(ini < fim){
            for(c=ini; c<=fim; c+=pas){
            res.innerHTML += `\ ${c}`
          }
        }else{
            for(c=ini; c>=fim; c-=pas){
                res.innerHTML += `\ ${c}`
            }
        }
    }
}