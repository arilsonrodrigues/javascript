function info() {
    data = new Date()
    ano = data.getFullYear()
    txtano = document.getElementById('txtano')
    res = document.getElementById('res')
    if (txtano.value == 0 || txtano.value > ano || txtano.value < 1910){
        alert('[ERRO] digite novamente')
    } else{
        sex = document.getElementsByName('rdxs')
        idade = ano - Number(txtano.value)
        img = document.getElementById('imagem')
        genero = ''
        if (sex[0].checked){
            genero ='Homem'
            if (idade > 0 && idade < 14){
                img.src = 'crianca-m.jpg'
            } else if(idade < 21){
                img.src = 'jovem-m.jpg'
            } else if(idade < 60){
                img.src = 'adulto-m.jpg'
            } else {
                img.src = 'idoso-m.jpg'
            }
        }else {
            genero = 'Mulher'
            if (idade > 0 && idade < 14){
                img.src = 'crianca-f.jpg'
            } else if(idade < 21){
                img.src = 'jovem-f.jpg'
            } else if(idade < 60){
                img.src = 'adulta-f.jpg'
            } else {
                img.src = 'idosa-f.jpg'
            }
        }
        res.innerHTML = `${genero} e tem ${idade} anos`
    }
}