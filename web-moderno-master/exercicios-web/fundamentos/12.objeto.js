const prod1 = {}
// Cria os atributos dinamicamente, um object can has other object inside
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    //An object inside another one
    //Object name cannot be repeated
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
            MikhaPassedHere: true
        }
    }
}

console.log(prod2)