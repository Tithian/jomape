var $rnd = function() {return (Math.random() * 50 + 25) | 0;};
var boton_encendido = document.getElementById("boton");

const TypeWriter = function(contenedor, texto, end_callback=undefined) {
    this.contenedor = document.createElement('q');
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
document.addEventListener('keydown', logKey);

function nextStep(input_text){
    console.log(input_text);
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


function encender() {
        chk_screen = salida.style.display;
        if (chk_screen!="block"){
            salida.style.display = "block";
            only_number = true;
            const texto = "Bienvenido a la consola de comandos definitiva. Inserte cualquier texto por teclado, no servirá para nada.";
            var contenedor = document.getElementById("salida");
            new TypeWriter(contenedor, texto, function (){
                input = document.createElement('q');
                console.log(input);
                contenedor.appendChild(input);
            });
        }

}