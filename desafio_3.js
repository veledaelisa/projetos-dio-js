/* Faça uma algoritmo que, dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule
e imprima a sua media e a sua classificaçao conforme a tabela abaixo:

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificacao:
- Media menor que 5, reprovaçao;
- Media entre 5 e 7, recuperaçao;
- Media acima de 7, aprovaçao;
*/

const notaUm = 7;
const notaDois = 7;
const notaTres = 7;
const mediaAluno = (notaUm + notaDois + notaTres) / 3;

if (mediaAluno < 5) {
    console.log(mediaAluno.toFixed(2));
    console.log('Reprovado');

} else if (mediaAluno >= 5 && mediaAluno <= 7) {
    console.log(mediaAluno.toFixed(2));
    console.log('Em recuperaçao');

} else if (mediaAluno > 7) {
    console.log(mediaAluno.toFixed(2));
    console.log('Aprovado');
}