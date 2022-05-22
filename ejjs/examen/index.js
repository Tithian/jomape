function ejercicio01() {
	let entrada = ent1.value;
	let operacion = sumaDivisores(entrada);
	uno.innerHTML = operacion;
}

function subirNota01 () {
	let entrada = ent2.value;
	arr = []
	for(let i=2;i<=entrada;i++) {
		if(perfecto(i)===true) {
			arr.push(i);
		}
	}
	nota.innerHTML = arr.join(', ');
}

function ejercicio02() {
	let entrada = ent3.value;
	let operacion = deViaje(entrada)
	texto1 = "Precio por alumno: "
	texto2 = "Total: "
	total = operacion*entrada
	dos.innerHTML = texto1+"<br>"+operacion.toFixed(2)+" €<br><br>"+texto2+total.toFixed(2)+" €"
}

// ver el HTML para entender que está pasando.
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
	console.log(input_group);
	if(input_group !== "") {
		entry.textContent = input_group+album;
		grupazos.appendChild(entry);
	} else if(input_dispo !=="") {
		entry.textContent = input_dispo+album;
		grupazos.appendChild(entry);
	} else {
		alert("Inserte al menos un grupo.")
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

function deViaje(n) {
	switch(true) {
		case(n>=100):
			return 65
		case(n<100 && n>=50):
			return 70
		case(n<50 && n>=30):
			return 65
		case(n<30):
			return 4000/n
	}
}

function sumaDivisores(n) {
	let total = 0;
	for(let i=0;i<n;i++) {
		if(n%i === 0) {
			total += i;
		}
	}
	return total
}

function perfecto(n) {
	chk = sumaDivisores(n)
	if(chk == n) {
		return true
	} else
		return false
}

function salida(ej) {
	out = document.createElement('div');
	out.setAttribute('id',ej);
	out.setAttribute('class','respuesta');
	return out
}