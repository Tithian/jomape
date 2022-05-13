for (let index = 1; index <=5; index++) {
    var parr = document.createElement('p');
    parr.textContent = index;
    document.body.appendChild(parr);
    parr.setAttribute('id',index);
    parr.onclick = ()=>borrarNodo(index)
    //funcion flecha ()=>
    parr.onmouseenter = ()=>evento(index)
    parr.onmouseout = ()=>otroEvento(index)
    parr.onmouseleave = ()=>masEventos(index)
}

function borrarNodo(id) {
    let nodo = document.getElementById(id);
    nodo.parentNode.removeChild(nodo);
}

function evento(id) {
    let nodo = document.getElementById(id);
    //toggle hace si no está y no lo hace si está
    nodo.classList.toggle('colorRojo');

}

function otroEvento(id) {
    let nodo = document.getElementById(id);
    nodo.classList.toggle('margenGrande');
}

function masEventos(id) {
    let nodo = document.getElementById(id);
    nodo.classList.toggle('tamanoLetra');
}

function muestraMensaje() {
alert('Gracias por pinchar');
}