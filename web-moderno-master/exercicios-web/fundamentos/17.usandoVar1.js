// Var can just be Global or in a function it'll be private


// PUBLIC EXAMPLE
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)


// PRIVATE EXAMPLE
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)