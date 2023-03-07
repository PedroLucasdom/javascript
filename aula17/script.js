function clicar() {
    var iniciotxt = window.document.getElementById('txti')
    var inicio = Number(iniciotxt.value)

    var fimtxt = window.document.getElementById('txtf')
    var fim =  Number(fimtxt.value)

    var passotxt = window.document.getElementById('txtp')
    var passo = Number(passotxt.value)

    var p = window.document.getElementById('p')

    if (inicio == 0 || passo == 0 || fim == 0){
        p.innerHTML = 'Impossível contar!'

    }else if (inicio > fim) {
        //contagem regressiva
        p.innerHTML = 'Contando: <br>'
        for (inicio; inicio > fim-1; inicio-=passo) {
            p.innerHTML += ` ${inicio} \u{1F449}`
        }

    }else {
        //contagem crescente
        p.innerHTML = 'Contando: <br>'
        for (inicio; inicio < fim+1; inicio+=passo) {
            p.innerHTML += ` ${inicio} \u{1F449}`
        }
    }
    p.innerHTML += `\u{1F3C1}`
}
