function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.")
    }
    return a / b;
}

module.exports = {divisao, multiplicacao, adicao, subtracao}