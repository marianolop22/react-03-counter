//functional components
//esto es un componente

import React from 'react';
import PropTypes from "prop-types";

//las 

const PrimeraApp = ( { saludo, subtitulo } ) => {


    // const saludo = 'Hola, mundo';
    // const saludos = {
    //     nombre: "Mariano",
    //     edad: 41
    // };

    // las {} imprime variales, pero no imprime booleanos, ni objetos
    
    return (
        <> 
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludos,null,3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    ); 
    //el fragment es un tag que después se borra al insertar en el html
    // el <> es un fragmentt acotado
};

//defino los tipos de datos que estoy esperando
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired //esto determina que el campo es obligatorio
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;