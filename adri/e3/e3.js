// Ejercicio 1
// Introduce tres números y calcula la suma, mostrándola con alert.
function ejercicio1() {
    let numer1 = parseInt(document.getElementById('entrada11').value);
    let numer2 = parseInt(document.getElementById('entrada12').value);
    let numer3 = parseInt(document.getElementById('entrada13').value);

    let total1 = ((numer1 + numer2 + numer3) / 3).toFixed(2);
    alert(total1);

}


// Ejercicio 2
// Introduce cinco números en cajas de texto y calcula la media.
function ejercicio2() {

    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let n3 = parseInt(document.getElementById('n3').value);
    let n4 = parseInt(document.getElementById('n4').value);
    let n5 = parseInt(document.getElementById('n5').value);

    let suma = n1 + n2 + n3 + n4 + n5;
    let resultado = suma / 5;
    document.getElementById('salida2').innerHTML = `El resultado es ${resultado}`;
    // alert('El resultado es ' + resultado);
}












// Ejercicio 3
// Introduce cinco números en cajas de texto y calcula la media
function ejercicio3() {

    let cuadrado = parseInt(document.getElementById('entrada-cuadrado').value);
    let resultadocuadrado = Math.pow(cuadrado, 2);

    // alert(resultado);
    document.getElementById('salida-cuadrado').innerHTML = `El resultado es ${resultadocuadrado}`;

}
// Ejercicio 3_2
// Calcular la raiz cuadrada, ampliacion
function ejercicio3_2() {
    let raiz = parseInt(document.getElementById('entrada-raiz').value);
    let resultadoraiz = Math.sqrt(raiz, 2);
    document.getElementById('salida-raiz').innerHTML = `El resultado es ${resultadoraiz.toFixed(2)}`;
}

// Ejercicio 4
/*Introduce dos números por teclado y calcula la suma, la resta, el producto y el
resto imprimiéndolos en la web.*/
function ejercicio4() {
    let nOp1 = parseInt(document.getElementById('entrada-op1').value);
    let nOp2 = parseInt(document.getElementById('entrada-op2').value);

    let sumaOp = (nOp1 + nOp2).toFixed(2);
    let restaOp = (nOp1 - nOp2).toFixed(2);
    let multiplicacionOp = (nOp1 + nOp2).toFixed(2);
    let divisionOp = (nOp1 / nOp2).toFixed(2);

    document.getElementById('salida-operaciones').innerHTML = `El resultado de la suma es <b>${sumaOp}</b> <br> El resultado de la resta es <b>${restaOp}</b> <br>
    El resultado de la multiplicacion es <b>${multiplicacionOp}</b> <br>
    El resultado de la división es <b>${divisionOp}</b>`;

}

//Ejercicio 5
/*Calcula el sueldo del mes de un empleado a partir del número de horas trabajadas
y el precio por hora. Tendremos que descontar el % de IRPF que se indique*/
function ejercicio5() {
    let precioHoras = parseInt(document.getElementById('precioH').value);
    let numHoras = parseInt(document.getElementById('horasH').value);
    let bruto = precioHoras *= numHoras;

    let tributo = document.getElementById('irpf').value;
    let deduccion = tributo *= bruto;
    let neto = bruto - deduccion;

    document.getElementById('salario').innerHTML = `
     El total bruto es de  <b>${bruto}</b> €<br>
     Con un tributo de <b>${deduccion}</b> €<br>
     Se obtiene un neto de <b>${neto}</b> €`;
}

// Calculadora ejercicio a parte
function calcula(operacion) {
    var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}

// Ejercicio 6
//Introduce horas, minutos y segundos y calcula el total de segundos.
function ejercicio6() {
    let cHoras = parseInt(document.getElementById('cHoras').value) * 3600;
    let cMinutos = parseInt(document.getElementById('cMinutos').value) * 60;
    let cSegundos = parseInt(document.getElementById('cSegundos').value);
    let cResultado = (cHoras + cMinutos + cSegundos);
    document.getElementById('salidaSegungos').innerHTML = `
    El resultado es <b>${cResultado}</b> segundos`;

}




// Ejercicio 7
/* . Introduce el precio unitario de un producto, el número de unidades compradas, el
descuento aplicado y calcula el total con el IVA indicado. */
function ejercicio7() {
    let pProducto2 = parseInt(document.getElementById('pProducto').value);  //UNIDAD
    let pBruto = pProducto2 *= parseInt(document.getElementById('pCantidad').value); //CANTIDAD
    let pDto = parseInt(document.getElementById('pDescuento').value) / 100; // descuento
    let pIva = parseInt(document.getElementById('tipoIva2').value) / 100; //Iva a aplicar
    let pDescontado = (pDto *= pBruto);
    let pDtoAplic = pBruto - pDescontado;
    let pIvaAdd = ((pDtoAplic * pIva) + pDtoAplic).toFixed(2);

    document.getElementById('salidaPrecios1').innerHTML = `
    El precio bruto es de <b>${pBruto}</b>€  <br>
    El precio con descuento es de <b>${pDtoAplic}</b>€ <br>
    El precio más IVA de <b>${pIvaAdd}</b>€ `;
}


// Ejercicio 8
/* Calcula el precio neto y el IVA a partir del precio total introducido. */

function ejercicio8() {
    let precio8 = parseInt(document.getElementById('entrada8').value);
    let iva8 = parseInt(document.getElementById('iva8').value) / 100;
    let iva8_2 = iva8 * precio8;

    let calculo8 = (precio8 -= (precio8 * iva8)).toFixed(2);
    let calcIva8 = (precio8 -= (precio8 - iva8_2)).toFixed(2);


    document.getElementById('salida8').innerHTML = `
    El precio neto es de  <b>${calculo8}</b>€ <br>
    La desglose de iva es:  <b>${calcIva8}</b>€`;

}

// Ejercicio 9
//Introducir número y exponente y calcular la potencia
function ejercicio9() {
    let $base = parseInt(document.getElementById('entrada9_1').value);
    let $exp = parseInt(document.getElementById('entrada9_2').value);

    let result9 = Math.pow($base, $exp);

    document.getElementById('salida9').innerHTML = `
    La potencia es ${result9}`;
}

// Ejercicio 10
/*Calcula el sueldo del mes de un empleado a partir del número de horas trabajadas.
El número de horas mensuales son 160. Todas las demás son extras. Se introduce
también el precio por hora normal y el precio por hora extra y el IRPF. */

function ejercicio10() {
    let horas10 = parseInt(document.getElementById('entrada10_1').value);
    let precio10 = parseInt(document.getElementById('entrada10_2').value);
    let pExtra10 = parseInt(document.getElementById('entrada10_3').value);
    let irpf10 = parseInt(document.getElementById('irpf19').value) / 100;

    if (horas10 < 160) {
        let result10 = (horas10 * precio10);
        let total10 = (result10 -= (result10 * irpf10));
        document.getElementById('salida10').innerHTML = `
        El resultado es ${total10}`;
    } else {
        let result102 = (160 * precio10) + pExtra10 * (horas10 - 160);
        let total10 = (result102 -= (result102 * irpf10));
        document.getElementById('salida10').innerHTML = `
            El resultado es ${result102}`;
        // Coodiguito de los guebos
    }
}

///////// NO TOCAR ////////







////////////////////////////////////////////////////
////////////////////////////////////////////////////
/*jshint esversion: 6 */
function ejercicio102() {
    let horas10 = parseInt(document.getElementById('entrada10_1').value);
    let precio10 = parseInt(document.getElementById('entrada10_2').value);
    let pExtra10 = parseInt(document.getElementById('entrada10_3').value);

    if (horas10 < 160) {
        let result10 = (horas10 * precio10);

        if (result10 <= 1037.5) { // si menor que 12450€
            let total10 = result10 - (result10 * 0.19); // restarle el tramo 19%
            document.getElementById('salida10').innerHTML = `
            1A El salario bruto es igual a <b>${result10}</b> 
            IRPF 19% <b> Inferior a 12.450€ anuales</b> <br> 
            El líquido total es <b> ${total10.toFixed(2)}€ </b>`;

        } else if
            (result10 >= 1037.5 && result10 <= 1683.2) { // desde 12.450€ hasta 20.200€
            let total101 = result10 - (result10 * 0.24); // restarle el tramo del 24%
            document.getElementById('salida10').innerHTML = `
            2A El total bruto es igual a <b>${result10}</b> <br>
            IRPF 24% <b>(12.450€ - 20.200€ anuales)</b> <br>
            El líquido total es <b>${total101.toFixed(2)}</b>`;

        } else if
            (result10 >= 1683.6 && result10 <= 2933.2) {// desde 20.200 hasta 35.200€
            let total102 = (result10 * 0.30); // restarle el tramo del 30%
            document.getElementById('salida10').innerHTML = `
            3A El total bruto es igual a <b>${result10}</b> <br>
            IRPF 30% <b>(20.200€ - 35.200€ anuales)</b> <br> 
            El líquido total es <b>${total102.toFixed(2)}</b>`;

        } else if
            (result10 >= 2933.2) {  // desde 35.200 hasta 60.000
            let total103 = (result10 * 0.37); // restarle el tramo del 37%
            document.getElementById('salida10').innerHTML = `
            4A El total bruto es igual a <b>${result10}</b> <br>
            IRPF 37% <b>(35.200€ - 60.000€ anuales)</b> <br> 
            El líquido total es <b>${total103.toFixed(2)}</b>`;
        }
    } else {
        (horas10 < 160)
        let result10 = (horas10 * precio10);

        if (result10 <= 1037.5) { // si menor que 12450€
            let total10 = result10 - (result10 * 0.19); // restarle el tramo 19%
            document.getElementById('salida10').innerHTML = `
                1A El salario bruto es igual a <b>${result10}</b> 
                IRPF 19% <b> Inferior a 12.450€ anuales</b> <br> 
                El líquido total es <b> ${total10.toFixed(2)}€ </b>`;

        } else if
            (result10 >= 1037.5 && result10 <= 1683.2) { // desde 12.450€ hasta 20.200€
            let total101 = result10 - (result10 * 0.24); // restarle el tramo del 24%
            document.getElementById('salida10').innerHTML = `
                2A El total bruto es igual a <b>${result10}</b> <br>
                IRPF 24% <b>(12.450€ - 20.200€ anuales)</b> <br>
                El líquido total es <b>${total101.toFixed(2)}</b>`;

        } else if
            (result10 >= 1683.6 && result10 <= 2933.2) {// desde 20.200 hasta 35.200€
            let total102 = (result10 * 0.30); // restarle el tramo del 30%
            document.getElementById('salida10').innerHTML = `
                3A El total bruto es igual a <b>${result10}</b> <br>
                IRPF 30% <b>(20.200€ - 35.200€ anuales)</b> <br> 
                El líquido total es <b>${total102.toFixed(2)}</b>`;

        } else if
            (result10 >= 2933.2) {  // desde 35.200 hasta 60.000
            let total103 = (result10 * 0.37); // restarle el tramo del 37%
            document.getElementById('salida10').innerHTML = `
                4A El total bruto es igual a <b>${result10}</b> <br>
                IRPF 37% <b>(35.200€ - 60.000€ anuales)</b> <br> 
                El líquido total es <b>${total103.toFixed(2)}</b>`;
            }

        }
    }


//Ejercicio 11
/*Diseña un algoritmo para pasar de grados Fahrenheit a ºC, sabiendo que
C = (F-32)*5/9  */
function ejercicio11() {
    let grados11 = parseInt(document.getElementById('entrada11_1').value);
    let conver11 = (((grados11 - 32) * 5) / 9).toFixed(2);
    document.getElementById('salida11').innerHTML = `${conver11} Grados Celsius`;
}




// Ejercicio 12
/* . Calcula la superficie de un triángulo a partir de la base y la altura sabiendo que
s=b*a/2*/
function ejercicio12() {

    let base11 = parseInt(document.getElementById('entrada12_1').value);
    let altura11 = parseInt(document.getElementById('entrada12_2').value);
    let pre11 = base11 * altura11;
    let con12 = pre11 / 2;
    document.getElementById('salida12').innerHTML = `Superficie ${con12}`;
}

//Ejercicio 13
/* Introduce el radio de una circunferencia y halla la longitud y el área sabiendo que
L=2*PI*radio y A=PI*radio2.*/
function ejercicio13() {
    const pi13 = 3.1416;
    let radio13 = parseInt(document.getElementById('entrada13_1').value);
    let area13 = (pi13 * radio13 * radio13).toFixed(2);
    let longi13 = (2*pi13*radio13).toFixed(2);

    document.getElementById('salida13').innerHTML = `Area ${area13}
    <br> Longitud ${longi13}`;
}

//Ejercicio 14
/* . A partir de un número de días, determinar el número de años, meses y días. */
function ejercicio14() {

    let dias14 = parseInt(document.getElementById('entrada14').value);

    let meses14 = dias14 / 30;
    let anos14 = dias14 / 365;

    document.getElementById('salida14').innerHTML = `Años ${anos14.toFixed(2)} <br>
    Meses ${meses14.toFixed(2)} <br>
    Dias ${dias14.toFixed(2)}`;

}



// Ejercicio 15
/*Leer un número de cuatro cifras y descomponer en unidades, decenas, centenas y
millares.*/
function ejercicio15() {
    let entrada15 = parseInt(document.getElementById('entrada15_1').value);
    let str15 = String(entrada15);
    let uni15 = str15[3];
    let dec15 = str15[2];
    let cen15 = str15[1];
    let mil15 = str15[0];
    
    document.getElementById('salida15').innerHTML = `
    Unidades ${uni15} <br>
    Decenas ${dec15} <br>
    Centenas ${cen15} <br>
    Millares ${mil15} <br>
    `;
}


// Esto es de fol, calculadora subsidio INCAPACIDAD TEMPORAL POR CONTINGENCIA COMUN

function baja() {

    let baseR = parseInt(document.getElementById('bccc').value) / 30;
    let dias = parseInt(document.getElementById('numDias').value);
    
    
    let el06 = baseR * 0.6;
    let el75 = baseR * 0.75;
    
    if (dias < 4) {
        
    document.getElementById('salidaFol').innerHTML = `
    Dias 1º 2º y 3º los pagaría la empresa como salario, 
    por lo tanto no recibe prestación por baja laboral` ;

    } else if  (dias > 4 && dias < 16) {
        let baja = (dias - 3)  * el06 //60% de la BR * dias de baja - 3
        //Le resto los 3 dias que cobra salario normal.

        document.getElementById('salidaFol').innerHTML = `
        Total de días ${dias} <br>
        Dias 1º 2º y 3º cobra el salario normal, <br>
        Dias 4º hasta 15º cobra el 60% de BR = ${baja.toFixed(2)} lo paga el INSS o Mutua pero lo adelanta la empresa. <br>
        `;

    } else if (dias > 16 && dias < 21) {
        let bajaA1= el06 * 12; //Ya sabes que corrieron 12 dias + 3 (15dias), pero 3 dias no cobra del "subsidio".
        let diferenciaA = dias - 15; // los dias - 15 que ya han pasado
        let bajaA2 = el06 * diferenciaA; // br * diferencia de dias
        document.getElementById('salidaFol').innerHTML = `
        Total de días ${dias} <br>
        Dias 1º 2º y 3º cobra el salario normal. <br>
        Dias 4º hasta 15º se cobra el 60% de BR = <b>${bajaA1.toFixed(2)}</b> lo paga el INSS o Mutua pero lo adelanta la empresa. <br>
        Dias 16º hasta 20º se cobra el 60% de BR = <b>${bajaA2.toFixed(2)} </b>lo paga el INSS o Mutua pero lo adelanta la empresa. <br>
        `;   /* alert(diferenciaA); Esta perfecto, no lo mires mas */

    } else {
        let bajaB1= el06 * 12;
        let bajaB2 = el06 * 5; // Del dia 16º al 20º van 5 dias
        let diff2 = dias - 20; // Como es a partir del 21º quiere decir que ya pasaron 20.
        let bajaB3 = el75 * diff2; // El 75% de los dias restantes.

        document.getElementById('salidaFol').innerHTML = `
        Total de días ${dias}.<br>
        - Dias 1º 2º y 3º cobra el salario normal. <br>
        - Dias 4º hasta 15º se cobra el 60% de BR = <b>${bajaB1.toFixed(2)}€</b> lo paga el INSS o Mutua pero lo adelanta la empresa. <br> <br>
        - Dias 16º hasta 20º se cobra el 60% de BR = <b>${bajaB2.toFixed(2)}€</b>lo paga el INSS o Mutua pero lo adelanta la empresa. <br> <br>
        - Dias 21º en adelante se cobra el 75% de BR = <b>${bajaB3.toFixed(2)}€</b>
        `;
    }



}