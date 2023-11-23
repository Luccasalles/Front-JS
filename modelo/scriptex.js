function carregar (){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
    img.src = 'manha.png'
    document.body.style.backgroundColor = '#fbc569'
    } else if (hora >= 12 && hora <= 17) {
    document.body.style.backgroundColor ='#dd700f'
        // BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.backgroundColor ='#ffb021'
    } else {
        // BOA NOITE!
    img.src = 'noitee.png'
    document.body.style.backgroundColor ='#151c27'
    }
}