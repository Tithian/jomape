function ejercicio01(e1,e2) {
	r1.innerHTML = ""
	if (amigos(e1,e2)===true) {
		r1.innerHTML = "¡Son amigos!"
	} else {
		r1.innerHTML = "Son gilipollas."
	}
}

function ejercicio02() {
	let personas = e2i1.value;
	let precio = coste(personas)
	let pb = bolas(personas);
	let totalbolas = pb*personas
	texto_coste = "Coste total: "+precio.toFixed(2).replace(/0+$/,"")+" €"+"<br>"
	texto_bolas = "Bolas por persona: "+pb+"<br>"
	texto_totalbolas = "Total de bolas: "+totalbolas
	dos.innerHTML = texto_coste+texto_bolas+texto_totalbolas
}

function coste(p) {
	total = p*50
	switch(true) {
		case(p>10):
			return total *= 0.95
			break;
		case(p>20):
			return total *= 0.9
			break;
		default:
		    return total
	}
}
function bolas(p) {
	b=100*p
	for(i=1;i<=p;i++) {
		if(i%5===0) {
		b+=100
		}
	}
	return Math.floor(b/p)
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

function amigos(n1,n2) {
	if(sumaDivisores(n1) == n2 && sumaDivisores(n2) == n1) {
		return true
	} else
		return false
}

function changeText() {
	if(ej03.innerHTML!=="Los Manantiales - ASIR1") {
		ej03.innerHTML = "Los Manantiales - ASIR1"
	} else {
		ej03.innerHTML = "Jose Antonio Macías Pérez"
	}
}

function moreSize() {
	ej03.style.zoom="120%";
	ej03.style.color="white";
}
function lessSize() {
	ej03.style.zoom="100%";
	ej03.style.color="#00ed8a";
}