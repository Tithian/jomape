var $rnd = function() {return (Math.random() * 50 + 25) | 0;};

const TypeWriter = function(contenedor, texto, wait = $rnd()) {
    this.contenedor = contenedor;
    this.wait = wait;
    this.texto = texto;
    this.indice = 0;
    this.finish = texto.length;
    this.type();
        console.log("Contenedor: "+this.contenedor);
        console.log("Texto:"+this.texto);
        console.log(this.finish);
    this.isDeleting = false;
}
// Type Method
TypeWriter.prototype.type = function () {
    console.log("ACTUAL: "+this.indice);
    console.log("Total: "+this.finish);

    // Inserta texto en el HTML
    if(this.indice<this.finish) {
        this.contenedor.innerHTML += `<span class="txt">${this.texto[this.indice]}</span>`;
        this.indice++;
    }

    // Velocidad
    let typeSpeed = $rnd();

    setTimeout(() => this.type(), this.wait);

/*    if(this.isDeleting) {
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
    }*/

}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const contenedor = document.getElementById("consola");
    const texto = "Bienvenido al examen de comandos de Linux Rosalía \"Dark Souls Distrb.\". Introduce un comando que pare la guerra en Ucrania, que busque en el mundo solo las bolas de dragón comprendidas entre 2-5 estrellas ordenado de forma inversa y envía el documento sin machacar su contenido al correo de Joe-Biden con el asunto \"Que te jodan Biden\". Ovbiamente todo en una sola línea.";
    wait  = $rnd();

    new TypeWriter(contenedor, texto, wait);
}

/*
// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if(this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if(this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if(!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if(this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// }


// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
*/