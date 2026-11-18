let tela = document.getElementById('tela');

// Adiciona números e sinais
function add(valor) {
    tela.value += valor;
}

// Apaga tudo
function limpar() {
    tela.value = '';
}

// Resolve a conta
function calcular() {
    tela.value = eval(tela.value);
}

// Raiz Quadrada
function raiz() {
    let numero = eval(tela.value);
    tela.value = Math.sqrt(numero);
}

// NOVA: Raiz Cúbica
function raizCubica() {
    let numero = eval(tela.value);
    tela.value = Math.cbrt(numero); // cbrt significa "cube root"
}

// NOVA: Elevar ao Quadrado
function quadrado() {
    let numero = eval(tela.value);
    tela.value = numero * numero;
}

// Resolve a porcentagem do jeito certo
function porcentagem() {
    let conta = tela.value;

    // Se for conta de MAIS (ex: 100 + 25%)
    if (conta.includes('+')) {
        let pedacos = conta.split('+');       // Corta o texto no meio usando o sinal
        let valorBase = eval(pedacos[0]);     // Pega a parte da frente (100)
        let porc = eval(pedacos[1]);          // Pega a parte de trás (25)
        
        // Faz a matemática real: 100 + (100 * 25 / 100)
        tela.value = valorBase + (valorBase * porc / 100);
    } 
    // Se for conta de MENOS (ex: 100 - 25%)
    else if (conta.includes('-')) {
        let pedacos = conta.split('-');       
        let valorBase = eval(pedacos[0]);     
        let porc = eval(pedacos[1]);          
        
        // Faz a matemática real: 100 - (100 * 25 / 100)
        tela.value = valorBase - (valorBase * porc / 100);
    } 
    // Se for Multiplicação, Divisão ou um número sozinho (ex: 50%)
    else {
        tela.value = eval(conta) / 100;
    }
}

// Notação Científica
function exp() {
    let numero = eval(tela.value);
    tela.value = Number(numero).toExponential(2);
}