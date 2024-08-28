//Variável para armazenar nome completo//
const nomeCompleto= "Taynara Cristina da Silva";
console.log(nomeCompleto);
 
//variável para armazenar se você gosta de programar (true ou false)
 
const gostaDeProgramar = true;
console.log(`Você gosta de programar? ${gostaDeProgramar}`);
 
 
// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável
 
//2 + (3 x 4) - 5
 
const a = 2;
const b = 3;
const c = 4;
const d = 5;
const numero= a + (b * c) -d;
console.log(numero);
 
//2 x (3 + 4) - 5 ÷ 5
 
const numero1= a * (b + c) -d / d;
console.log(numero1);
 
//{[(10 - 4) / 2] * 3} + 1
const e = 10
const numero2= (e -c) / a * b + a;
console.log(numero2);
 
//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
 
 
// Variáveis
const atleta = "Caio Bonfim";
const objetivo = "ouro";
const competicao = "Olimpíadas";
const caminho = "determinação";
const patrocinio = "apoio";
 
// Poema
const poema = `
Em cada passo, ${atleta} segue em frente,
Buscando o ${objetivo}, seu maior presente.
Nas trilhas da vida, ${caminho} é seu guia,
Rumo às ${competicao}, onde a vitória se anuncia.
 
Com o ${patrocinio} ao seu lado, ele não está só,
Cada conquista é nossa, com força e com nó.
Seja na pista ou na vida, ele é campeão,
E o ${objetivo} brilha, fruto de sua paixão.`;
console.log(poema);
 
//Crie um programa que exiba a data atual formatada utilizando interpolação
// Obtém a data atual
const dataAtual= new Date(); // Estancia de classe da data
const dia =dataAtual.getDate(); // Inclusão de dias
const mes =dataAtual.getMonth()+1; //Incluir mês apartir de 0
const ano =dataAtual.getFullYear();//Inclusão do Ano
 
//Solicitando Formatação da data
const dataAjustada = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
console.log(dataAjustada);

//6-Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação
// Solicita ao usuário a base do retângulo

const base = parseFloat(prompt("Digite a base do retângulo:"));
 
// Solicita ao usuário a altura do retângulo
const altura = parseFloat(prompt("Digite a altura do retângulo:"));

// Calcula a área do retângulo
const area = base * altura;

// Exibe o resultado formatado

alert(`A área do retângulo com base ${base} e altura ${altura} é ${area}.`);
prompt("Digite a base do retângulo:");

  //7-Crie uma condicional para verificar se o caractere é uma vogal
 /// Função para verificar se uma letra é uma vogal ou consoante
    function verificarLetra(letra) {
   
   
    // Verifica se a letra é uma vogal
    if ('aeiou'.includes(letra)) {
      console.log(`${letra} é uma vogal.`);
    } else if (letra >= 'a' && letra <= 'z') {
      // Verifica se a letra está entre 'a' e 'z' para determinar se é uma consoante
      console.log(`${letra} é uma consoante.`);
    } else {
      // Se não for uma letra, exibe uma mensagem
      console.log(`${letra} não é uma letra.`);
    }
  }
 
  // Solicita uma letra ao usuário
  let letra = prompt("Digite uma letra:");
 
  // Incluir função para verificar se é vogal ou consoante
  verificarLetra(letra);


//8-Crie uma condicional para verificar se o número é par ou é impar
// Função para verificar se o número é par ou ímpar
function verificarParImpar(numero) {

    // Verifica se o número é par
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

// Testando a função com diferentes números
verificarParImpar(4); // Output: 4 é um número par.
verificarParImpar(7); // Output: 7 é um número ímpar.
verificarParImpar(0); // Output: 0 é um número par.
verificarParImpar(-3); // Output: -3 é um número ímpar.

//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:
// Função para verificar o tipo de triângulo

function tipoTriangulo(lado1, lado2, lado3) {

    // Verifica se os lados formam um triângulo válido
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ||
        (lado1 + lado2 <= lado3) || (lado1 + lado3 <= lado2) || (lado2 + lado3 <= lado1)) {
        console.log("Os valores fornecidos não formam um triângulo válido.");
    } else if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
}
// Testando os diversos tipos de triângulos
tipoTriangulo(5, 5, 5); // Output: O triângulo é equilátero.
tipoTriangulo(5, 5, 3); // Output: O triângulo é isósceles.
tipoTriangulo(5, 4, 3); // Output: O triângulo é escaleno.
tipoTriangulo(1, 2, 3); // Output: Os valores fornecidos não formam um triângulo válido.

//10-Calcule a média do aluno e verifique se ele foi aprovado

// Função para calcular a média e verificar aprovação
function verificarAprovacao(nota1, nota5, nota10) {

    // Calcula a média das notas
    const media = (nota1 + nota5 + nota10) / 3;

    // Define a nota mínima para aprovação
    const notaMinima = 6.0;

    // Verifica se a média é suficiente para aprovação
    if (media >= notaMinima) {
        console.log(`A média do aluno é ${media.toFixed(2)}. O aluno foi aprovado.`);
    } else {
        console.log(`A média do aluno é ${media.toFixed(2)}. O aluno foi reprovado.`);
    }
}

// Testando variação de notas
verificarAprovacao(7.5, 6.0, 8.0); // Output: A média do aluno é 7.50. O aluno foi aprovado.
verificarAprovacao(5.5, 5.0, 6.0); // Output: A média do aluno é 5.50. O aluno foi reprovado.
verificarAprovacao(9.0, 10.0, 8.5); // Output: A média do aluno é 9.17. O aluno foi aprovado.

//11- Crie uma variável para armazenar um array com seus hobbies

const hobbies = ['ouvir música', 'assistir séries', 'dormir'];

// Exibe os hobbies no console
console.log(hobbies);


/* 12-Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.*/

// Cria um array chamado frutas com 5 frutas diferentes
const frutas = ['ameixa', 'melão', 'uva', 'laranja', 'abacaxi'];

// Acessa e imprime o segundo elemento do array
console.log(`O segundo elemento do array é: ${frutas[1]}`);

// Adiciona mais duas frutas ao final do array
frutas.push('morango', 'abacate');

// Imprime o array atualizado
console.log('Array atualizado:', frutas);

// Remove a primeira fruta do array
frutas.shift();

// Imprime o array após remover a primeira fruta
console.log('Array após remover a primeira fruta:', frutas);


/* 13-Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.*/

// Cria uma variável e atribui um valor de qualquer tipo
const minhaVariavel = 'mudando1'; // Você pode alterar o valor para uma string, booleano, etc.

// Utiliza o operador typeof para verificar o tipo da variável
const tipoDaVariavel = typeof minhaVariavel;

// Imprime o tipo da variável no console
console.log(`O tipo da variável é: ${tipoDaVariavel}`);


/*14- Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */

// Solicita a inclusão do primero número
const numeroa = parseFloat(prompt("Digite o primeiro número:"));


// Solicita a inclusão  operador
const operador = prompt("Digite o operador (+, -, *, /):");

// Solicita a inclusão do  segundo número
const numerob = parseFloat(prompt("Digite o segundo número:"));

// Variável para armazenar o resultado
let resultado;

// Usa a estrutura switch para realizar a operações
switch (operador) {
    case '+':
        resultado = numeroa + numerob;
        break;
    case '-':
        resultado = numeroa - numerob;
        break;
    case '*':
        resultado = numeroa * numerob;
        break;
    case '/':

        // Verifica se o divisor é zero
        if (numeroa === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            resultado = null;
        } else {
            resultado = numeroa / numerob;
        }
        break;
    default:
        console.log("Operador inválido. Por favor, insira +, -, * ou /.");
        resultado = null;
        break;
}

// Exibe o resultado se for válido
if (resultado !== null) {
    console.log(`O resultado de ${numeroa} ${operador} ${numerob} =  ${resultado}.`);
}
