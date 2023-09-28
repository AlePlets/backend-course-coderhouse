let valoresOriginais = [1,2,3,4,5]
let novosValores = valoresOriginais.map(x=>x+1); //novos valores: [2,3,4,5,6]
/** Porém, o que colocamos dentro da função map é uma função, indica o valor * do numero que está no array é somado 1
 
 */

let outrosValores = valoresOriginais.map(x=>x*2); //outrosValores terão: [2,4,6,8,10]
let maisValores = valoresOriginais.map(x=>"a"); //maisValores terão: ["a","a","a","a","a"]
/** Mudando a função dentro do map, map está para RECEBER UMA FUNÇÃO como parâmetro e executá-la quando apropriado*/

/** Callback por fora */
const funcitionCallback = (value) => { //** Função avalia se o valor do array é um número par */
    if(value % 2===0){
        return value;
    } else {
        return "não é par";
    }
}

const verificaPares = valoresOriginais.map(funcitionCallback); /**função inteira cpomo argumento */
console.log(verificaPares); //resultado ["não é par",2,"não é par",4,"não é par"]