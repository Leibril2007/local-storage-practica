import { cargarTareas } from "./tareas/tareasControl.js";

let DOM = document.querySelector('#root');

function cargarListado(){

    DOM.appendChild(cargarTareas());

    return DOM;

}

cargarListado();

export { cargarListado }