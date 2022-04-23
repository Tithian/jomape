// Esta variable genera un número aleatorio entre 50 y 75 que usaremos como delay en la escritura.
var $rnd = function() {return (Math.random() * 50 + 25) | 0;};
// El nombre de usuario
var username = "";
var ejercicio = 0;


const TypeWriter = function(contenedor, texto, end_callback=undefined) {
    this.contenedor = document.createElement('q');
    this.contenedor.setAttribute("id", "ia");
    console.log(this.contenedor);
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
        this.contenedor.innerHTML = "TR011TERM> "
        this.contenedor.innerHTML += this.texto.substring(0, this.indice);
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
	username = String(input_text).substring(2, input_text.length);
    let regex = /^[A-Za-z]+$/;
    if (username.match(regex) && ejercicio===0) {
        ejercicio+=1;
        ejercicio01();
		} else if (ejercicio===0 && username==="") {
			username = "Insignificus";
			ejercicio01();
		} else if (ejercicio===0) {
			clear();
			var texto = "Inserte un nombre sin espacios.";
            var contenedor = output;
            new TypeWriter(contenedor, texto, function (){
                only_number = false;
                input = document.createElement('q');
                input.innerHTML = "> ";
                contenedor.appendChild(input);
                input.setAttribute("id", "user");
            });
		} else if (ejercicio===1) {
			console.log("Resultado 1: "+input_text);
		}
    }


function logKey(e){
    if (input === undefined) return;
    e = e || window.event;
    // use e.keyCode
    let input_text = input.textContent;
    if((e.code === 'Delete' || e.code === 'Backspace') && input_text!=username+">") {
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
            only_number = true;
            var texto = "Iniciando terminal.......<br> Cargando diálogo de besugos......... <br> ¿Sabes cuantos son 8 hobbits?....... <br> .................................... <br> 1 Hobbyte.<br> Por favor, ingrese su nombre de usuario (No puede contener espacios).";
            var contenedor = output;
            new TypeWriter(contenedor, texto, function (){
                only_number = false;
                input = document.createElement('q');
                input.innerHTML = "> ";
                contenedor.appendChild(input);
                input.setAttribute("id", "user");
            });
        }

}

function ejercicio01 () {
	console.log("EJER: "+ejercicio);
	clear();
	texto2 = "Introducir un número y determinar si está comprendido entre 1 y 10.";
	var contenedor = output;
	new TypeWriter(contenedor, texto2, function () {
        only_number = false;
        input = document.createElement('q');
        input.innerHTML = username+"> ";
        contenedor.appendChild(input);
        input.setAttribute("id", "user");
	});

}

