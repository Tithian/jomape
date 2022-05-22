let fecha = new Date()
meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
dias = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"]

year = fecha.getFullYear()
mes = meses[fecha.getMonth()]
diaSemana = dias[fecha.getDay()]
diaNumero = fecha.getDate()
hora24 = fecha.getHours()
function horaMeridian(hora24) {
	let h;
	if(hora24<=12) {
		h = hora24 +" AM"
		return h
	} else if(hora24>12 && hora24<=24) {
		h = hora24-12
		h = h +" PM"
		return h
	} else {
		return
	}
}

