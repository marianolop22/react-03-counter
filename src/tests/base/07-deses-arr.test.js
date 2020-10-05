const { retornaArreglo } = require("../../base/07-deses-arr");

describe ('pruebas en 07-deses', ()=> {

    test('debe retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo();
        // expect(miArr).toEqual (['ABC', 123]);
        expect (letras).toBe('ABC');
        expect (typeof letras).toBe('string');
        expect (numeros).toBe(123);
        expect (typeof numeros).toBe('number');
    })
})
