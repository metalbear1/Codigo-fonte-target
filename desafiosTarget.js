//Código primeiro desafio (Sequência de Fibonacci)

function verificaFibonacci(num) {
  let a = 0, b = 1;
  if (num === a || num === b) return true;

  let c = a + b;
  while (c <= num) {
    if (c === num) return true;
    a = b;
    b = c;
    c = a + b;
  }
  return false
}

const numeroTeste = 144;
if (verificaFibonacci(numeroTeste)){
  console.log(`${numeroTeste} pertence a sequência de Fibonacci`)
} else{
  console.log(`${numeroTeste} não pertence a sequência de Fibonacci`)
}

//Código letra 'A'

function informacaoA(str) {
  let contagem = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === 'a'){
      contagem++;
    }
  } 
  return contagem;
}

const entradaString = 'Aprendendo e testando com javaScript'
const contagemFinal = informacaoA(entradaString);

if(contagemFinal > 0) {
  console.log(`A letra 'a' aparece ${contagemFinal} vezes na string`)
} else {
  console.log("A letra 'a' não apareceu nenhuma vez na string.")
}

//Código Soma

let INDICE = 12;
let SOMA = 0;
let K = 1;

while ( K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K
}
console.log(SOMA);

//Resolução de lógica de soma e cálculo

// Funções para calcular o próximo número de cada sequência

// a) Sequência de números ímpares
function numeroImpar(sequencia) {
  return sequencia[sequencia.length - 1] + 2;
}

// b) Potências de 2
function potenciasDeDois(sequencia) {
  return sequencia[sequencia.length - 1] * 2;
}

// c) Quadrados perfeitos
function numerosQuadrados(sequencia) {
  let tamanho = sequencia.length;
  return tamanho * tamanho;
}

// d) Quadrados perfeitos multiplicados por 4
function numerosQuadradosPor4(sequencia) {
  let tamanho4 = sequencia.length + 2; // +2 porque começa em 2²
  return tamanho4 * tamanho4;
}

// e) Fibonacci
function calculoSimplesFibonacci(sequencia) {
  let tamanhoF = sequencia.length;
  return sequencia[tamanhoF - 1] + sequencia[tamanhoF - 2];
}

// f) Padrão alternado de números consecutivos e pulos
function numeralAleatório(sequencia) {
  return sequencia[sequencia.length - 1] + 1;
}

// Testes
console.log("a) Próximo número: ", numeroImpar([1, 3, 5, 7]));       // 9
console.log("b) Próximo número: ", potenciasDeDois([2, 4, 8, 16, 32, 64])); // 128
console.log("c) Próximo número: ", numerosQuadrados([0, 1, 4, 9, 16, 25, 36])); // 49
console.log("d) Próximo número: ", numerosQuadradosPor4([4, 16, 36, 64])); // 100
console.log("e) Próximo número: ", verificaFibonacci([1, 1, 2, 3, 5, 8])); // 13
console.log("f) Próximo número: ", numeralAleatório([2, 10, 12, 16, 17, 18, 19])); // 20

//sólução lâmpadas

let lampada1 = { ligada: false, quente: false };
let lampada2 = { ligada: false, quente: false };
let lampada3 = { ligada: false, quente: false };

// Simular o primeiro interruptor ligado e depois desligado
function interruptorEsquerdo() {
    lampada1.ligada = true;  // Lâmpada ligada
    lampada1.quente = true; // Ela aquece
    lampada1.ligada = false; // Depois é desligada
}

// Simular o segundo interruptor ligado
function interruptorMeio() {
    lampada2.ligada = true;
    lampada2.quente = true; // Lâmpada ligada e aquecida
}

// Terceira lâmpada permanece desligada
function interruptorDireito() {
    lampada3.ligada = false;
    lampada3.quente = false; // Lâmpada fria
}

// Função para verificar o estado das lâmpadas
function checagemLampadas() {
    if (lampada1.quente && !lampada1.ligada) {
        console.log("Lampada1 é controlada pelo interruptor esquerdo e foi desligada, mas está quente pois ficou ligada por um determinado tempo.");
    }
    if (lampada2.ligada) {
        console.log("Lampada2 é controlada pelo interruptor do meio e está ligada atualmente");
    }
    if (!lampada3.ligada && !lampada3.quente) {
        console.log("Lampada3 é controlada pelo interruptor direito e está desligada e gelada, pois não foi ligada em momento algum.");
    }
}

// Executar a simulação
interruptorEsquerdo();
interruptorMeio();
interruptorDireito();
checagemLampadas();
