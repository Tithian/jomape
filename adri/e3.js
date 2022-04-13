// Ejercicio 3
function cuadrado() {

    let cuadrado = parseInt(document.getElementById('entrada-cuadrado').value);
    let resultadocuadrado = Math.pow(cuadrado, 2);

    // alert(resultado);
    document.getElementById('salida-cuadrado').innerHTML = `El resultado es ${resultadocuadrado}`;

}

function raizCuadrada() {
    let raiz = parseInt(document.getElementById('entrada-raiz').value);
    let resultadoraiz = Math.sqrt(raiz, 2);
    document.getElementById('salida-raiz').innerHTML = `El resultado es ${resultadoraiz}`;
}

// Ejercicio 4
function operaciones() {
    let nOp1 = parseInt(document.getElementById('entrada-op1').value);
    let nOp2 = parseInt(document.getElementById('entrada-op2').value);

    let sumaOp = nOp1 + nOp2;
    let restaOp = nOp1 - nOp2;
    let multiplicacionOp = nOp1 + nOp2;
    let divisionOp = nOp1 / nOp2;

    document.getElementById('salida-operaciones').innerHTML = `El resultado de la suma es <b>${sumaOp}</b> <br> El resultado de la resta es <b>${restaOp}</b> <br>
    El resultado de la multiplicacion es <b>${multiplicacionOp}</b> <br>
    El resultado de la división es <b>${divisionOp}</b>`;

}

//Ejercicio 5
function salario() {
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







// Calculadora
function calcula(operacion) {
    var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}

//Calculadora de segundos

function calculadoraSegundos() {
    let cHoras = parseInt(document.getElementById('cHoras').value) * 3600;
    let cMinutos = parseInt(document.getElementById('cMinutos').value) * 60;
    let cSegundos = parseInt(document.getElementById('cSegundos').value);
    let cResultado = cHoras + cMinutos + cSegundos;
    document.getElementById('salidaSegungos').innerHTML = `El resultado es <b>${cResultado}</b> segundos`;
}




// Precio Productos + IVA

function preciosIva2() {
    let pProducto2 = parseInt(document.getElementById('pProducto').value);  //UNIDAD
    let pBruto = pProducto2 *= parseInt(document.getElementById('pCantidad').value); //CANTIDAD
    let pDto = parseInt(document.getElementById('pDescuento').value) / 100; // descuento
    let pIva = parseInt(document.getElementById('tipoIva2').value) / 100; //Iva a aplicar
    let pDescontado = (pDto *= pBruto);
    let pDtoAplic = pBruto - pDescontado;
    let pIvaAdd = (pDtoAplic * pIva) + pBruto;

    document.getElementById('salidaPrecios1').innerHTML = `
    El precio bruto es de <b>${pBruto}</b>€  <br>
    El precio con descuento es de <b>${pDtoAplic}</b>€ <br>
    El precio más IVA de <b>${pIvaAdd}</b>€ `;





}
