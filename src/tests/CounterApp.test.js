import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe ('pruebas sobre CounterApp', ()=> {

    let wrapper = shallow(<CounterApp />);
    
    beforeEach ( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar bien el <CounterApp />', () => {
        expect( wrapper ).toMatchSnapshot()
    });

    test('debe mostrar bien el valor por defecto de 10', () => {
        
        const value = 50;
        const wrapper = shallow(<CounterApp value={value}/>);
        
        const textoContador = wrapper.find('h2').text().trim();

        expect( parseInt(textoContador) ).toBe(value);
    });

    test('debe incrementar con el boton de +1', () => {
        
        wrapper.find('button').at(0).simulate('click'); //esto me da el primer botton
        const textoContador = wrapper.find('h2').text().trim();
        expect( parseInt(textoContador) ).toBe(11);
    });

    test('debe incrementar con el boton de -1', () => {
        
        wrapper.find('button').at(2).simulate('click'); //esto me da el primer botton
        const textoContador = wrapper.find('h2').text().trim();
        expect( parseInt(textoContador) ).toBe(9);
    });

    test('debe resetear al valor por default', () => {
        
        const value = 50;
        const wrapper = shallow(<CounterApp value={value}/>);

        wrapper.find('button').at(0).simulate('click'); //esto me da el primer botton
        wrapper.find('button').at(0).simulate('click'); //esto me da el primer botton
        wrapper.find('button').at(0).simulate('click'); //esto me da el primer botton

        wrapper.find('button').at(1).simulate('click'); //esto me da el primer botton
        const textoContador = wrapper.find('h2').text().trim();
        expect( parseInt(textoContador) ).toBe(value);
    });

});