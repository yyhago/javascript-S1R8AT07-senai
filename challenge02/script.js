let inputUsuario;
let numeroRandow = Math.ceil(Math.random()*10);
// console.log(numeroRandow);

for(let i = 0; i < 3; i++){
    inputUsuario = prompt("ACERTE O NÚMERO:");
    if (inputUsuario == numeroRandow){
        console.log(`VOCÊ GANHOU, o número randomico era ${numeroRandow}`);
        break;
    } 
    console.log("Opss... Você errou, tente novamente!");
}

if (inputUsuario != numeroRandow){
    console.log(`VOCÊ PERDEU!, o número randomico era ${numeroRandow}`);
}