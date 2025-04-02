function tarea(listado){

    let divBTarea = document.createElement('div');
    divBTarea.className = "div-b-tarea";


    let textTarea = document.createElement('p');
    textTarea.className = "text-tarea";
    textTarea.textContent = listado;

    divBTarea.appendChild(textTarea);

    let divBBtns = document.createElement('div');
    divBBtns.className = "div-b-btns";


    let btnTrue = document.createElement('div');
    btnTrue.className = "btns btn-true";
    btnTrue.textContent = "/";

    divBBtns.appendChild(btnTrue);

    let btnFalse = document.createElement('div');
    btnFalse.className = "btns btn-false";
    btnFalse.textContent = "X";

    divBBtns.appendChild(btnFalse);


    divBTarea.appendChild(divBBtns);

    return divBTarea;
}

export { tarea }