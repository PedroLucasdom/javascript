var agora = new Date()
var hora = agora.getHours()
var corpo = window.document.body
var p = window.document.getElementById('p')
var imagem = window.document.getElementById('imagem')

p.innerHTML = `<p> Agora são ${hora} horas. </p>`
if (hora >= 5 && hora <= 11) {
    corpo.style.background = 'khaki'
}else if (hora >= 12 && hora <= 18) {
    corpo.style.background = 'chocolate'
    imagem.innerHTML = '<img src="image/pordosol.jpg" alt="pordosol">'
}else {
    corpo.style.background = 'darkslategrey'
    imagem.innerHTML = '<img src="image/noite.jpg" alt="noite">'
}