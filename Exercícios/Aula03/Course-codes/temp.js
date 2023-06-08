const temporizador = (callback) => {
    setTimeout(() =>{
        callback();
    },5000);
}

let operacao = () => console.log("ÉÉÉ SIMMMM !!!");

console.log("Alessandra é bandindinha ?");
temporizador(operacao);// colocamos a "operacao" no temporizador
console.log("deixa eu ver ...")