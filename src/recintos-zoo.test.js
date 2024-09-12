import { RecintosZoo } from "./recintos-zoo.js";

describe('Recintos do Zoologico', () => {

    test('Deve rejeitar animal inválido', () => {
            const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);
            expect(resultado.erro).toBe("Animal inválido");
            expect(resultado.recintosViaveis).toBeFalsy();
        });

    test('Deve rejeitar quantidade inválida', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 0);
            expect(resultado.erro).toBe("Quantidade inválida");
            expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);
            expect(resultado.erro).toBe("Não há recinto viável");
            expect(resultado.recintosViaveis).toBeFalsy();
        });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 2 macacos', () => {

        const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recinto para 2 hipopótamos', () => {
        const result = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 2);
        expect(result.erro).toBeFalsy();
        expect(result.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 0 total: 8)');
        expect(result.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recinto para 5 macacos', () => {
        const result = new RecintosZoo().analisaRecintos('MACACO', 5);
        expect(result.erro).toBeFalsy();
        expect(result.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(result.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 0 total: 5)');
    });

    test('Não deve encontrar recinto para 1 leopardo', () => {
        const result = new RecintosZoo().analisaRecintos("LEOPARDO",1);
        expect(result.erro).toBe("Não há recinto viável");
        expect(result.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 3 gazelas', () => {
        const result = new RecintosZoo().analisaRecintos("GAZELA",3);
        expect(result.erro).toBeFalsy();
        expect(result.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 0 total: 10)');
    });

    test('Deve encontrar recinto para 2 gazelas', () => {
        const result = new RecintosZoo().analisaRecintos("GAZELA",2);
        expect(result.erro).toBeFalsy();
        expect(result.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(result.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
    });

    test('Deve rejeitar animal inválido', () => {
        const result = new RecintosZoo().analisaRecintos("MANDRAGORA",1);
        expect(result.erro).toBe("Animal inválido");
        expect(result.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 2 leões', () => {
        const result = new RecintosZoo().analisaRecintos("LEAO",2);
        expect(result.erro).toBeFalsy();
        expect(result.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 0 total: 9)');
    });

    test('Não deve encontrar recinto para 3 crocodilos', () => {
        const result = new RecintosZoo().analisaRecintos("CROCODILO",3);
        expect(result.erro).toBe('Não há recinto viável');
        expect(result.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 4 leões', () => {
        const result = new RecintosZoo().analisaRecintos("LEAO",4);
        expect(result.erro).toBe('Não há recinto viável');
        expect(result.recintosViaveis).toBeFalsy();
    });

    test('Deve rejeitar entrada inválida', () => {
        const result = new RecintosZoo().analisaRecintos(" ",2);
        expect(result.erro).toBe('Animal inválido');
        expect(result.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recinto para 9 gazelas', () => {
        const result = new RecintosZoo().analisaRecintos("GAZELA",9);
        expect(result.erro).toBe('Não há recinto viável');
        expect(result.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 1 hipopótamo', () => {
        const result = new RecintosZoo().analisaRecintos("HIPOPOTAMO",1);
        expect(result.erro).toBeFalsy();
        expect(result.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(result.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
    });

    test('Não deve encontrar recinto para 5 hipopótamos', () => {
        const result = new RecintosZoo().analisaRecintos("HIPOPOTAMO",5);
        expect(result.erro).toBe('Não há recinto viável');
        expect(result.recintosViaveis).toBeFalsy();
    });

});

