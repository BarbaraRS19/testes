const { adicao, subtracao, multiplicacao, divisao } = require('../src/funcoes');

describe('Funções', () => {
    test('adição', () => {
        expect(adicao(2, 3)).toBe(5);
        expect(adicao(-1, 1)).toBe(0);
    });

    test('subtração', () => {
        expect(subtracao(5, 3)).toBe(2);
        expect(subtracao(3, 5)).toBe(-2);
    });

    test('multiplicação', () => {
        expect(multiplicacao(2, 3)).toBe(6);
        expect(multiplicacao(-2, -3)).toBe(6);
    });

    test('divisão', () => {
        expect(divisao(10, 2)).toBe(5);
        expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
});