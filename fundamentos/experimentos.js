let a = 3

global.b= 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.assert(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando um variavel ,aluca: sem var e let!

abc = 3 // não faça isso em casa!!!
console.log(global.abc)


//module.exports = { e: 456, f: false, g: 'teste'}