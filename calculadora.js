function calcular() {
    /* pega os 2 nums */
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    /* aplica as operações */
    const soma = n1 + n2
    const subtracao = n1 - n2
    const divisao = n1 / n2
    const mult = n1 * n2
    /* exibir resultado no html */
    document.getElementById('soma').textContent = `Soma: ${soma}`
    document.getElementById('subtracao').textContent = `Subtração: ${subtracao}`
    document.getElementById('divisao').textContent = `Divisão: ${divisao}`
    document.getElementById('mult').textContent = `Multiplicação: ${mult}`
}
