function geraNumeroAleatorio() { // cria função que gera um numero
  return Math.floor(Math.random() * 20) + 1; // Math.floor arredonda um número para baixo - Math.random gera um numero qualquer no intervalo de 0 e 1 multiplicado em 20 e soma 1
}

function contadorNumeroAleatorio() { // cria u
  const numerosGerados = {};

  for (let i = 0; i < 1000; i++) { //itera isso varias vezes, enquanto i for menor que 10000; adicionando numero, gera numeros aletorios
    const numeroAleatorio = geraNumeroAleatorio();

    if (numerosGerados[numeroAleatorio]) { //entra nos numeros gerados e procura os nu meros aleatórios, se false vai no else
      numerosGerados[numeroAleatorio] += 1;
    } else { // pega um número aleatório ex 55 se não existe, atribui valor 1
      numerosGerados[numeroAleatorio] = 1;
    }
  }

  return numerosGerados;
}

const contagemNumeroGerados = contadorNumeroAleatorio();
console.log(contagemNumeroGerados);