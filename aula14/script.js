function clicar() {
    var agora = new Date()             // peguei o ano atual
    var atual = agora.getFullYear()  

    var txtano = window.document.getElementById('itxt')
    var anonas = Number(txtano.value)                    //converti o ano de nascimento para número
    var idade = atual - anonas                           //calculei a idade

    var sexo = window.document.getElementsByName('sexo')

    var p = window.document.getElementById('p')

    var img = window.document.getElementById('img')

    if (anonas == 0 || anonas > atual) {
        window.alert('ERRO! Digite um ano válido')

    } else if (sexo[0].checked) {
        p.innerText = `Detectamos um Homem com ${idade} anos`
        p.style.textAlign = 'center'

        if (idade >= 1 && idade <= 12) {
            img.innerHTML = '<img src="image/criancahomem.jpg" alt="criancahomem">'
        }else if (idade >= 13 && idade <=20) {
            img.innerHTML = '<img src="image/jovemhomem.jpg" alt="jovemhomem">'
        }else if (idade >= 21 && idade <=59) {
            img.innerHTML = '<img src="image/adultohomem.jpg" alt="adultohomem">'
        }else if (idade >= 60 && idade <= 120) {
            img.innerHTML = '<img src="image/velhohomem.jpg" alt="velhohomem">'
        }

    }else if (sexo[1].checked) {
        p.innerText = `Detectamos uma Mulher com ${idade} anos`
        p.style.textAlign = 'center'

        if (idade >= 1 && idade <= 12) {
            img.innerHTML = '<img src="image/crincamulher.jpg" alt="crincamulher">'
        }else if (idade >= 13 && idade <=20) {
            img.innerHTML = '<img src="image/jovemmulher.jpg" alt="jovemmulher">'
        }else if (idade >= 21 && idade <=59) {
            img.innerHTML = '<img src="image/adultamulher.jpg" alt="adultamulher">'
        }else if (idade >= 60 && idade <= 120) {
            img.innerHTML = '<img src="image/velhamulher.jpg" alt="velhamulher">'
        }
    }
    img.style.textAlign = 'center'
}
