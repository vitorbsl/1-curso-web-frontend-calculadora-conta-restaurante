// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
let valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');

// Verificando se o método de pagamento é PIX ou dinheiro e aplicando o desconto
if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
    valorTotal *= 0.9; // Aplica 10% de desconto
}

// Calculando o valor por pessoa
const valorPorPessoa = valorTotal / numeroPessoas;

// Exibindo os resultados
console.log(`\nMétodo de pagamento: ${metodoPagamento}`);
console.log(`Valor total com desconto (se aplicável): R$ ${valorTotal.toFixed(2)}`);
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);
