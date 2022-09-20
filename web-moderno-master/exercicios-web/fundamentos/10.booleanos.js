let isAtivo = false
console.log(isAtivo)

// To convert any variable is simple, only use two !! or only one if
// you want to negativate the result    

// false
isAtivo = true
console.log(!isAtivo)
// true
isAtivo = 1
console.log(!!isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// False
console.log(!true)
//True
console.log(!false)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
// Array
console.log(!![])
// Object
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
// Only one needs to be true, to return true OR operator
console.log(!!('' || null || 0 || ' '))

// Returns the only true value 'Whatsup'
console.log(('' || null || 0 || 'Whatsup'))

let nome = 'Mikhael'
// IF name is empty then returns the default value 'Desconhecido'
console.log(nome || 'Desconhecido')