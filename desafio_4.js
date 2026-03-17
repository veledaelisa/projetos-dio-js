/*O IMC - Indice de massa corporal - eh um criterio da Organizaçao Mundial da Saude para
dar uma indicaçao sobre a condiçao de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / altura^2

Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condiçao de acordo com a
tabela abaixo:

IMC EM ADULTOS - CONDIÇAO:
- Abaixo de 18.5, abaixo do peso;
- Entre 18.5 e 25, peso normal;
- Entre 25 e 30, acima do peso;
- Entre 30 e 40, obesidade;
- Acima de 40, obesidade grave.
*/

const peso = 60;
const altura = 1.66;
const imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log(imc.toFixed(2));
    console.log('Abaixo do peso');

} else if (imc >= 18.5 && imc <= 25) {
    console.log(imc.toFixed(2));
    console.log('Peso ideal');

} else if (imc >= 25 && imc <= 30) {
    console.log(imc.toFixed(2));
    console.log('Acima do peso');

} else if (imc >= 30 && imc <= 40) {
    console.log(imc.toFixed(2));
    console.log('Obesidade')

} else {
    console.log(imc.toFixed(2));
    console.log('Obesidade grave');

}