//Criamos dois objetos, objeto1 e objeto2, com diferentes propriedades e valores.
let objeto1 = {
    propriedade1: 2,
    propriedade2: "b",
    propriedade3: true
};
let objeto2 = {
    propriedade1: "c",
    propriedade2: [2,3,5,6,7]
};

/*Utilizando a desestruturação (destructuring), extraímos as propriedades "propriedade1" e 
"propriedade2" do "objeto1" e atribuímos seus valores a variáveis de mesmo nome.*/
let {propriedade1, propriedade2} = objeto1; //2, "b"

/*Criamos um novo objeto chamado "objeto3" usando o operador "spread" (...). 
Ele contém todas as propriedades e valores do objeto1 e objeto2.*/
let objeto3 = {...objeto1,...objeto2};

console.log(objeto3);

let objeto4 = {
    a: 1,
    b: 2,
    c: 3
};
/*Utilizando a desestruturação, extraímos a propriedade a do objeto4 e atribuímos seu valor a uma variável chamada a.
A sintaxe ...rest captura o restante das propriedades não mencionadas e as agrupa em um objeto chamado rest.
Exibimos o objeto rest, que contém as propriedades b e c, no console.*/
let {a,...rest} = objeto4;
console.log(rest);