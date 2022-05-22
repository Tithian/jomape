/// OPERADORES
//              Operator	    Description
//fixme//       +	            -- Addition
//fixme//       -	            -- Subtraction
//fixme//       *	            -- Multiplication
//fixme//       **	            -- Exponentiation (ES2016)
//fixme//       /	            -- Division
//fixme//       %	            -- Modulus (Division Remainder)
//fixme//       ++	            -- Increment
//fixme//       --	            -- Decrement

// ASIGNADORES
//              Operator	    Description
//fixme//       =	            -- x = y	x = y
//fixme//       +=	            -- x += y	x = x + y
//fixme//       -=	            -- x -= y	x = x - y
//fixme//       *=	            -- x *= y	x = x * y
//fixme//       /=	            -- x /= y	x = x / y
//fixme//       %=	            -- x %= y	x = x % y
//fixme//       **=	            -- x **= y	x = x ** y

// COMPARADORES
//              Operator	    Description
//fixme//       ==	            -- equal to
//fixme//       ===	            -- equal value and equal type
//fixme//       !=	            -- not equal
//fixme//       !==	            -- not equal value or not equal type
//fixme//       >	            -- greater than
//fixme//       <	            -- less than
//fixme//       >=	            -- greater than or equal to
//fixme//       <=	            -- less than or equal to
//fixme//       ?	            -- ternary operator

/// BASES NUMÉRICAS

//fixme// Con parseInt("str", X)            -- Podemos obtener un decimal de un número en una cadena cuya base sea X
// Ej: parseInt("01232", 8)                 -- Para pasar de Octal a decimal
// Ej: parseInt("0x0f0", 16)                -- Para pasar de Hexadecimal a decimal

//fixme// Con D.toString(X)                 -- Podemos cambiar la base de un decimal V por la base X. Lo devuelve como string.
// Ej: parseInt("0x0f0",16).toString(8)     -- Salida: "360"
// Ej: (2).toString(2)                      -- "10"


/// FLOTANTES (DECIMALES)

//fixme// N.toFixed(X)                      -- Redondea a X cantidad de decimales. Devuelve un string.
//fixme// N.toFixed(X).replace(/0+$/,"")    -- Lo de arriba pero quitando los ceros a la derecha.
//fixme// Math.floor(X)                     -- Redondea X al entero más bajo.
//fixme// Math.ceil(X)                      -- Redondea X al siguiente entero.
//fixme// Math.trunc(X)                     -- Elimina los dígitos decimales sin redondear.


const regNat = /^[+]?\d+$/ // Detecta números naturales (0, 1, +2, 3, 0x0f0, 2e1... = true) (-1, 2,5, "0f0"... = false)
const regInt = /^[-+]?\d+$/ // Detecta números enteros (-1, 0, 1, +2, 3, 0x0f0, 2e1... = true)
const regFloat = /^[-+]?[0-9]*\.?[0-9]+$/ // Detecta números con decimales

// Esta es la forma cutre de hacerlo.
function decBin(dec) {
	let total = [];
	while(parseInt(dec)>1) {
	binario = dec % 2
	total.unshift(Math.floor(binario))
	dec /= 2
	if(dec<2) {
		total.unshift(1)
	}
	}
	return parseInt(total.join(""))
}

// Así cuenta incluso con los negativos. ">>> 0" convierte el operando en un entero sin signo de 32bit.
function binario(n) {

	return (n >>> 0).toString(2);
}

// Así se hace cutremente. Para hacerlo bien, usa Number(bin)
function binDec(bin) {
	total = 0
	cad = String(bin).split("").reverse().join("")
	for(let i=0;i>=cad.length;i++) {
		if(cad[i] != "1" && cad[i] != "0") {
			return console.log("Solo admite números binarios.")
		} else {
			digit = parseInt(cad[i])
			total += digit*2**i
		}
	}
	return total
}

function decHex(dec) {
	h = "0x"
	h += dec.toString(16)
	return h
}

function decOct(dec) {
	oct = 0+dec.toString(8)
	return oct
}

function randomInt(min,max) {
	if (regInt.test(min) && regInt.test(max)) {
		if(min>max) {
		return console.log("El segundo número debe ser mayor que el primero")
		} else {
			return Math.floor(Math.random()*(max-min+1)+min);
		}
	} else {
		return console.log("Solo admite números enteros.")
	}
}

function randomFloat(min,max) {
	if (regInt.test(min) && regInt.test(max)) {
		if(min>max) {
		return console.log("El segundo número debe ser mayor que el primero")
		} else {
			return Math.floor(Math.random()*(max-min+1)+min);
		}
	} else {
		return console.log("Solo admite números enteros.")
	}
}

function par(n){
	if ( n % 2 == 0 ) {
		return true;
	}
	else {
		return false;
	}
}

function ordenar(array) {

	return array.sort(function(a, b){return a-b});
}

//fixme// ordenar(array).reverse()              -- Ordena de mayor a menor
//fixme// ordenar(array).reverse()[0]           -- Obtener el valor más alto
//fixme// ordenar(array)[0]                     -- Obtener el valor más bajo

function mayorDeTres(n1,n2,n3) {
	let arr = []
	arr.push(n1,n2,n3)
	return ordenar(arr).reverse()[0]
}

function mcd(a,b) {
	    let tem;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function MaxComDiv(arr) {
	let result = arr[0];
	for (let i=1;i<arr.length;i++) {
		result = mcd(arr[i], result);
		if(result == 1) {
			return 1;
		}
	}
	return result;
}

function mcm(a,b) {

	return (a*b)/ mcd(a,b)
}

function MinComMul(arr) {
	let result = arr[0];
	for (let i=1;i<arr.length;i++) {
		result = mcm(arr[i], result);
		if(result ==1) {
			return 1;
		}
	}
	return result;
}

function checkPotenciaDe(numero,potencia) {

	return (Math.log(numero)/Math.log(potencia))%1 === 0;
}

function sumar(arr) {
	let total = 0;
	for(let i=0;i<arr.length;i++) {
		total += arr[i];
	}
	return total;
}

function sumarDigitos(n) {
	sum = 0;
	arr = String(n).split("")
	for(let i=0; i<arr.length;i++) {
		num = parseInt(arr[i])
		console.log(num)
		sum += num
	}
	return sum;
}

function dividirRecesivo(dividend,divisor){
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

function multiplicar(arr) {
	let total = 1;
	for(let i=0;i<arr.length;i++) {
		total *= arr[i];
	}
	return total;
}

function multiplicarRecesivo(n1, n2) {
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

function multiplosDe(min, max, mult) {
    let arr = [];
    for(let i=min; i<max; i++) {
        if(i % mult === 0){
            arr.push(i);
        }
	}
	return arr;
}

function calcularMedia(array) {
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

function potencia(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

function primo(n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0){
        return false;
        }
    }
    return true;
}

function pitagoras(a,b) {

	return Math.sqrt(a**2+b**2)
}

function factorial(num) {
	num = BigInt(num)
    if(num==1n || num==0n) {
        return 1n;
    } else if (num<0n) {
        return -1;
    } else {
        return num*factorial(num-1n);
    }
}

function sumaDivisores(n) {
	let total = [];
	for(let i=0;i<n;i++) {
		if(n%i === 0) {
			total.push(i);
		}
	}
	return total
}

function areaCirculo(r) {

    return Math.PI*(r**2);
}

function superficieTriangulo(base,altura) {
    return base*altura/2;

}

function convertirTemp(temp,fc) {
	let res;
    if (fc === true) {
        res = (temp-32)*5/9;
    } else {
        res = (temp*9/5)+32;
    }
    return parseFloat(res.toFixed(5))
}

function factura(u,c,d,i) {
    let bruto = u*c;
    let descontado = bruto-(d*bruto)/100;
    let coniva = descontado+(descontado*i)/100;
	return coniva;
}

function precioReverse(total,ivaopt) {
	let desglose = []
    if (isNaN(ivaopt)) {
        let eliva = (total*parseFloat(21))/100;
        let bruto = total-eliva;
        desglose.push(eliva,bruto)
    } else {
        let eliva = (total*parseFloat(ivaopt))/100;
        let bruto = total-eliva;
        desglose.push(eliva,bruto)
    }
	return desglose
}

function contarDosCosas(ar) {
  var counter = [0, 0];
  ar.forEach(function(a) {
    if (a < 0)
      counter[0]++;
    else
      counter[1]++;
  });
  return counter;
}

function totalSegundos(horas,min,seg) {
    return = seg+(hor*3600)+(min*60);

}
