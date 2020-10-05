import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //acá traigo el css
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#root');

// ReactDOM.render ( <PrimeraApp saludo="Hola, soy Mariano" />, divRoot);

ReactDOM.render (<CounterApp value={5} />, divRoot);

//si quisiera mandar un numero es {123}


