// Esta variable genera un número aleatorio entre 50 y 75 que usaremos como delay en la escritura.
const $rnd = function () {
  return (Math.random() * 50 + 25) | 0;
};

// El nombre de usuario
var username = "";
var prompt_output = '> ';
var prompt_input = '> ';
var extra = false;
const CONTINUAR = "\nPara seguir con el programa introduzca: continuar.";

class Prompt {
  constructor(contenedor, prompt) {
    let base = document.createElement('q');
    base.innerText = prompt;
    this.contenedor = document.createElement('span');
    base.appendChild(this.contenedor);
    contenedor.appendChild(base);
  }
  clear() {
    this.contenedor.textContent = '';
  }
  read(){
    return this.contenedor.textContent;
  }
}

class TypeWriter extends Prompt {
  constructor(contenedor, texto, end_callback = undefined) {
    super(contenedor, prompt_output);
    this.texto = texto;
    this.indice = 0;
    this.end_callback = end_callback;
    this.type();
  }
  type() {
    // Inserta texto en el HTML
    if (this.contenedor === undefined) return;

    if (this.indice <= this.texto.length) {
      this.contenedor.innerText = this.texto.substring(0, this.indice);
      this.indice++;
      setTimeout(() => this.type(), $rnd());
    } else {
      this.contenedor.parentElement.appendChild(document.createElement('br'));
      if (typeof (this.end_callback) === 'function') {
        this.end_callback();
      }
    }
  }
}

var input=undefined;
class ConsoleInput extends Prompt {
  constructor(contenedor, callback=undefined,
              only_number=false, require_input=true,
              allow_float=true, unsigned=false, validator_function=undefined) {
    if(input!==undefined) input.detach();
    super(contenedor, prompt_input);
    input = this;
    this.callback = callback;
    this.only_number = only_number;
    this.require_input = require_input;
    this.allow_float = allow_float;
    this.unsigned = unsigned;
    this.validator_function = validator_function;
    this.listener = this.key_logger.bind(this);
    document.addEventListener('keydown', this.listener);
  }
  detach(){
    document.removeEventListener('keydown', this.listener);
  }
  key_logger(e) {
    if (this.contenedor === undefined) return;
    e = e || window.event;
    // use e.keyCode
    let input_text = this.read();
    if (typeof this.validator_function === 'function'){
      if(this.validator_function(e, this) === false){
        return;
      }
    }
    let key = e.key;
    if (['Delete', 'Backspace'].indexOf(e.code) !== -1) {
      this.contenedor.textContent = input_text.substring(0, input_text.length - 1);
    } else if ([ 'Enter', 'NumpadEnter'].indexOf(e.code) !== -1) {
      if (this.require_input && input_text.length === 0) {
        return;
      }
      this.contenedor.parentElement.appendChild(document.createElement('br'));
      this.detach();
      if (typeof (this.callback) === 'function') {
        this.callback(input_text, this);
      }
    } else if (key === ' ' && input_text.endsWith(' ')) {
      // Only one space is allowed
    } else if (key.length === 1) {
      let add = !this.only_number;
      if (/\d/.test(key)) {
        add = true;
      } else if (this.only_number) {
        if (!this.unsigned && key === '-' && input_text.length === 0) {
          add = true;
        } else if (
          this.allow_float &&
          input_text.length > 0 &&
          [".", ","].indexOf(key) !== -1 &&
          input_text.indexOf('.') === -1
        ) {
          if(key === ','){
            key = '.';
          }
          add = true;
        }
      }
      if (add) {
        this.contenedor.textContent += key;
      }
    }
  }
}


function clear() {
  output.innerHTML = "";
}

function encender() {
  // document.addEventListener('keydown', logKey);
  if (output.style.display != "block") {
    output.style.display = "block";
    button_term.style.backgroundImage = "url('./src/bottom.png')";
    let texto = "Iniciando terminal.......";
    new TypeWriter(output, texto, function () {
      ejercicio00();
    });
  }
}

function ejercicio00(input_text){
  if(input_text !== undefined) {
    if (input_text === "") {
      input_text = "Insignificus";
    }
    let regex = /^[A-Za-z0-9]+$/;
    if (input_text.match(regex)) {
      username = input_text;
      prompt_input = username + '> ';
      clear();
      ejercicio01();
    } else {
      clear();
      ejercicio00();
    }
  } else {
    new TypeWriter(output, "Por favor, ingrese su nombre de usuario (No puede contener espacios).", function () {
      new ConsoleInput(output, ejercicio00, false, false);
    });
  }
}

function ejercicio01(input_text) {
  if(input_text !== undefined) {
      let as_float = parseFloat(input_text);
      if (as_float < 1 || as_float > 10){
        new TypeWriter(output, "Parece que no sabes los numeros "+ username, function (){
          setTimeout(function (){
            clear();
            ejercicio01();
          }, 500);
        });
      } else {
        new TypeWriter(output, "Felicidades "+ username + " el numero es el " + input_text, function (){
          setTimeout(function (){
            clear();
            ejercicio02();
          }, 500);
        });
      }
  } else {
    new TypeWriter(output, "Introducir un número y determinar si está comprendido entre 1 y 10.", function () {
      new ConsoleInput(output, ejercicio01, true, true, false, true);
    });
  }
}

function ejercicio02(input_text) {
  if(input_text !== undefined) {
      // Test input
    let recall = function () {
      setTimeout(function (){
        clear();
        ejercicio02();
      }, 700);
    }
    if(input_text.toLowerCase() === 'continuar'){
      clear();
      ejercicio03();
    } else if (input_text<0) {
      new TypeWriter(output, "El número ingresado es NEGATIVO. ", recall);
    } else if (input_text>0) {
      new TypeWriter(output, "El número ingresado es POSITIVO. ", recall);
		} else {
      new TypeWriter(output, "Por favor introduzca un número. ", recall);
    }
  } else {
    new TypeWriter(output, "Introduzca un número, para mostrar si es positivo o negativo."+CONTINUAR, function () {
      new ConsoleInput(output, ejercicio02, false, true);
    });
  }
}

var num1=0, num2=0, num3=0;
function ejercicio03(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio04();
		return;
		}
	if (input_text.indexOf("num1") === 0) {
		let num = parseFloat(input_text.replace("num1", ""));
		if(!isNaN(num)){
		num1 = num;
		}
	} else if (input_text.indexOf("num2") === 0) {
		let num = parseFloat(input_text.replace("num2", ""));
		if(!isNaN(num)){
		num2 = num;
	}
	} else if (input_text.indexOf("num3") === 0) {
		let num = parseFloat(input_text.replace("num3", ""));
		if(!isNaN(num)){
		num3 = num;
		}
	}
	ejercicio03();
	} else {
		clear();
		let biggest = [num1, num2, num3].sort(function(a, b){return b-a});
		output.innerHTML="<p id='numarray'>"+biggest[0]+"</p>"+
			"<p>Este programa muestra solo el MAYOR tres números.</p>" +
			"<p>Número1: " + num1 + "</p><p>Número2: " + num2 + "</p><p>Número3: " + num3 + "</p>";
		let texto = 'Para cambiar el valor de un número, introduzca:\n numX seguido del número deseado \n' +
			'(donde X es el número que desea cambiar)\n (Ej: num1 -27.283).';
		new TypeWriter(output, texto+CONTINUAR, function () {
			new ConsoleInput(output, ejercicio03, false, true, true, false, function (e, console){
				let current_text = console.read();
				return true;
			});
		});
	}
}

function ejercicio04(input_text) {
  if(input_text !== undefined) {
    input_text = input_text.toLowerCase();
    if (input_text === "continuar") {
			ejercicio05();
      return;
		}
    if (input_text.indexOf("num1") === 0) {
			let num = parseFloat(input_text.replace("num1", ""));
      if(!isNaN(num)){
        num1 = num;
      }
		} else if (input_text.indexOf("num2") === 0) {
			let num = parseFloat(input_text.replace("num2", ""));
      if(!isNaN(num)){
        num2 = num;
      }
		} else if (input_text.indexOf("num3") === 0) {
			let num = parseFloat(input_text.replace("num3", ""));
      if(!isNaN(num)){
        num3 = num;
      }
		}
    ejercicio04();
  } else {
    clear();
    let biggest = [num1, num2, num3].sort(function(a, b){return a-b});
    output.innerHTML="<p id='numarray'>"+biggest+"</p>"+
                     "<p>Este programa muestra separados por comas ordenados de MENOR a MAYOR tres números.</p>" +
                     "<p>Número1: " + num1 + "</p><p>Número2: " + num2 + "</p><p>Número3: " + num3 + "</p>";
	  let texto = 'Para cambiar el valor de un número, introduzca:\n numX seguido del número deseado \n' +
                '(donde X es el número que desea cambiar)\n (Ej: num1 -27.283).';
    new TypeWriter(output, texto+CONTINUAR, function () {
      new ConsoleInput(output, ejercicio04, false, true,
              true, false, function (e, console){
          let current_text = console.read();
          return true;
        });
    });
  }
}

var calification = "";
function ejercicio05(input_text) {
  if(input_text !== undefined) {
    input_text = input_text.toLowerCase();
	switch (true) {
	case(input_text==="continuar"):
		ejercicio06();
	break;
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
		calification = "SOBRESALIENTE. <p>El alumno es un crack, bajarle la nota para que no se lo tenga tan creído</p>";
		ejercicio05();
	break;
	default:
		ejercicio05();
	};
  } else {
    clear();
    let biggest = [num1, num2, num3].sort(function(a, b){return a-b});
    output.innerHTML="<p id='numarray'>"+calification+"</p>"+
                     "<p>Este programa muestra una nota alfabética según el criterio original de la Liga de Profesores Villanos.</p>";
	  let texto = 'Introduzca una nota numérica entre 0 y 100 (ambos inclusive) para obtener la calificación.';
    new TypeWriter(output, texto+CONTINUAR, function () {
      new ConsoleInput(output, ejercicio05, false, true,
              true, false, function (e, console){
          let current_text = console.read();
          return true;
        });
    });
  }
}

function impares(l, r) {
    let arr = [];
    while (l <= r) {
        arr.push(l);
        l += 1;
    };
    return arr.filter(n => n % 2);
}
function ejercicio06(input_text) {
  if(input_text !== undefined) {
    input_text = input_text.toLowerCase();
    if(input_text.toLowerCase() === 'continuar'){
      ejercicio07();
      return;
    }
    ejercicio06;
    }
    else{
        imp = impares(100,200);
	    texto = "Observa sin poder escribir continuar, como imprimo los números impares comprendidos entre 100 y 200.\n\n";
	    comentario = "\nSi te ha gustado mucho, introduzca cualquier otra cosa."
	    for (let i = 0; i < imp.length; i++) {
		  texto+=imp[i]+" // ";
		};
	    new TypeWriter(output, texto+"\n"+CONTINUAR+comentario, function () {
	    new ConsoleInput(output, ejercicio06, false, true);
        });

}
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
var demostrar = "";
function ejercicio07(input_text) {
    if(input_text !== undefined) {
        input_text = input_text.toLowerCase();
        if(input_text === 'continuar'){
            ejercicio08();
            return;
        } else if (input_text === "demostrar") {
            var dem_count = 0;
            demostrar = "No necesito demostrarte nada "+username+". ";
            ejercicio08();
        } else {
            clear();
            ejercicio07();
        }
    } else {
        mul = multiplosDe(1,100,3);
        texto = "Observa sin poder escribir continuar, como imprimo los múltiplos de tres comprendidos entre 1 y 100.\n\n";
        comentario = "\nSi no da crédito a lo que está pasando, introduzca: demostrar."
        for (let i = 0; i < mul.length; i++) {
            texto+=mul[i]+" // ";
        };
        new TypeWriter(output, texto+"\n"+CONTINUAR+comentario, function () {
            new ConsoleInput(output, ejercicio07, false, true);
        });
    }
}
function sumaMultiplosDe(l, r, m) {
    let sum = 0;
    for(let i=l; i<=r; i++) {
        if(i % m === 0){
            sum+=i;
        }
	}
	return sum;
}
function ejercicio08(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if(input_text === 'continuar'){
			ejercicio09();
			return;
        }
		if (input_text === "demostrar" && demostrar === "") {
			dem_count += 1;
			demostrar = "No necesito demostrar nada"
			ejercicio08();
		} else if (input_text === "demostrar") {
			demostrar = "otra cosa"
			ejercicio09();
		}
    ejercicio08();
    } else{
		mul = sumaMultiplosDe(1,100,5);
		output.innerHTML="<p id='numarray'>"+mul+"</p>";
		texto = demostrar+"Este programa calcula la suma de todos los múltiplos de 5 comprendidos entre 1 y 100.\n\n";
		comentario = "\nSi no da crédito a lo que está pasando, introduzca: demostrar.";
		new TypeWriter(output, texto+"\n"+CONTINUAR+comentario, function () {
		new ConsoleInput(output, ejercicio08, false, true);
		});
	}
}

function ejercicio09(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if(input_text === 'continuar'){
			ejercicio11();
			return;
		} else if (input_text === "demostrar") {
			ejercicio10();
			return;
		}
	} else {
		mul = sumaMultiplosDe(1,1000,2);
		output.innerHTML="<p id='numarray'>"+mul+"</p>";
		texto = "Este programa calcula la suma de todos los pares comprendidos entre 1 y 1000.\n\n";
		comentario = "\nSi no da crédito a lo que está pasando, introduzca: demostrar.";
		new TypeWriter(output, texto+"\n"+CONTINUAR+comentario, function () {
		new ConsoleInput(output, ejercicio09, false, true);
		});
	}
}
var mult, sumt;
function ejercicio10(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio11();
		return;
		}
	if (input_text.indexOf("x") === 0) {
		let num = parseFloat(input_text.replace("x", ""));
		if(!isNaN(num)){
		num1 = num;
		}
	} else if (input_text.indexOf("num1") === 0) {
		let num = parseFloat(input_text.replace("num1", ""));
		if(!isNaN(num)){
		num2 = num;
	}
	} else if (input_text.indexOf("num2") === 0) {
		let num = parseFloat(input_text.replace("num2", ""));
		if(!isNaN(num)){
		num3 = num;
		}
	} else if (input_text === "mul") {
		mult = true;
		sumt = false;
	} else if (input_text === "sum") {
		sumt = true;
		mult = false;
	}
	ejercicio10();
	} else {
		summul = sumaMultiplosDe(num2,num3,num1);
		mul = multiplosDe(num2,num3,num1);
		if (sumt === true && mult === false) {
			output.innerHTML="<p id='numarray'>"+summul+"</p>";
			output.innerHTML+="<p>Este programa calcula la suma de todos los múltiplos de X comprendidos entre Número 1 y Número 2.</p>";
		} else {
			output.innerHTML="<p id='mini'><p>";
			output.innerHTML+="<p>Este programa muestra, EN CASO DE HABERLOS, todos los múltiplos de X comprendidos entre Número 1 y Número 2.</p>";
		    for (let i = 0; i < mul.length; i++) {
			    mini.innerHTML+=mul[i]+" // ";
			};
		}
		output.innerHTML += "<p>X: " + num1 + "</p><p>Número 1: " + num2 + "</p><p>Número 2: " + num3 + "</p>";
		texto = "Comandos:\n"+
				"X - cambia el valor de X. (Ejemplo: X -12)\n"+
				"num[x] - cambia el valor del Número indicado (Ejemplo: num1 100)\n"+
				"sum - muestra la suma de los múltiplos comprendidos\n"+
				"mul - muestra todos los múltiplos comprendidos"
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio10, false, true);
		});
	}
}
function evenOddBool (n){
	if ( n % 2 == 0 ) {
		return true;
	}
	else {
		return false;
	}
}

function ejercicio11(input_text) {
if(input_text !== undefined) {
	if(input_text.toLowerCase() === 'continuar'){
		ejercicio12();
		return;
	}
	if(!isNaN(input_text)){
		eo = evenOddBool(input_text);
		if (eo === true) {
			output.innerHTML = "<p id='numarray'>PAR</p>";
		} else {
			output.innerHTML = "<p id='numarray'>IMPAR</p>";
		}
	}
	ejercicio11();
} else {
	new TypeWriter(output, "Introduzca un número, para mostrar si es PAR o IMPAR."+CONTINUAR, function () {
	new ConsoleInput(output, ejercicio11, false, true);
	});
	}
}

function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

function ejercicio12(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio13();
		return;
		}
	if (input_text.indexOf("bas") === 0) {
		let num = parseFloat(input_text.replace("bas", ""));
		if(!isNaN(num)){
			num1 = num;
		}
	} else if (input_text.indexOf("exp") === 0) {
		let num = parseFloat(input_text.replace("exp", ""));
		if(!isNaN(num)){
			num2 = num;
		}
	}
	ejercicio12();
	} else {
		res = power(num1, num2);
		output.innerHTML="<p id='numarray'>"+res+"</p>"+
						"<p>Este programa muestra la potencia de la base y exponente indicados.</p>"+
							"<p>Base: " + num1 + "</p><p>Exponente: " + num2 + "</p>";
		texto = "Comandos:\n"+
				"bas - seguido de un número cambia el valor de Base. (Ejemplo: bas 88)\n"+
				"exp - seguido de un número cambia el valor de Exponente. (Ejemplo: exp 100)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio12, false, true);
		});
	}
}

function ejercicio13(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === 0) {
		ejercicio14();
		return;
		}
	if(!isNaN(input_text)){
		num1 += parseFloat(input_text);
	}
	ejercicio13();
	} else {
		output.innerHTML="<p id='numarray'>Total: "+num1+"</p>";
		texto = "Para continuar introduzca: 0\nIntroduzca cualquier otro número para sumar a Total.";
		new TypeWriter(output, texto, function () {
		new ConsoleInput(output, ejercicio13, true, true);
		});
	}
}

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });
	if(array.length>0){
        return total / count;
    } else {
        return 0;
    }
}
var numbers = []
function ejercicio14(input_text) {
	if(input_text !== undefined) {
		if (input_text === "0") {
			numbers = [];
			ejercicio15();
		return;
		}
	if(input_text === "-") {
		numbers = []
	} else if(input_text!=0 && !isNaN(input_text)){
		numbers.push(parseFloat(input_text));
	}
	ejercicio14();
	} else {
		output.innerHTML="<p id='numarray'>Media: "+calculateAverage(numbers)+"</p>";
		output.innerHTML+="<p id='mini'>Números ingresados: "+numbers+"</p>";
		texto = "Para continuar introduzca: 0\nPara resetear la lista introduzca: -\nIntroduzca cualquier otro número para añadir a la lista y calcular la Media.";
		new TypeWriter(output, texto, function () {
		new ConsoleInput(output, ejercicio14, true, true);
		});
	}
}

function ejercicio15(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "0") {
		ejercicio16();
		return;
		}
	if(input_text === "-") {
		numbers = []
	} else if(!isNaN(input_text)){
		numbers.push(parseFloat(input_text));
	}
	ejercicio15();
	} else {
		let biggest = numbers.sort(function(a, b){return b-a});
		let res2 = String(biggest[0]);
		let smallest = numbers.sort(function(a, b){return a-b});
		let res1 = String(smallest[0]);
		output.innerHTML="<p id='numarray'>Mínimo: "+res1.replace("undefined", "0")+" Máximo: "+res2.replace("undefined", "0")+"</p>";
		texto = "Para continuar introduzca: 0\nPara resetear la lista introduzca: -\nIntroduzca cualquier otro número para añadir a la lista.";
		new TypeWriter(output, texto, function () {
		new ConsoleInput(output, ejercicio15, true, true);
		});
	}
}

function divide(dividend,divisor){
    var result = 0;
    if (divisor === 0 && dividend === 0) {
        return NaN;
    } else if (dividend === 0) {
        return 0;
    } else if (divisor === 0) {
        return dividend > 0 ? Infinity : -Infinity;
    } else {
        while(dividend >= divisor){
            dividend -= divisor;
            result++;
        }
        return result;
    }
}

function ejercicio16(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio17();
		return;
		}
	if (input_text.indexOf("/") === 0) {
		let num = parseFloat(input_text.replace("/", ""));
		if(!isNaN(num)){
			num1 = num;
		}
	} else if (input_text.indexOf("ç") === 0) {
		let num = parseFloat(input_text.replace("ç", ""));
		if(!isNaN(num)){
			num2 = num;
		}
	}
	ejercicio16();
	} else {
		res = divide(num1, num2);
		output.innerHTML="<p id='numarray'>"+res+"</p>"+
						"<p>Este programa divide restando DIVISOR a el DIVIDENDO mientras que el DIVIDENDO sea mayor que el DIVISOR.</p>"+
						"<p>Dividendo: " + num1 + "</p><p>Divisor: " + num2 + "</p>";
		texto = "Comandos:\n"+
				"/ - seguido de un número cambia el valor de Base. (Ejemplo: / 88)\n"+
				"ç - seguido de un número cambia el valor de Exponente. (Ejemplo: ç -15)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio16, false, true);
		});
	}
}

function counter(ar) {
  var counter = [0, 0];
  ar.forEach(function(a) {
    if (a < 0)
      counter[0]++;
    else
      counter[1]++;
  });
  return counter;
}

function ejercicio17(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "0") {
		ejercicio18();
		return;
		}
	if(input_text === "-") {
		numbers = []
	} else if(!isNaN(input_text)){
		numbers.push(parseFloat(input_text));
	}
	ejercicio17();
	} else {
		let count = counter(numbers);
		let neg = String(count[0]);
		let pos = String(count[1]);
		output.innerHTML="<p id='mid'>Negativos: "+neg.replace("undefined", "0")+
						" Positivos: "+pos.replace("undefined", "0")+"</p>";
		output.innerHTML+="<p id='mini'> Números ingresados: "+numbers+"</p>";
		texto = "Para continuar introduzca: 0\nPara resetear la lista introduzca: -\nIntroduzca cualquier otro número para añadir a la lista.";
		new TypeWriter(output, texto, function () {
		new ConsoleInput(output, ejercicio17, true, true);
		});
	}
}

var cuad = "";
function ejercicio18(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio19();
		return;
		}
	if (input_text.indexOf("ini") === 0) {
		let num = parseFloat(input_text.replace("ini", ""));
		if(!isNaN(num)){
			num1 = num;
		}
	} else if (input_text.indexOf("fin") === 0) {
		let num = parseFloat(input_text.replace("fin", ""));
		if(!isNaN(num)){
			num2 = num;
		}
	}
	ejercicio18();
	} else {
		if (num2>num1 && (num2-num1)<=50) {
			cuad = "";
			for (let i=num1; i<=num2; i++) {
				let n = i*i;
				cuad+= n+" // ";
			}
		} else if (num2<num1){
			cuad = "Fin debe ser mayor que Inicio.";
		} else if ((num2-num1)>50) {
			cuad = "El rango máximo permitido es 50.";
		}

		output.innerHTML="<p>Este programa muestra el cuadrado de todos los números comprendidos entre Inicio y Fin.</p>"+
						"<p>Inicio: " + num1 + "</p><p>Fin: " + num2 + "</p>";
		texto = cuad+"\n\nComandos:\n"+
				"ini - seguido de un número cambia el valor de Inicio. (Ejemplo: ini 22)\n"+
				"fin - seguido de un número cambia el valor de Fin. (Ejemplo: fin 105)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio18, false, true);
		});
	}
}

function multiply(n1, n2) {
	var min, max;
	let result = 0
	if (n1>n2) {
	    min = n2;
	    max = n1;
	} else {
	    min = n1;
	    max = n2;
	}
	for (let i = 0; i <max; i++) {
		result += min;
	}
	return result;
}

function ejercicio19(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio20();
		return;
		}
	if (input_text.indexOf("num1") === 0) {
		let num = parseFloat(input_text.replace("num1", ""));
		if(!isNaN(num)){
			num1 = num;
		}
	} else if (input_text.indexOf("num2") === 0) {
		let num = parseFloat(input_text.replace("num2", ""));
		if(!isNaN(num)){
			num2 = num;
		}
	}
	ejercicio19();
	} else {
		let res = multiply(num1, num2);
		output.innerHTML="<p id='numarray'>"+res+"</p>";
		output.innerHTML+="<p>Este programa muestra la multiplicación usando sumas recesivas.</p>"+
						"<p>Factor 1: " + num1 + "</p><p>Factor 2: " + num2 + "</p>";
		texto = cuad+"\n\nComandos:\n"+
				"num1 - seguido de un número cambia el valor de Factor 1. (Ejemplo: num1 22)\n"+
				"num2 - seguido de un número cambia el valor de Factor 2. (Ejemplo: num2 105)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio19, false, true);
		});
	}
}

function ejercicio20(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		ejercicio21();
		return;
		}
	ejercicio20();
	} else {
	    res = "";
		for (let i = 1; i<=5; i++) {
            res +="<br>";
            for(let i = 1; i<=20; i++) {
            res += i+" ";
            }
        }
		output.innerHTML="<p id='norm'>"+res+"</p>";
		output.innerHTML+="<p>He tenido que generar un código para enseñarte a contar hasta 20.</p>"
		new TypeWriter(output, "\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio20, false, true);
		});
	}
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function ejercicio21(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		    ejercicio22();
		    return;
		}
        if (input_text.indexOf("num1") === 0) {
            let num = parseFloat(input_text.replace("num1", ""));
            if(!isNaN(num)){
                num1 = num;
            }
        }
	ejercicio21();
	} else {
	    let res = "";
	    if (isPrime(num1)===true) {
	        res = "ES PRIMO";
	    } else {
	        res = "NO ES PRIMO"
	    }
		output.innerHTML="<p id='numarray'>"+res+"</p>";
		output.innerHTMLñklj+="<p>Número: "+num1+"</p><p>Este programa determina si un número es primo.</p>";
		texto = "num1 - seguido de un número cambia el valor de Factor 1. (Ejemplo: num1 22)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio21, false, true);
		});
	}
}
function multTabla(n) {
    var result = [];
    var step = 0;
    for (let i = 0;i<=10;i++) {
        step = n*i
        result.push(n + " * "+i+" = "+step)
    }
    return result;
}
function ejercicio22(input_text) {
	if(input_text !== undefined) {
		input_text = input_text.toLowerCase();
		if (input_text === "continuar") {
		    ejercicio23();
		    return;
		}
        if (input_text.indexOf("num1") === 0) {
            let num = parseFloat(input_text.replace("num1", ""));
            if(!isNaN(num)){
                num1 = num;
            }
        }
	ejercicio22();
	} else {
	    var res = "";
	    if (num1 === undefined) {
            num1 = 0;
        }
        let tabla = multTabla(num1);
        for (let i=0;i<tabla.length;i++) {
            res += tabla[i]+"<br>";
        }
		output.innerHTML="<p id='mini'>"+res+"</p>";
		output.innerHTML+="<p>Número: "+num1+"</p><p>Este programa muestra la tabla de multiplicar del número indicado.</p>";
		texto = "num1 - seguido de un número cambia el valor de Factor 1. (Ejemplo: num1 22)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio22, false, true);
		});
	}
}

var phr = "";
function ejercicio23(input_text) {
	if(input_text !== undefined) {
		lower = input_text.toLowerCase();
		if (lower === "continuar") {
		    ejercicio24();
		    return;
		}
        if (input_text.indexOf("num1") === 0) {
            let num = parseFloat(lower.replace("num1", ""));
            if(!isNaN(num)){
                num1 = num;
            }
        }if (lower.indexOf("$") === 0) {
            phr = input_text.replace("$", "");
        }
	ejercicio23();
	} else {
	    let res = "";
	    if (num1 === undefined) {
            num1 = 0;
        }
        for (let i=0;i<num1;i++) {
            res += phr+"<br>";
        }
		output.innerHTML="<p id='mini'>"+res+"</p>";
		output.innerHTML+="<p>Número: "+num1+"</p><p>Frase: "+phr+"<p>Este programa muestra una frase tantas veces como el número indicado.</p>";
		texto = "num1 - seguido de un número cambia el valor de Número. (Ejemplo: num1 22)\n$ - seguido de un número cambia el valor de Frase";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio23, false, true);
		});
	}
}

function factorial(n) {
    if(n==1 || n==0) {
        return 1;
    } else if (n<0) {
        return -1;
    } else {
        return n*factorial(n-1);
    }
}

function ejercicio24(input_text) {
	if(input_text !== undefined) {
		lower = input_text.toLowerCase();
		if (lower === "continuar") {
		    ejercicio25();
		    return;
		}
        if (lower.indexOf("num1") === 0) {
            let num = parseFloat(lower.replace("num1", ""));
            if(!isNaN(num)){
                num1 = num;
            }
        }
	ejercicio24();
	} else {
	    let res = factorial(num1);
		output.innerHTML="<p id='mini'>"+res+"</p>";
		output.innerHTML+="<p>Número: "+num1+"</p><p>Este programa muestra el factorial del número introducido.</p>";
		texto = "num1 - seguido de un número cambia el valor de Número. (Ejemplo: num1 22)";
		new TypeWriter(output, texto+"\n"+CONTINUAR, function () {
		new ConsoleInput(output, ejercicio24, false, true);
		});
	}
}

function ejercicio25(input_text) {
	if(input_text !== undefined) {
		lower = input_text.toLowerCase();
		if (lower === "0") {
		    ejercicio26();
		    return;
		}
        let num = parseFloat(lower.replace("num1", ""));
        if(!isNaN(num)){
            num1 = num;
        }

	ejercicio25();
	} else {
		output.innerHTML="<p id='prodlist'></p>"
		var prod_price = num1
		var prod_list = []
		var total = 0
		for(let i=1;i<=100;i++) {
			if (i<=15) {
				total+=prod_price;
				prod_list.push("U:"+i+" P:"+total.toFixed(2)+"€")
			} else if(i>15 && i<=30) {
				let unit = prod_price-(prod_price*0.10)
				total+=unit
				prod_list.push("U:"+i+" P:"+total.toFixed(2)+"€")
			} else if(i>30 && i<=50) {
				let unit = prod_price-(prod_price*0.15)
				total+=unit
				prod_list.push("U:"+i+" P:"+total.toFixed(2)+"€")
			} else {
				let unit = prod_price-(prod_price*0.2)
				total+=unit
				prod_list.push("U:"+i+" P:"+total.toFixed(2)+"€")
			}
		}
		for (let i=1;i<prod_list.length;i++) {
			prodlist.innerHTML+="<p>"+prod_list[i]+"</p>";
		}
		texto = "Introduce un precio numérico para calcular descuentos. Introduzca 0 para continuar";
		new TypeWriter(output, texto, function () {
		new ConsoleInput(output, ejercicio25, true, true);
		});
	}
}
//function ejercicio03(input_text) {
//	if(input_text !== undefined) {
//		input_text = input_text.toLowerCase();
//		if (input_text === "continuar") {
//		ejercicio04();
//		return;
//		}
//	if (input_text.indexOf("num1") === 0) {
//		let num = parseFloat(input_text.replace("num1", ""));
//		if(!isNaN(num)){
//		num1 = num;
//		}
//	} else if (input_text.indexOf("num2") === 0) {
//		let num = parseFloat(input_text.replace("num2", ""));
//		if(!isNaN(num)){
//		num2 = num;
//	}
//	} else if (input_text.indexOf("num3") === 0) {
//		let num = parseFloat(input_text.replace("num3", ""));
//		if(!isNaN(num)){
//		num3 = num;
//		}
//	}
//	ejercicio03();
//	} else {
//		clear();
//		let biggest = [num1, num2, num3].sort(function(a, b){return b-a});
//		output.innerHTML="<p id='numarray'>"+biggest[0]+"</p>"+
//			"<p>Este programa muestra solo el MAYOR tres números.</p>" +
//			"<p>Número1: " + num1 + "</p><p>Número2: " + num2 + "</p><p>Número3: " + num3 + "</p>";
//		let texto = 'Para cambiar el valor de un número, introduzca:\n numX seguido del número deseado \n' +
//			'(donde X es el número que desea cambiar)\n (Ej: num1 -27.283).';
//
//		new TypeWriter(output, texto+CONTINUAR, function () {
//			new ConsoleInput(output, ejercicio03, false, true, true, false, function (e, console){
//				let current_text = console.read();
//				return true;
//			});
//		});
//	}
//}