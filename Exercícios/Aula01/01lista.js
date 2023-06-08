const objetos = [
    {
        macas:3,
        peras:2,
        carne:1,
        frango:5,
        doces:2
    },
    {
        macas:1,
        cafes:1,
        ovos:6,
        frango:1,
        paes:2
    }
]

const listaItens = {};
objetos.forEach(lista => {
    Object.entries(lista).forEach(([key, value]) => {
        listaItens[key] = (listaItens[key] || 0 ) + value; //lista itens key procura, se nao tiver vai criar a key e o = vai colocar o resultado, se tiver algo na lista key ele coloca igual, se não coloca zero, e soma com o value que é da lista de em objetos . primeira parte iterou a chave e na segunda atribui valor a ele
        console.log(listaItens) 
    });
});

let somaValores = Object.entries(listaItens);
console.log(somaValores);

// ///resolução prof

// const objetos = [
//     { macas:3, peras:2, carne:1, frango:5, doces:2},
//     { macas:1, cafes:1, ovos:6, frango:1, paes:4}
// ]

// const listaItens = {};

// objetos.forEach(lista => {
//     Object.entries(lista).forEach(([key, value]) => {
//         listaItens[key] = (listaItens[key] || 0) + value;
//         console.log(listaItens);
//     });
// });

// console.log(" ")

// console.log(listaItens);
