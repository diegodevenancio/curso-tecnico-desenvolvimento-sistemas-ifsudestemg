// Tipos de console
console.log("Esta é uma mensagem de log!");
console.info("Esta é uma mensagem de informação.");
console.warn("Esta é uma mensagem de aviso.");
console.error("Esta é uma mensagem de erro.");

// Variáveis
var idade = 25; // Variável global
let nome = "Diego";
const PI = 3.14; // Constante

// Tipos de dados
let texto = "Olá, mundo!"; // String
let numero = 42; // Number
let estaVivo = true; // Boolean
let lista = [1, 2, 3]; // Array
let objeto = { nome: "Diego", idade: 25 }; // Object

// Imprimindo variáveis e tipos de dados no console
console.log(idade, nome, PI);
console.log(texto, numero, estaVivo);
console.log(lista, objeto);

// Funções
function saudacao() {
    console.log("Olá! Bem-vindo ao JavaScript!");
}
saudacao();

// Função com parâmetros
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));

// Estruturas de controle
// Condicional if-else
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
} 

// Laço de repetição for
for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}

// Laço de repetição while
let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}


