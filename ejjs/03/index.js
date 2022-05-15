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