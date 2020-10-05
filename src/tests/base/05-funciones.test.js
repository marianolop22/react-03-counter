import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', ()=> {


    test('getUser deber retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo deber retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'Mariano'
        };

        const user = getUsuarioActivo(userTest.username);
        expect(user).toEqual(userTest);
    })
    




    



})