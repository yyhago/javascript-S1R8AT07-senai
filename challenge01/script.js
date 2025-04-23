let numeroInicial = parseInt(prompt("Digite um número inicial:"));
let numeroFinal = parseInt(prompt("Digite um número final:"));



if(isNaN(numeroInicial) || isNaN(numeroFinal)){
    console.log("Digite valores válidos");
} else if (numeroInicial > numeroFinal) {
    [numeroInicial, numeroFinal] = [numeroFinal, numeroInicial];
    console.log("Você digitou os valores ao contrário, porém nós invertemos para você!");
}

if (numeroInicial < numeroFinal){
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 === 0) {
            console.log(i + " é par.");
        } else{
            console.log(i + " é impar");
        }
    }
} 