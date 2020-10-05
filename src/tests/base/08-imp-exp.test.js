import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe ('Pruebas de 08-imp-exp', ()=> {

    test('debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar array con heroes de DC', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        const heroesData = heroes.filter( h => h.owner===owner);
        expect(heroesDC).toEqual(heroesData);
    });

    test('debe de retornar array con heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        const heroesData = heroes.filter( h => h.owner===owner);
        expect(heroesMarvel.length).toBe(heroesData.length);
    });

});
