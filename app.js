alert("olá, Bem vindo ao Jogo do número secreto!");

let numeroScreto = 29;
console.log ('O numero secreto é:' + numeroScreto);

let chute = prompt("Escolha um numero entre 1 e 30");

if (numeroScreto == chute) {
    alert("Você acertou!!! O numero secreto é :" + numeroScreto )
}
else (
    alert("Você errou :(")
);