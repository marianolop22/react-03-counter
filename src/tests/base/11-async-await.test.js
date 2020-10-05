import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe ('Pruebas del archivo 11-async-await', ()=> {

    test('debe retornar el url de la imagen', async () => {

        const url = await getImagen();

        console.log(url);
        expect(url.includes ('https://')).toBe(true);
    });

});