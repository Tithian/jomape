
function mayor(){

var n1 = parseFloat(document.getElementById("n1").value);
var n2 = parseFloat(document.getElementById("n2").value);
var n3 = parseFloat(document.getElementById("n3").value);

if (n1 > n2 && n1 > n3) {
    alert("El número mayor es: " + (n1));
    }

    else if (n2 > n3) {
    alert("El número mayor es: " +(n2));
    }

    else {
    alert("El número mayor es: " +(n3));
    }
}


   function entre() {

    var entre1 = parseFloat(document.getElementById("entre1").value);

    if (entre1 > 0 && entre1 <= 10) {

        alert("Estás dentro del rango! " + " " + Math.round(entre1).toFixed(0));
    }
     else {
         alert("Fuera de rango!");
     }
}


function menmay() {

    var nm1 = parseFloat(document.getElementById("nm1").value);
    var nm2 = parseFloat(document.getElementById("nm2").value);
    var nm3 = parseFloat(document.getElementById("nm3").value);

    if (nm1<=nm2 && nm1<=nm3) {

        if (nm2<=nm3) {

           alert("el orden es" + " " + nm1 + " " + nm2 + " " + nm3);
        }
        else {

            alert("El orden es:" + " " + nm1 + " " + nm3 + " " + nm2);

     } }
        else if (nm2<=nm1 && nm2<=nm3) {

                if(nm1<=nm3) {

                  alert("El orden es:" + " " + nm2 + " " + nm1 + " " + nm3);
                }else {

                    alert("El orden es:" + " " + nm2 + " " + nm3 + " " + nm1)
                }

        }else if (nm3<=nm1 && nm3<=nm2) {

            if(nm1<=nm2) {
                alert("El orden es:" + " " + nm3 + " " + nm1 + " " + nm2);
            }

            else {
                alert("El orden es:" + " " + nm3 + " " + nm2 + " " + nm1);

            }
        }


    }


    function posneg(){

        var posneg = parseFloat(document.getElementById("posneg").value);

        if (posneg === 0){

            alert(posneg + " Es un número neutro");
        }

        else if (posneg < 0) {

            alert(posneg + " Es un número negativo");
        }

        else {

            alert(posneg + " Es un número positivo");
        }

    }



    function impar() {

        var start = 100;
        var fin = 120;

        document.write("Numeros impares entre "+start+" y "+fin+":<br>");

        for(start = start; start <= fin; start++)
        {

         if(start % 2 != 0){

         document.write(start +", ");
       }
        }
    }


function multiplos() {

    var startm = 1;
    var finm = 50;

   enunciado = "Los múltiplos de 3 comprendidos entre "+startm+" y "+finm+":<br>";

    for(startm = startm; startm <= finm; startm++)
    {

     if(startm % 3 != 1 && startm % 3 != 2){

    enunciado += startm +", ";
    }
    }
 respuesta6.innerHtml = enunciado;

}

function tabla() {

    var i = (1, 11);
    var j = (1, 11);

   document.write(i*j, end="\t");
    document.write("Tabla de multiplicar");
}

function expon() {

    let exp1 = parseFloat(document.getElementById("exp1").value);
    let exp2 = parseFloat(document.getElementById("exp2").value);

    var exponente = Math.pow(exp1, exp2);
    alert("el número que busca es "+exponente);

}

function sumas(){
	x = 1000
    var suma = 0
    for (var i=0; i<=x; i = i + 2){
        suma += i
    }
    alert(suma);
  }



function sumaNumeros() {

    let num1 = parseInt(document.getElementById("p1").value);
    let num2 = parseInt(document.getElementById("p2").value);


    let sumnum = 0;

    for (var i=num1; i<=x; i = i + num2) {
        sumnum += i;
    }
    alert("Cobrarías lo siguiente: \n"+sumnum);
}








function parImpar() {

    let numero = parseInt(document.getElementById("nm1").value);
    var resultado = parImpar(numero);
	alert("El número "+numero+" es "+resultado);


  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }


}

