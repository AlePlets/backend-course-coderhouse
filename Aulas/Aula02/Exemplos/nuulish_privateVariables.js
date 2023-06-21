/* atribuição de variável de um nulo, para entender sua diferença com o operador OR || */

let variavelProva = 0;
let variavelPreenchida = variavelProva ||'Sem Valor'; /* OU - Se variavelProva for falsa (ou seja, avaliado como falso), 
o valor 'Sem Valor' será atribuído a variavelPreenchida.*/
console.log(variavelPreenchida);

let variavelNullish = variavelProva ??'Sem Valor'; /*O operador ?? verifica se o valor de variavelProva é nullish (ou seja, null ou undefined) e, 
nesse caso, atribui o valor 'Sem Valor' a variavelNullish. */
console.log(variavelNullish);

class Persona {
    #fullname; //Utilizamos a sintaxe de campo privado (Private Field) para declarar a propriedade #fullname como privada.

    //Definimos o construtor da classe Persona que recebe nome e sobrenome como parâmetros. D
    constructor(nome, sobrenome) {
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.#fullname = `${this.nome} ${this.sobrenome}`; //Dentro do construtor, atribuímos os valores de nome e sobrenome às propriedades correspondentes (this.nome e this.sobrenome) e também concatenamos esses valores para preencher a propriedade privada #fullname.
    }

    getFullname = () => this.#fullname; //Definimos um método público getFullname usando a sintaxe de campo de classe. Esse método retorna o valor da propriedade privada #fullname

    #metodoPrivado = () => null; //Utilizamos a sintaxe de campo privado novamente para declarar o método privado #metodoPrivado, que retorna null.
}

let instancia1 = new Persona('José', 'da Silva'); //Criamos uma instância da classe Persona chamada instancia1, passando os valores 'José' e 'da Silva' para o construtor.

console.log(instancia1.getFullname()); //Exibimos o resultado do método getFullname da instância instancia1 no console, que retorna a concatenação do nome e sobrenome, ou seja, o valor da propriedade #fullname da instância.