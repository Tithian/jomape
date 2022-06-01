/*
Crea una función llamada sumaDivisores que tendrá como entrada un número
entero n y que devolverá como salida la suma de todos sus divisores incluido el propio número.
Ejemplo: sumaDivisores(8) = 1 + 2 + 4 + 8= 15
*/
const regInt = /^[-+]?\d+$/

function sumaDivisores(n) {
	if(regInt.test(n)) {
		let total = 0;
		for(let i=0;i<=n;i++) {
			if(n%i === 0) {
				total += i;
			}
		}
		return total
	} else {
		return "Ingrese un número entero."
	}
}

/*Crea una función llamada abundante que tendrá como entrada un número
entero n y que devolverá como salida true si el número es abundante y false en
caso contrario. Ejemplo: abundante(8) devuelve true.*/
/*Un número es abundante (o excesivo) si la suma de sus divisores (incluido el
propio número) es mayor que el doble del número. Por ejemplo 12 es abundante
porque sumaDivisores(12)=28>2*12*/
function abundante(e) {
	if(regInt.test(e)) {
		if(e*2<sumaDivisores(e)) {
			return true
		} else {
			return false
		}
	} else {
		return "Ingrese un número entero."
	}
}

/*Crea un formulario que admita un número entero y que al pulsar el botón
muestre en pantalla TODOS los números abundantes desde el 2 hasta el número
introducido.*/


function ejercicio01() {
	let lista = [];
	let entrada = e1i1.value;
	if(regInt.test(entrada)) {
		for(let i=2;i<=entrada;i++) {
			if(abundante(i)) {
				lista.push(i)
			}
		}
		r1.innerHTML = lista.join(", ")+".";
	} else {
		r1.innerHTML = "Ingrese un número entero."
	}

}

/*El presidente de un equipo de fútbol está organizando un viaje para acudir a la
final que su equipo jugará y necesita saber cuánto va a pagar por el servicio en
función del número de aficionados que se inscriban. La capacidad máxima del
avión son 150 pasajeros.
La forma de cobrar es la siguiente: Los 10 primeros pasajeros pagan 50€ por
persona, los 40 siguientes pagan 75€ por persona, los 50 siguientes 100€ por
persona y los 50 últimos pagan 150€ por persona.
Crea un formulario que, introduciendo el número de personas que van a viajar
permita determinar el pago total a la compañía aérea. Dicho importe debe
añadirse justo debajo del formulario como un nodo DOM.*/
function costeVuelo(n) {
	let total = 0
	if(regInt.test(n) && n<=150 && n>0) {
		for(let i=1;i<=n;i++) {
			switch(true) {
				case(i<=10):
					total += 50
					break;
				case(i>10 && i<=50):
					total += 75
					break;
				case(i>50 && i<=100):
					total += 100
					break;
				case(i>100):
					total += 150
					break;
			}
		}
		return total
	} else {
		if(regInt.test(n)) {
			if(n<=0){
				return "Solo queremos gente positiva. <br>&#128522;<br>"
			} else {
				return "No cabe tanta gente en el avión."
			}
		} else {
			return "Ingrese un número entero"
		}

	}
}


function ejercicio02() {
	let pasajeros = e2i1.value;
	let operacion = costeVuelo(pasajeros)
	let parrafo = document.createElement("p")
	parrafo.setAttribute("id", "resp")
	if (isNaN(operacion)) {
		dos.innerHTML = operacion
	} else {
		texto = "Coste del vuelo: "
		parrafo.textContent = operacion.toFixed(2).replace(/0+$/,"")+" €"
		dos.innerHTML = texto
		dos.appendChild(parrafo)
	}
}

function sueldo(s,a) {
	switch(true) {
		case(s<1000 && a >=10):
			return s*1.2
			break;
		case(s<1000 && a<10):
			return s*1.1
			break;
		default:
		    return s*1
	}
}


function perfecto(n) {
	chk = sumaDivisores(n)
	if(chk == n) {
		return true
	} else
		return false
}

function changeColor() {
    color = ecolors.value
    ej03.setAttribute("style","background:"+color)

}

// Ejercicio03
function enviar() {
	let album = alb.value;
	if(album !=="") {
		album = ' - '+album
	}
	if(typeof grupo === "undefined"){

	} else {
		var input_group = grupo.value;
	}
	let input_dispo = mbands.value;
	let entry = document.createElement('li');
	entry.setAttribute("class", "grouplist");
	if(typeof input_group === "undefined"){
		var input_group = ""
	}
	if(input_group !== "" && album !=="") {
		entry.textContent = input_group+album;
		grupazos.appendChild(entry);
	} else if(input_dispo !=="" && album !=="") {
		entry.textContent = input_dispo+album;
		grupazos.appendChild(entry);
	} else if (input_group === ""){
		alert("Inserte al menos un grupo.")
	} else if (album === ""){
		alert("Inserte un album.")
	}
}

function borrar() {
	let indice = bnum.value;
	let grupos = document.getElementsByClassName('grouplist');
	grupazos.removeChild(grupos[indice-1])
}

function cancelar() {
	mbands.value = ""
	alb.value = ""
	bnum.value = ""
	let grupos = document.getElementsByClassName('grouplist');
	while(grupos[0]) {
		grupazos.removeChild(grupos[0])
	}
}