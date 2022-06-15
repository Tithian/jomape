let fecha = new Date()
meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
dias = ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"]

const un_dia = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

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



function trolearAPaco(num) {
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
const un_dia = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

respuesta = ""
fecha_ini = "2022-01-01"
fecha_fin = "2022-"+num+"-01"


a = Date.parse(fecha_ini);
b = Date.parse(fecha_fin);

mes = meses[(num%30)-1]
dias = Math.floor((b-a)/un_dia)

respuesta = "Sería el mes "+mes+" y han pasado "+dias+" dias."

return respuesta
}