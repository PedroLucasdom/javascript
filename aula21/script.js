var numeros = []

function add() {
    var lista = window.document.getElementById('lista')
    var ntxt = window.document.getElementById('ntxt')
    var n = Number(ntxt.value)

    if (numeros.indexOf(n) != -1 || n < 1 || n > 100) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        numeros.push(n)
        lista.innerHTML += `<option> Valor ${n} adicionado.</option>`
    }   
}


function fim() {
    var p = window.document.getElementById('p')
    var maior = numeros[0]
    var menor = numeros[0]
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }

    for (var i = 1; i < numeros.length; i++){
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }

    p.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
    p.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    p.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
}