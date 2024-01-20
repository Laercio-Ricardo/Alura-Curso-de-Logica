alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
//variavel tentativas nas linhas 6, 13 e 23
let tentativas = 1;

//Enquanto o chute não for igual ao número
while (chute != numeroSecreto){
 chute = prompt('Escolha um número de 1 a 10')
 // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } 
        //se o chute for menor que o número secreto
        else {
        if (chute > numeroSecreto) {
            alert(`O Numero secreto é menor que o ${chute}`);
        } else{
            //se o chute for menor que o número secreto
            alert(`O Numero secreto é maior que o ${chute}`);
        }
        tentativas++;
        
}

}