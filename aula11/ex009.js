var dinheiro = 5242

console.log(`Você tem ${dinheiro.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
if (dinheiro > 3000) {
    console.log('EBAAAAAA, partiu Disney!')
}else {
    console.log('Preciso juntar mais dinheiro.')
}