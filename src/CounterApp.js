import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value=10 } ) => {

    const [ counter, setCounter ] = useState(value);


    //handleAdd
    const handleAdd = (e) => {
        // 2 maneras de manejar el conrador
        setCounter(counter + 1);
        //setCounter( (c) => c + 1 );
    };

    const handleReset = (e) => {
        // 2 maneras de manejar el conrador
        setCounter(value);
        //setCounter( (c) => c + 1 );
    };

    const handleSubstract = (e) => {
        // 2 maneras de manejar el conrador
        setCounter(counter - 1);
        //setCounter( (c) => c + 1 );
    };


    const handle = ( value ) => {
        // 2 maneras de manejar el conrador
        console.log('value', value);
        setCounter(counter - 1);
        //setCounter( (c) => c + 1 );
    };

    


    
    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            {/* una opcion para mandar el parametro  <button onClick={ (e) => { handle(value) } }>+1</button> */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubstract } >-1</button>
        </>
    );
};


CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;


