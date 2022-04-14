//
//var bind = Function.prototype.bind,
//  $append = bind.call(Element.prototype.appendChild, document.querySelector("output")),
//  $erase = bind.call(Element.prototype.removeChild, document.querySelector("output")),
//  $new = bind.call(Document.prototype.createElement, document),
//  $text = bind.call(Document.prototype.createTextNode, document),
//  $rnd = function () {return (Math.random() * 125 + 0) | 0;},
//  $promise = function (thenFn) {
//    var args,
//      promise,
//      wait,
//      slice = Array.prototype.slice,
//      isResolved = false;
//    var promise = {
//      clear: function () {
//        rmv = $remove;
//        return promise;
//      },
//      wait: function (ms) {
//        wait = ms;
//        return promise;
//      },
//      then: function () {
//        args = slice.call(arguments);
//        return (promise = $promise(thenFn));
//      },
//      resolve: function () {
//        isResolved = true;
//        if (args) {
//          var next = Function.prototype.bind.apply(
//            thenFn,
//            [undefined].concat(args).concat([promise])
//          );
//          wait ? setTimeout(next, wait) : next();
//        }
//      }
//    };
//    return promise;
//  };
//
//var process = function (target, chars, promise) {
//  var first = chars[0],
//    rest = chars.slice(1);
//  if (!first) {
//    promise.resolve();
//    return;
//  }
//  target.appendChild(first);
//  setTimeout(process.bind(undefined, target, rest, promise), $rnd());
//};
//
//var type = function (text, promise) {
//  var chars = text.split("").map($text);
//  promise = promise || $promise(type);
//  $append($new("br"));
//  process($append($new("q")), chars, promise);
//  return promise;
//};
//
//type("Testing....")
//  .wait(500)
//  .then("This is just a test...")
//  .then("This is *only* a test...")
//  .wait(1500)
//  .then(
//    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tellus aliquet, eleifend mi id, malesuada massa. Nam sit amet nunc ut nulla elementum tempor eu ut ipsum. Suspendisse eget augue sollicitudin, adipiscing dui sed, blandit nulla. Donec tempor vehicula nisi at molestie. Vestibulum interdum sem arcu, vitae sodales libero gravida et. Suspendisse pretium consectetur augue at lacinia. Ut urna lectus, tincidunt ut elit vitae, egestas egestas ipsum. Maecenas gravida tortor eget metus pulvinar sodales. Cras vitae nisi nec felis varius auctor. Donec semper aliquam mollis."
//  )
//  .wait(1000)
//  .clear();

var $rnd = function() {return (Math.random() * 125 + 0) | 0;};

const TypeWriter = function(txtElement, texto, wait = $rnd()) {
    this.txtElement = txtElement;
    this.texto = texto;
    this.wait = wait;
    this.type();
    this.isDeleting = false;
}
// Type Method
TypeWriter.prototype.type = function () {
    const fullTxt = this.texto
    // Comprobando si borra o no
    if(this.isDeleting) {
        // Borra un caracter
        this.txt = fullTxt[0];
    } else {
        // Añade caracter
        this.txt = fullTxt[0];
    }
    // Inserta texto en el HTML
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Velocidad
    let typeSpeed = $rnd();

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // Comprobar que ha terminado el texto
    if(!this.isDeleting && this.txt === fullTxt) {
        // Hace una pausa al final
        typeSpeed = this.wait;
        // Cambiar isDeleting a True
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Pausa antes de escribir
        typeSpeed *= 4;
    }

}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector("output");
    const texto = "Probando 1 2 3";
    wait  = $rnd();

    new TypeWriter(txtElement, texto, wait);
}

/*

var salida = document.querySelector("#salida");
var br = document.createElement("br");
var linea = document.createElement("q");
var consola = document.getElementById("consola");

function rand() {
    return (Math.random() * 125 + 0) | 0;
}

function appending(element) {
    salida.appendChild(element);
}

function escrib(letra) {
    setTimeout(consola.innerHTML+=letra, 100);
}



appending(br);
appending(linea);
var enun = "Erase una vez";

function write() {
    for (let i = 0; i < enun.length; i++) {
        linea;
        linea.id = "q"+i;
        setTimeout(document.getElementById("q"+i).innerHTML = enun[i], 1000);
    }
}
*/
