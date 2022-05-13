var lista = [];
function adding() {
    let elemento = id_elemento.value;
    lista.push(elemento);
}
function showing() {
    let parr = document.createElement('p');
// Crea en javascript
    parr.setAttribute('id', 'magicdavi');
//
    document.body.appendChild(parr);
//  Añade en el HTML esto:  <p id='magicdavi'></p>
    magicdavi.innerHTML = lista;
//    <p id='magicdavi'>[contenido del array lista]</p>
}

