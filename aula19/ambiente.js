var nomes = ['Pedro', 'Alyne', 'João']
console.log(nomes)

nomes[3] = 'Diana'   //Adicionar um valor no final do vetor
console.log(nomes)

nomes.push('Thais')  //Adicionar um valor no final do vetor
console.log(nomes)

console.log(nomes.length)  //Saber o comprimento do vetor

console.log(nomes.sort())  //Colocar os elementos em ordem crescente ou alfabetica

for (var c = 0; c < nomes.length; c++) { //Mostrar os elementos do vetor na telas
    console.log(nomes[c])
}

console.log('-----------------')

for (var pos in nomes) {    //Mostrar os elementos do vetor na telas mais simplificado
    console.log(nomes[pos])
}