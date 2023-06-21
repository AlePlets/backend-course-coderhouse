// Criação de um array chamado "people" que armazenará objetos representando pessoas
let people = [
    {id:1, fist_name: 'Luiz', last_name: 'Pereira', age:25, gender:'M'},
    {id:2, fist_name: 'Maria', last_name: 'Silva', age:30, gender:'F'},
    {id:3, fist_name: 'José', last_name: 'Silveira', age:42, gender:'M'},
    {id:4, fist_name: 'Luiza', last_name: 'Camões', age:39, gender:'F'}

];

// Utilização do método "find()" para encontrar um objeto no array "people" com a propriedade "id" igual a 3
let person = people.find(p=> {
    let test;
    // Verifica se o valor da propriedade "id" do objeto atual é igual a 3
    test = p.id === 3;
    return test
});
// Exibe o objeto encontrado no console
console.log(person);