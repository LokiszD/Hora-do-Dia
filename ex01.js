var horario = new Date();
var hora = horario.getHours()
var min = horario.getMinutes()
var fotoHora = window.document.querySelector('#imghora')
var bg = window.document.querySelector('.contentVerifica')

var res = window.document.getElementById('hora')

res.innerHTML = `Agora são exatamente ${hora} horas e ${min} minutos`

if(hora >= 6 && hora < 12){ //dia
    fotoHora.innerHTML = `<img src="img/dia.png" alt=""><br>Bom dia<p></p>`
    document.body.style.background = 'rgb(193, 214, 0)'
    bg.style.background = 'rgb(244, 248, 186)'
}else if(hora >= 12 && hora < 18){ //tarde
    fotoHora.innerHTML = `<img src="img/tarde.png" alt=""><br>Boa tarde<p></p>`
    document.body.style.background = 'rgb(192, 77, 0)'
    bg.style.background = 'rgb(252, 164, 0)'
}else{ //noite
    fotoHora.innerHTML = `<img src="img/noite.png" alt=""><br>Boa noite<p></p>`
    document.body.style.background = 'rgb(72, 21, 192)'
    bg.style.background = 'rgb(108, 230, 252)'
}
