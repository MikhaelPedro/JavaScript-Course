const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//Both are in the correct postion
funcs[2]()
funcs[6]()
funcs[8]()