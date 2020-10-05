import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe ('GroupName PrimeraApp', ()=> {
/* se comenta este test porque no vamos ausar el jest extendido de setupTest
    test('Debe mostrar el mensaje "Hola, soy Mariano"', () => {
        
        const saludo = 'Hola, soy Mariano';
        const { getByText } = render(<PrimeraApp saludo={saludo}/>);

        expect( getByText(saludo)).toBeInTheDocument();
    });
     */

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Mariano';
        const wrapper = shallow(<CounterApp saludo={saludo}/>);

        expect( wrapper ).toMatchSnapshot()
    });
    
    test('debe de mostrar el subititulo enviado props', () => {

        const saludo = 'Hola, soy Mariano';
        const subtitulo = 'soy un subtitulo';
        
        const wrapper = shallow(<PrimeraApp 
            saludo={saludo}
            subtitulo = {subtitulo}
        />);

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe(subtitulo);
    })

});