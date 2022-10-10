const funcs = []

for (var i = 0; i < 10; i++) {
    //Adding a new element to the Array
    funcs.push(function() {
        console.log(i)
    })
}

//Both are 10, even though they are in different positions
funcs[2]()
funcs[8]()