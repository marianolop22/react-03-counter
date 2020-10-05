import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe ('Test de promesas el 09-promesas', ()=> { 

    test('debe retornar un heroe async', (done) => { //al poner el done hace un callback, es para las funciones asincronas
        
        const id = 1;
        getHeroeByIdAsync (id)
            .then( heroe =>  {
                
                expect(heroe).toBe(heroes[0]);
                done();
            })
    });

    test('debe de obtener un error si el heroe no existe', (done) => { //al poner el done hace un callback, es para las funciones asincronas
        
        const id = 10;
        getHeroeByIdAsync (id)
            .then( heroe =>  {
                
                expect(heroe).toBe(heroes[0]);
                done();
            })
            .catch( err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            })
    });

});