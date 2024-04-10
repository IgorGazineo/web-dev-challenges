"use strict";

const nome = prompt("Qual é o seu nome?");
alert(`Olá, ${nome}! Bem-vindo ao nosso primeiro projeto em JavaScript.`);
const continuar = confirm("Você gostaria de continuar?");

if (!continuar) {
  console.log("O usuário cancelou.");
} else {
  console.log("O usuário decidiu continuar.");
  const cincoAnos = 5;
  const idade = +prompt("Qual a sua idade?");
  alert(
    `${nome} hoje tem ${idade} anos e daqui a 5 anos terá ${
      idade + cincoAnos
    } anos.`
  );

  const frase = prompt(
    'Digite "Olá, mundo!" no prompt e veja o resultado no console.'
  );

  const tamanho = frase.length;
  console.log(`Tamanho da frase: ${tamanho}`);

  const fraseMaiuscula = frase.toUpperCase();
  console.log(`Frase em maiúsculas: ${fraseMaiuscula}`);

  const fraseMinuscula = frase.toLowerCase();
  console.log(`Frase em minúsculas: ${fraseMinuscula}`);

  const indiceMundo = frase.indexOf("mundo");
  console.log(`Índice da palavra 'mundo': ${indiceMundo}`);

  const ultimoIndiceO = frase.lastIndexOf("o");
  console.log(`Último índice da letra 'o': ${ultimoIndiceO}`);

  const parteAposVirgula = frase.slice(frase.indexOf(",") + 1);
  console.log(`Parte da frase após a vírgula: ${parteAposVirgula}`);

  const fraseSubstituida = frase.replace("mundo", "JavaScript");
  console.log(
    `Frase substituindo 'mundo' por 'JavaScript': ${fraseSubstituida}`
  );
}
/* 

Manipulação de Strings com Métodos:
Após confirmar a continuação, as seguintes mensagens devem aparecer no console:
"Tamanho da frase: {tamanho}" substituindo {tamanho} pelo tamanho da frase "Olá, mundo!".
"Frase em maiúsculas: {fraseMaiuscula}" substituindo {fraseMaiuscula} pela frase "OLÁ, MUNDO!".
"Frase em minúsculas: {fraseMinuscula}" substituindo {fraseMinuscula} pela frase "olá, mundo!".
"Índice da palavra 'mundo': {indiceMundo}" substituindo {indiceMundo} pelo índice da palavra "mundo" na frase.
"Último índice da letra 'o': {ultimoIndiceO}" substituindo {ultimoIndiceO} pelo último índice da letra "o" na frase.
"Parte da frase após a vírgula: {parteAposVirgula}" substituindo {parteAposVirgula} pela parte da frase após a vírgula.
"Frase substituindo 'mundo' por 'JavaScript': {fraseSubstituida}" substituindo {fraseSubstituida} pela frase com "mundo" substituído por "JavaScript".
*/
