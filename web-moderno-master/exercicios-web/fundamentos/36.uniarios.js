let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

            // the compiler will compare on this way { ++num1 === num2 } == TRUEE
            // {++num1 === num2} --
console.log(++num1 === num2--)
            // the compiler will compare on this way num1 === num2  
console.log(num1 === num2)