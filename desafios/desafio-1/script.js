function carregar () {
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 4 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#BFA26B'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#F2AF5C'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#0A2626'
    }
}    