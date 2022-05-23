function ejercicio01() {
	let entrada = e1i1.value;
	let operacion = sumaDivisores(entrada);
	r1.innerHTML = operacion;
}

function subirNota01 () {
	let entrada = eNi1.value;
	let entrada2 = eNi2.value;
	arr = []
	for(let i=entrada;i<=entrada2;i++) {
		if(perfecto(i)===true) {
			arr.push(i);
		}
	}
	nota.innerHTML = arr.join(', ');
}

function ejercicio02() {
	let salario = e2i1.value;
	let anyos = e2i2.value;
	let operacion = sueldo(salario,anyos)
	texto = "Sueldo Actual: "
	dos.innerHTML = texto+operacion.toFixed(2).replace(/0+$/,"")+" €"
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

function changeColor() {
    color = ecolors.value
    ej03.setAttribute("style","background:"+color)

}