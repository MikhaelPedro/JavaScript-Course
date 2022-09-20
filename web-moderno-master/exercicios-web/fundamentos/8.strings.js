const escola = "Cod3r"

//CHAR AT FORTH POSITION IN THE VECTOR "Cod3r" RETURN '4'
console.log(escola.charAt(4))
//CHAR AT FIFTH POSITION IN THE VECTOR "Cod3r" RETURN '' BECAUSE THE POSITION DOES HAVE ANY CHARACTER
console.log(escola.charAt(5))
//RETURN THE CODE OF ASCII TABLE
console.log(escola.charCodeAt(3))
// THIRD POSITION IN THE VECTOR "Cod3r" RETURN '3'
console.log(escola.indexOf('3'))

// GET FROM POSITION 1 TO THE LAST RETURN 'od3r'
console.log(escola.substring(1))

// GET FROM POSITION 0 TO THE 3 RETURN 'Cod'
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // RETURN Escola Cod3r!
console.log('Escola ' + escola + "!") // RETURN Escola Cod3r!
console.log(escola.replace(3, 'e'))  // EXCHANGE 3 FOR 'e' Return 'Coder' 

console.log('Ana,Maria,Pedro'.split(',')) // RETURN AN ARRAY [ 'Ana', 'Maria', 'Pedro' ]