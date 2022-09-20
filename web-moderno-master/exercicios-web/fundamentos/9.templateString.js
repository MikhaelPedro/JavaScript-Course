const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

// const up = result of the function
const up = texto => texto.toUpperCase()

//const up = 'cuidado' and then return in Upper Case 'CUIDADO!'
console.log(`Ei... ${up('cuidado')}!`)
//Final Result 'Ei... CUIDADO!'