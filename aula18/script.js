function clicar() {
    var numtxt = window.document.getElementById('ntxt')
    var num = Number(numtxt.value)
    var c = 1
    var p = window.document.getElementById('p')

    if (numtxt.value.length == 0) {
        window.alert('ERRO! por favor digite um número')
    } else {
        p.innerHTML = `Tabuada de ${num} <br>`
        p.innerHTML+= `------------------- <br>`
        while (c < 11) {
            p.innerHTML += `${num} X ${c} = ${num*c} <br>`
            c++
        }
        p.innerHTML += `-------------------`
    }
}