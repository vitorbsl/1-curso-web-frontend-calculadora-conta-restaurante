## Desafio 



Um restaurante quer proporcionar aos seus garçons uma maneira mais rápida de calcular o valor total da conta e garantir uma maior agilidade no pagamento. Para isso precisam de um programa que receba o número de pessoas na mesa, o valor da comanda e devolva quanto cada cliente daquela mesa precisará pagar.

⚠️ O restaurante oferece um desconto de 10% se o pagamento for feito via PIX ou em dinheiro, então o programa precisa ter a opção de inserir o meio de pagamento e calcular automaticamente esse desconto antes de exibir a conta final aos clientes.

## :bulb: Dica

Para esse projeto, você vai aprender um conteúdo novo que é **estruturas condicionais**, como o **`if`**. Essa estrutura permite ao seu programa tomar decisões com base nas condições que você definir. No caso desse desafio, vamos usar o **`if`** para aplicar o desconto de 10% quando o método de pagamento for "PIX" ou "dinheiro".

Além disso, embora esse projeto não exija diretamente, é interessante você entender o conceito de **loops** (ou laços de repetição) em JavaScript. Os **loops** permitem que um bloco de código seja executado várias vezes, e podem ser muito úteis em situações onde precisamos repetir ações (como calcular contas para várias mesas, por exemplo).

Você pode aprofundar mais nos conceitos de **condicionais** e **loops** nos links sugeridos abaixo para melhorar sua solução.


O objetivo deste projeto é praticar os seguintes conceitos:

- **Entrada e saída de dados** em JavaScript utilizando a biblioteca `readline-sync`.
- **Manipulação de variáveis e constantes** em JavaScript.
- **Operações matemáticas** para cálculos de valores e descontos.
- **Versionamento de código** usando Git e GitHub para colaborar e compartilhar o código do projeto.




## Instruções

1. Fork do Repositório
   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.

     
#### Como forkar?

Faça o fork desse repo: [https://github.com/campinho-digital/Como-fazer-um-Fork](https://github.com/campinho-digital/Como-fazer-um-Fork)  


2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


3. Instalar Dependências
Se o projeto utiliza npm, você deve instalar as dependências:

~~~javascript
npm install

~~~

#### ⚠️ Atenção 
Se o projeto utiliza o Node.js e tem um arquivo package.json, você precisa rodar npm install para instalar todas as bibliotecas e dependências que o projeto necessita para funcionar. Sem isso, o projeto pode não rodar corretamente.


4.  Instalando e Usando o `readline-sync`

### O que é `readline-sync`?

A biblioteca `readline-sync` é usada para capturar entrada de dados diretamente no terminal de forma síncrona, ou seja, ela pausa a execução do código até que o usuário insira os dados e pressione "Enter". Isso é muito útil para criar scripts interativos.

### Instalando a Biblioteca

Para utilizar a `readline-sync` no seu projeto, você precisa seguir os passos abaixo:


~~~javascript
npm install readline-sync
~~~

Depois de instalar a biblioteca, você pode usá-la para capturar entradas de dados no terminal, faça isso no arquivo `index.js`.

5. Abrir o Arquivo index.js
Abra seu editor de código preferido (por exemplo, Visual Studio Code).
No editor, abra o arquivo `index.js` que está no repositório.

~~~javascript
// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO


// Exibindo os resultados

~~~



6. Testar o Projeto
Use o comando `npm start` no terminal para executar o projeto e testar as respostas que você implementou no arquivo index.js.

~~~javascript
npm start
~~~


7. Versionamento com Git
Depois de responder às questões e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

8. Enviar o Repositório para o Moodle

Você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.

