// Esta variable genera un número aleatorio entre 50 y 75 que usaremos como delay en la escritura.
var $rnd = function() {return (Math.random() * 50 + 25) | 0;};
// El nombre de usuario
var username = "";
var ejercicio = 0;
var resultado = "";
var calification = "";
var num1 = 0;
var num2 = 0;
var num3 = 0;


const TypeWriter = function(contenedor, texto, end_callback=undefined) {
    this.contenedor = document.createElement('q');
    this.contenedor.setAttribute("id", "ia");
    contenedor.appendChild(this.contenedor);
    this.texto = texto;
    this.indice = 0;
    this.end_callback = end_callback;
    this.type();
}
// Type Method
TypeWriter.prototype.type = function () {
    // Inserta texto en el HTML
    if(this.contenedor === undefined) return;
    if(this.indice <= this.texto.length) {
        this.contenedor.innerHTML = this.texto.substring(0, this.indice);
        this.indice++;
        setTimeout(() => this.type(), $rnd());
    } else {
        this.contenedor.appendChild(document.createElement('br'));
        if(typeof(this.end_callback) === 'function') {
            this.end_callback();
        };
    }
}
TypeWriter.prototype.clear = function () {
    this.contenedor.remove();
}


// Init On DOM Load
var input, only_number=true, require_input=true;


function nextStep(input_text){
	switch (ejercicio) {
	case 0:
		let regex = /^[A-Za-z]+$/;
		if (input_text.match(regex)) {
			username = input_text
			ejercicio+=1;
			require_input=true;
            ejercicio01();
		} else if (input_text==="") {
			username = "Insignificus";
			ejercicio+=1;
			require_input=true;
			ejercicio01();
		} else {
			console.log(input_text);
			clear();
			var texto = "Inserte un nombre sin espacios.";
			let termprompt = output.innerHTML = "<span>TERMINAL></span>";
            var contenedor = output;
            new TypeWriter(contenedor, texto, function (){
                only_number = false;
                userprompt = document.createElement('span');
                userprompt.innerHTML = username+">"
                input = document.createElement('q');
                contenedor.appendChild(input);
            });
		}
	break;
	case 1:
		if (input_text>=0 && input_text<=10) {
			ejercicio+=1;
			ejercicio02();
		} else {
			ejercicio01();
		}
	break;
	case 2:
		if (input_text<0) {
			resultado = "El número ingresado es NEGATIVO. ";
			ejercicio02();
		} else if (input_text>0) {
			resultado = "El número ingresado es POSITIVO. ";
			ejercicio02();
		} else if (input_text.toLowerCase()==="continuar") {
			ejercicio+=1;
			ejercicio03();
		} else {
			ejercicio02();
		}
	break;
	case 3:
		if (input_text.toLowerCase().search("num1")!=-1) {
			resultado = String(input_text).replace("num1", "");
			num1 = parseFloat(resultado);
			ejercicio03();
		} else if (input_text.toLowerCase().search("num2")!=-1) {
			resultado = String(input_text).replace("num2", "");
			num2 = parseFloat(resultado);
			ejercicio03();
		} else if (input_text.toLowerCase().search("num3")!=-1) {
			resultado = String(input_text).replace("num3", "");
			num3 = parseFloat(resultado);
			ejercicio03();
		} else if (input_text.toLowerCase()==="continuar") {
			ejercicio+=1;
			num1 = 0;
			num2 = 0;
			num3 = 0;
			ejercicio04();
		} else {
			ejercicio03();
		}
	break;
	case 4:
		if (input_text.toLowerCase().search("num1")!=-1) {
			resultado = String(input_text).replace("num1", "");
			num1 = parseFloat(resultado);
			ejercicio04();
		} else if (input_text.toLowerCase().search("num2")!=-1) {
			resultado = String(input_text).replace("num2", "");
			num2 = parseFloat(resultado);
			ejercicio04();
		} else if (input_text.toLowerCase().search("num3")!=-1) {
			resultado = String(input_text).replace("num3", "");
			num3 = parseFloat(resultado);
			ejercicio04();
		} else if (input_text.toLowerCase()==="continuar") {
			ejercicio+=1;
			num1 = 0;
			num2 = 0;
			num3 = 0;
			ejercicio05();
		} else {
			ejercicio04();
		}
	break;
	case 5:
		switch (true) {
		case(input_text>=0 && input_text<16.75):
			calification = "MUY DEFICIENTE <p>No vale ni para estar acostado</p>";
			ejercicio05();
		break;
		case(input_text>=16.75 && input_text<41.75):
			calification = "Insuficiente. <p>Está perdiendo el tiempo</p>";
			ejercicio05();
		break;
		case(input_text>=41.75 && input_text<50):
			calification = "Suficiente Bajo. <p>Pero está suspenso igualmente</p>";
			ejercicio05();
		break;
		case(input_text>=50 && input_text<58.25):
			calification = "Suficiente. <p>Hay que aprobarlo por obligación</p>";
			ejercicio05();
		break;
		case(input_text>=58.25 && input_text<66.75):
			calification = 'Bien. <p>Poner en la lista de "Mediocres"</p>';
			ejercicio05();
		break;
		case(input_text>=66.75 && input_text<75):
			calification = "Notable Bajo. <p>Llegará lejos, pero por el camino equivocado</p>";
			ejercicio05();
		break;
		case(input_text>=75 && input_text<83.25):
			calification = "Notable. <p>Permitirle respirar de vez en cuando</p>";
			ejercicio05();
		break;
		case(input_text>=83.25 && input_text<91.75):
			calification = 'Notable Alto. <p>Poner en la lista de "Favoritos"';
			ejercicio05();
		break;
		case(input_text>=91.75 && input_text<=100):
			calification = "Sobresaliente. <p>El alumno es un crack, bajarle la nota para que no se lo tenga tan creído</p>";
			ejercicio05();
		break;
		case(input_text.toLowerCase()==="continuar"):
			ejercicio+=1;
			ejercicio06();
		break;
		default:
			ejercicio05();
		break;
		}
	break;
	case 6:
		if (input_text.toLowerCase()==="continuar") {
			ejercicio+=1;
			ejercicio07();
		} else {
			ejercicio06();
		}
	break;
	case 7:
		if (input_text.toLowerCase()==="continuar") {
			ejercicio+=1;
			ejercicio08();
		} else {
			ejercicio07();
		}
	break;
		case 8:
		if (input_text.toLowerCase()==="continuar") {
			ejercicio+=1;
			ejercicio09();
		} else if (input_text.toLowerCase()==="demostrar") {
			ejercicio07();
		}
	break;
	}
}


function logKey(e){
    if (input === undefined) return;
    e = e || window.event;
    // use e.keyCode
    let input_text = input.textContent;
    if(e.code === 'Delete' || e.code === 'Backspace') {
        input.textContent = input_text.substring(0, input_text.length - 1);
    }else if(e.code === 'Enter') {
        if(require_input && input.textContent.length === 0){
            return;
        }
        input.innerHTML += '<br>';
        input = undefined;
        nextStep(input_text);
    }else if(e.key === ' ' && input.textContent.endsWith(' ')) {
        // Only one space is allowed
    } else if (e.key.length === 1){
        if(!only_number || /\d/.test(e.key)){
            input.textContent += e.key;
        }
    }
}

//document.addEventListener('DOMContentLoaded', init);
// Init App
//function init() {
//    only_number = false;
//    const texto = "Bienvenido al examen de comandos de Linux Rosalía \"Dark Souls Distrb.\".";
//    new TypeWriter(contenedor, texto, function (){
//        input = document.createElement('q');
//        contenedor.appendChild(input);
//    });
//}

function clear() {
	output.innerHTML = "";
}

function encender() {
		document.addEventListener('keydown', logKey);
        if (output.style.display!="block"){
            output.style.display = "block";
            button_term.style.backgroundImage="url('./src/bottom.png')"
//            Iniciando terminal.......<br> Cargando diálogo de besugos......... <br> ¿Sabes cuantos son 8 hobbits?....... <br> .................................... <br> 1 Hobbyte.<br> Por favor,
            var texto = "ingrese su nombre de usuario (No puede contener espacios).";
            let termprompt = output.innerHTML = "<span>TERMINAL></span>";
            var contenedor = output;
            new TypeWriter(contenedor, texto, function (){
                only_number = false;
                require_input = false;
                output.innerHTML += "<span>"+username+">"+"</span>";
                input = document.createElement('q');
                contenedor.appendChild(input);
                input.setAttribute("id", "user");
            });
        }

}

function ejercicio01 () {
	clear();
	texto = "Introduzca un número comprendido entre 1 y 10 (Ambos están incluidos en el rango).";
	let termprompt = output.innerHTML = "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function ejercicio02 () {
	clear();
	texto = resultado+"Introduzca un número, para mostrar si es positivo o negativo.<br> Para seguir con el programa introduzca: continuar.";
	let termprompt = output.innerHTML = "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function ejercicio03 () {
	clear();
	num1 += 0;
	num2 += 0;
	num3 += 0;
	var nums = [num1, num2, num3];
	let biggest = nums.sort(function(a, b){return b-a});
	let prompt_nums = output.innerHTML="<p id='numarray'>"+biggest[0]+"</p>"+
										"<p>Este programa muestra ordenados solo el MAYOR tres números.</p><p>Número1: "
										+num1+"</p><p>Número2: "+num2+"</p><p>Número3: "+num3+"</p>";
	texto = "Para cambiar el valor de un número, introduzca:<br> numX seguido del número deseado <br>(donde X es el número que desea cambiar)<br>"+
			"(Ej: num1 -27.283).<br>Para seguir con el programa introduzca: continuar";
	let termprompt = output.innerHTML += "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function ejercicio04 () {
	clear();
	num1 += 0;
	num2 += 0;
	num3 += 0;
	var nums = [num1, num2, num3];
	let prompt_nums = output.innerHTML="<p id='numarray'>"+nums.sort(function(a, b){return a-b})+"</p>"+
										"<p>Este programa muestra ordenados de MENOR a MAYOR tres números.</p><p>Número1: "
										+num1+"</p><p>Número2: "+num2+"</p><p>Número3: "+num3+"</p>";
	texto = "Para cambiar el valor de un número, introduzca:<br> numX seguido del número deseado <br>(donde X es el número que desea cambiar)<br>"+
			"(Ej: num1 -27.283).<br>Para seguir con el programa introduzca: continuar";
	let termprompt = output.innerHTML += "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function ejercicio05 () {
	clear();
	let prompt_nums = output.innerHTML="<p id='numarray'>"+calification+"</p>"+
										"<p>Este programa muestra una nota alfabética según el criterio original de la Liga de Profesores Villanos.</p>";
	texto = "Introduzca una nota numérica entre 0 y 100 (ambos inclusive) para obtener la calificación.<br>Para seguir con el programa introduzca: continuar";
	let termprompt = output.innerHTML += "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function impares(l, r) {
    let arr = [];
    while (l <= r) {
        arr.push(l);
        l += 1;
    };
    return arr.filter(n => n % 2);
}

function ejercicio06() {
	clear();
	imp = impares(100,200);
	texto = "Observa sin poder escribir continuar, como imprimo los números impares comprendidos entre 100 y 200.<br>// ";
	for (let i = 0; i < imp.length; i++) {
	  texto+=imp[i]+" // ";
	};
	texto += "<br>Para seguir con el programa introduzca: continuar";
	let termprompt = output.innerHTML += "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function multiplosDe(l, r, m) {
    let arr = [];
    for(let i=l; i<r; i++) {
        if(i % m === 0){
            arr.push(i);
        }
	}
	return arr;
}

function ejercicio07() {
	clear();
	mul = multiplosDe(1,100,3);
	texto = "Observa sin poder escribir continuar, como imprimo los múltiplos de tres comprendidos entre 1 y 100.<br>// ";
	for (let i = 0; i < mul.length; i++) {
	  texto+=mul[i]+" // ";
	};
	texto += "<br>Para seguir con el programa introduzca: continuar";
	let termprompt = output.innerHTML += "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}

function sumaMultiplosDeCinco(l, r) {
    let sum = 0;
    for(let i=l; i<r; i++) {
        if(i % 5 === 0){
            sum+=i;
        }
	}
	return sum;
}

function ejercicio08() {
	clear();
	var demostrar = "";
	let prompt_dem = output.innerHTML = "<p>"+demostrar+"<p>";
	mul = sumaMultiplosDeCinco(1,100);
	let prompt_cal = output.innerHTML += "<p id='numarray'>"+mul+"</p>";
	texto = "Este programa calcula la suma de todos los múltiplos de 5 comprendidos entre 1 y 100.<br>";
	texto += "<br>Para seguir con el programa introduzca: continuar";
	texto += "<br>Si no está de acuerdo con el resultado introduzca: demostrar"
	let termprompt = output.innerHTML += "<span>TERMINAL></span>";
	var contenedor = output;
	new TypeWriter(contenedor, texto, function () {
        only_number = false;
		output.innerHTML += "<span>"+username+">"+"</span>";
        input = document.createElement('q');
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});
}