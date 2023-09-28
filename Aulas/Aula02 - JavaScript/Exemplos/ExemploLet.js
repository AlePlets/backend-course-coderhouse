let i = 0 // Declaração de uma variável "i" e atribuição do valor 0
function foo() {
    i = 1 // Atribuição do valor 1 à variável "i"
    let j = 2; // Declaração de uma variável "j" e atribuição do valor 2
    
    if (true) {
        console.log(i); // Imprime o valor de "i", que é 1
        console.log(j); // Imprime o valor de "j", que é 2
    }
}

foo(); // Chamada da função "foo"