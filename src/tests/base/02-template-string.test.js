import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe ('Pruebas en 02-template-string.js', ()=> {

    test('getSaludo debe retornar Hola Mariano!', () => {

        const nombre = 'Mariano';
        
        expect( getSaludo(nombre) ).toBe(`Hola ${nombre}!`);
        
    });

    test('getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre', () => {

        expect( getSaludo() ).toBe(`Hola Carlos!`);
        
    });
    





})