/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condiçao de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condiçao de pagamento escolhida e
efetuar o calculo adequado.

CONDIÇAO DE PAGAMENTO - CODIGO:
- A vista Debito, recebe 10% de desconto;
- A vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const condiçaoDePagamento = 4;
const aVistaDinheiroOuPix = 1;
const aVistaDebito = 2;
const emDuasVezes = 3;
const acimaDeDuasVezes = 4;
const preçoDoProduto = 50.00;

if (condiçaoDePagamento === 1) {
    console.log(preçoDoProduto - (preçoDoProduto * (15/100)));

} else if (condiçaoDePagamento === 2) {
    console.log(preçoDoProduto - (preçoDoProduto * (10/100)));

} else if (condiçaoDePagamento === 3) {
    console.log(preçoDoProduto);

} else {
    console.log(preçoDoProduto + (preçoDoProduto * (10/100)));
}