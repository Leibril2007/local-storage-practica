import { tareas } from "../data/data.js";
import { tarea } from "./itemTarea.js";

function cargarTareas(){
    let baseMain = document.createElement('div');
    baseMain.className = "base-main";



    tareas.forEach(element => {
        
        baseMain.appendChild(tarea(element));

    });


    return baseMain;
}

export { cargarTareas }