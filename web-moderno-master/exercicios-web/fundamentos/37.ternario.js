// This is a function the return is implicit, cause' there's only one line
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

//Same function 
// const resultado2 = nota =>{
//     return nota >= 7 ? 'Aprovado' : 'Reprovado'
// }

console.log(resultado(7.1))
console.log(resultado(6.7))

// A Variable can also recive from a ternary
const status = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
