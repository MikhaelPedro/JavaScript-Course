console.log(Math.ceil(6.1))

const obj1 = {}
//It is dynamically created when you try to access an object's variable
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // You can still access an object's variable this way
console.log(obj1.nome)

function Obj(nome) {
    //Using (this) objects become public
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()