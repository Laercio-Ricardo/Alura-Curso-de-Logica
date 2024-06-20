// Exibir mensagem de boas-vindas no console
let output = document.getElementById('output');

// Exibir mensagem com o nome
let nome = "João"; // Substitua pelo seu nome
output.innerHTML += `<p>Olá, ${nome}!</p>`;

// Exibir mensagem usando alert
alert(`Olá, ${nome}!`);

// Perguntar sobre linguagem de programação
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
output.innerHTML += `<p>Você gosta de programar em ${linguagem}.</p>`;

// Realizar a soma de dois valores
let valor1 = 10;
let valor2 = 5;
let resultadoSoma = valor1 + valor2;
output.innerHTML += `<p>A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.</p>`;

// Realizar a subtração de dois valores
let resultadoSubtracao = valor1 - valor2;
output.innerHTML += `<p>A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSubtracao}.</p>`;

// Verificar se a pessoa é maior ou menor de idade
let idade = prompt("Qual é a sua idade?");
idade = Number(idade); // Converte a entrada para número

if (idade >= 18) {
    output.innerHTML += "<p>Você é maior de idade.</p>";
} else {
    output.innerHTML += "<p>Você é menor de idade.</p>";
}

// Verificar se um número é positivo, negativo ou zero
let numero = prompt("Digite um número:");
numero = Number(numero); // Converte a entrada para número

if (numero > 0) {
    output.innerHTML += "<p>O número é positivo.</p>";
} else if (numero < 0) {
    output.innerHTML += "<p>O número é negativo.</p>";
} else {
    output.innerHTML += "<p>O número é zero.</p>";
}

// Imprimir números de 1 a 10 com um loop while
let i = 1;
while (i <= 10) {
    output.innerHTML += `<p>${i}</p>`;
    i++;
}

// Verificar se a nota é maior ou igual a 7
let nota = 8; // Substitua pela sua nota
if (nota >= 7) {
    output.innerHTML += "<p>Aprovado</p>";
} else {
    output.innerHTML += "<p>Reprovado</p>";
}

// Gerar número aleatório entre 0 e 1 com Math.random()
let numeroAleatorio1 = Math.random();
output.innerHTML += `<p>Número aleatório entre 0 e 1: ${numeroAleatorio1}</p>`;

// Gerar número aleatório inteiro entre 1 e 10 com Math.random()
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
output.innerHTML += `<p>Número aleatório entre 1 e 10: ${numeroAleatorio2}</p>`;

// Gerar número aleatório inteiro entre 1 e 1000 com Math.random()
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
output.innerHTML += `<p>Número aleatório entre 1 e 1000: ${numeroAleatorio3}</p>`;
