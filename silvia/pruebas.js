// Lotería
function loteria(cantidad, min, max) {
	var numeros = [];
	for (let i=0;i<cantidad;i++) {
		var randomNumber = Math.floor(Math.random() * (max-min)) + min;
		if (numeros.includes(randomNumber)) {
			i--;
		} else {
			numeros.push(randomNumber)
		}
	}
	return numeros.join(" - ");
}

// Segundo más grande
function segundoMasGrande(listadenumeros) {
	var maximo;
	var segundo_maximo;
}

// Meses
function mostrarMeses(){

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (i=0; i<; i++){

        document.write(meses[i]);
        document.write("</br>");
    }
}