const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
//How many Fields the array has, in this case has 5
console.log(valores.length)

//Created a new array with different data types
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Delete the last field of the array
console.log(valores.pop())

// Delete the first field of the array
delete valores[0]
console.log(valores)

// Type object
console.log(typeof valores)