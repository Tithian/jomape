function ejercicio01() {
	let bas = i1.value;
	let exp = i2.value;
	let operacion = potencia(bas,exp);
	uno.innerHTML = operacion;
}
//
function ejercicio02() {
	let entrada = i3.value;
	let chk = par(entrada)
	let salida = "NO"
	if (chk===true) {
		salida = "SI"
	}
	dos.innerHTML = salida
}
//
function ejercicio03() {
	let horas = i4.value;
	let precio = i5.value;
	let mensual = precio*horas
	let anual = mensual*12
	let imp = irpf(anual)
	let neto = mensual-((mensual*imp)/100)
	let netoan = neto*12

	texto1 = "Salario Bruto Mensual:<br>"+mensual+" €.<br><br>"
	texto2 = "Salario Bruto Anual:<br>"+anual+" €.<br><br>"
	texto3 = "IRPF: "+imp+" %<br><br>"
	texto4 = "Salario Neto Mensual:<br>"+neto+" €.<br><br>"
	texto5 = "Salario Neto Anual:<br>"+netoan+" €."
	tres.innerHTML = texto1+texto2+texto3+texto4+texto5
}
//
function ejercicio04() {
	let total = factura(i6.value,i7.value,i8.value,i9.value)
	cuatro.innerHTML = "Total: "+total+" €."
}

function ejercicio05() {
	let mode = document.querySelector("input[name='temp']:checked").value;
	let entrada = e5i1.value;
	let ftc = false;
	let symbol = " ºF";
	if (mode === "farc") {
		symbol = " ºC";
		ftc = true;
	}
	let res = convertir(entrada,ftc);
	cinco.innerHTML = res+symbol
}

function ejercicio06() {
	let ent1 = parseInt(e6i1.value);
	let ent2 = parseInt(e6i2.value);
	let biggest = mayor (ent1,ent2);
	seis.innerHTML = "El mayor es: "+biggest;
}

function ejercicio07() {
	let ent1 = e7i1.value;
	let chk = primo(ent1);
	if (chk === true) {
		siete.innerHTML = "Es Primo";
	} else {
		siete.innerHTML = "No es Primo";
	}
}

function ejercicio08() {
	let ent1 = e8i1.value;
	ocho.innerHTML = "Área: "+area(ent1);
}

function ejercicio09() {
	let ent1 = e9i1.value;
	r9.innerHTML = sumaDivisores(ent1);
}

function ejercicio10() {
	let ent1 = e10i1.value;
	r10.innerHTML = factorial(ent1);
}

function ejercicio11() {
	let ent1 = e11i1.value;
	r11.innerHTML = contar(ent1);
}

function ejercicio12() {
	let ent1 = e12i1.value;
	r12.innerHTML = binario(ent1);
}

//function enviar() {
//	let album = alb.value;
//	if(album !=="") {
//		album = ' - '+album
//	}
//	let input_group = grupo.value;
//	let input_dispo = mbands.value;
//	let entry = document.createElement('li');
//	entry.setAttribute("class", "grouplist");
//	if(input_group !== "") {
//		entry.textContent = input_group+album;
//		grupazos.appendChild(entry);
//	} else if(input_dispo !=="") {
//		entry.textContent = input_dispo+album;
//		grupazos.appendChild(entry);
//	} else {
//		alert("Inserte al menos un grupo.")
//	}
//}
//
//function borrar() {
//	let indice = bnum.value;
//	let grupos = document.getElementsByClassName('grouplist');
//	grupazos.removeChild(grupos[indice-1])
//}
//
//function cancelar() {
//	let grupos = document.getElementsByClassName('grouplist');
//	while(grupos[0]) {
//		grupazos.removeChild(grupos[0])
//	}
//}
//
//function deViaje(n) {
//	switch(true) {
//		case(n>=100):
//			return 65
//		case(n<100 && n>=50):
//			return 70
//		case(n<50 && n>=30):
//			return 65
//		case(n<30):
//			return 4000/n
//	}
//}
//
//function sumaDivisores(n) {
//	let total = 0;
//	for(let i=0;i<n;i++) {
//		if(n%i === 0) {
//			total += i;
//		}
//	}
//	return total
//}
//
//function perfecto(n) {
//	chk = sumaDivisores(n)
//	if(chk == n) {
//		return true
//	} else
//		return false
//}
//
//function salida(ej) {
//	out = document.createElement('div');
//	out.setAttribute('id',ej);
//	out.setAttribute('class','respuesta');
//	return out
// }