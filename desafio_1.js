/* Faça um programa para calcular o valor de uma viagem.

Voce tera 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto medio de combustivel do carro por Km;
3 - Distancia em Km da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem. */

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorDaViagem = litrosConsumidos * precoCombustivel;

console.log(valorDaViagem.toFixed(2));
