/*Faça um programa para calcular o valor de uma viagem.

Voce tera 5 variaveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina; 
3 - Tipo combustivel que esta no seu carro;
4 - Gasto medio de combustivel do carro por Km;
5 - Distancia em Km da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem. */

const precoDaGasolina = 6.66;
const precoDoEtanol = 5.79;
const tipoDoCombustivel = '';
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoDoCombustivel === 'etanol') {
    const valorDaViagem = litrosConsumidos * precoDoEtanol;
    console.log(valorDaViagem.toFixed(2))

} else if (tipoDoCombustivel === 'gasolina') {
    const valorDaViagem = litrosConsumidos * precoDaGasolina;
    console.log(valorDaViagem.toFixed(2));

} else {
    console.log('Nao foi possivel calcular. Verifique o tipo do combustivel.');
}
