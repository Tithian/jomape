function suma_cuad_dig(n) {
    cadena = String(n);
    lista = cadena.split("");
    let total = 0;

    for(let contador=0; contador<lista.length; contador++){
        let numero = parseInt(lista[contador]);
        let cuadrado = Math.pow (numero, 2);
        total += cuadrado;
    }
    return total;
}

function desbordado(n) {
	if(n < suma_cuad_dig(n)) {
		return true
	} else {
		return false
	}
}

function desglose(kg,fruta,total) {
	texto = kg+" Kg de "+fruta+": "+total+" €."
	return texto+"<br>"
}


function ejercicio01() {
    entrada = e1i1.value
    r1.innerHTML = suma_cuad_dig(entrada);
}

function ejercicio01b() {
	let = entrada = e1i1.value;
	let check = desbordado(parseInt(entrada));
	if (check===true) {
		r1b.innerHTML = "SI"
	} else {
		r1b.innerHTML = "NO"
	}

}

function ejercicio02() {
	const GASTOS_ENVIO = 5
	let peras= parseInt(e2per.value)
	let manzanas= parseInt(e2man.value)
	let fresas= parseInt(e2fre.value)
	let sandias= parseInt(e2san.value)

	total_kilos = peras+manzanas+fresas+sandias
	peras*=3
	manzanas*=2.5
	fresas*=4
	sandias*=1
	if (total_kilos>5) {
		peras *= 0.9;
		manzanas *= 0.9;
		fresas *= 0.9;
		sandias *= 0.9;
	}
	let texto = "";
	let total = 0
	if(peras>0){
		texto += desglose(e2per.value,"peras",peras)
		total += peras
	}
	if(manzanas>0){
		texto += desglose(e2man.value,"manzanas",manzanas)
		total += manzanas
	}
	if(fresas>0){
		texto += desglose(e2fre.value,"fresas",fresas)
		total += fresas
	}
	if(sandias>0){
		texto += desglose(e2san.value,"sandías",sandias)
		total += sandias
	}

	r2.innerHTML = texto
	if(total>0) {
		total += GASTOS_ENVIO
		r2.innerHTML += "<br>Gastos de envío: "+GASTOS_ENVIO+ " €<br>"
	}
	r2.innerHTML += "El total es "+total+" €"
}

i = 1
function enviar() {
	let album = alb.value;
	let input_group = grupo.value;
	let entry = document.createElement('p');
	entry.setAttribute("class", "grouplist");
	if(album !=="") {
		album = ' - '+album
	}
	if(input_group !== "") {
		entry.textContent = i+". "+input_group+album;
		grupazos.appendChild(entry);
		i++
	} else {
		alert("Inserte al menos un grupo.")
	}
}

function cancelar() {
	grupo.value = ""
	alb.value = ""
	let grupos = document.getElementsByClassName("grouplist")
	while(grupos.length>0) {
		grupos[0].remove();
	}
	i=1
}


function bandTip(ent,sal) {
	ent.innerHTML = sal.value;

}