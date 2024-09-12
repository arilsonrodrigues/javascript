function info() {
   data = new Date()
   ano = data.getFullYear()
   txtn = document.getElementById('txtn')
   res = document.getElementById('res')
   if (txtn.value == 0 || txtn.value > ano || txtn.value < 1910){
        alert('[ERRO] digite novamente')
   }else{
        sex = document.getElementsByName('radsex')
        idade = ano - Number(txtn.value)
        imagem = document.getElementById('img')
        genero = ''
        if(sex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 14){
                img.src = `crianca-m.jpg`
            }else if(idade < 21){
                img.src = `jovem-m.jpg`
            }else if(idade < 60){
                img.src = `adulto-m.jpg`
            }else{
                img.src = `idoso-m.jpg`
            }
        }else{
            genero = 'Mulher'
            if(idade > 0 && idade < 14){
                img.src = `crianca-f.jpg`
            }else if(idade < 21){
                img.src = `jovem-f.jpg`
            }else if(idade < 60){
                img.src = `adulta-f.jpg`
            }else{
                img.src = `idosa-f.jpg`
            }
        }
        res.innerHTML = `${genero} com ${idade} anos`
   }
}