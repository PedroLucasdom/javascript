var amigo = {
    nome: 'Pedro',
    sexo: 'M',
    peso: 51.5,
    engordar(p){
        this.peso += p
    }
}
amigo.engordar(2)
console.log(amigo.peso)