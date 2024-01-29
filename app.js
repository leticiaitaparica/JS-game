alert('Boas vindas aos jogos do número secreto');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;


    //enquanto chute não for igual ao núm. secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // usa-se break para parar o while
        break;
        } else {
    if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas = tentativas + 1;
        //ou tentativas++;
    }
}
//operador ternário = substituindo o if e else
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas>  1){
//        alert   (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//   } else {
//        alert   (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}