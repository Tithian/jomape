function sumaDe() {

var numero1 = parseInt(document.getElementById("sum1").value);
var numero2 = parseInt(document.getElementById("sum2").value);
var numero3 = parseInt(document.getElementById("sum3").value);
var total = numero1+numero2+numero3;

alert("La suma total es "+numero1+numero2+numero3);
}

function mediaDe() {
var numero1 = parseInt(document.getElementById("med1").value);
var numero2 = parseInt(document.getElementById("med2").value);
var numero3 = parseInt(document.getElementById("med3").value);
var numero4 = parseInt(document.getElementById("med4").value);
var numero5 = parseInt(document.getElementById("med5").value);
var total = (numero1+numero2+numero3+numero4+numero5)/5;

alert("La media es "+total);
}

function mediaDeTool() {
var numero1 = parseInt(document.getElementById("med1").value);
var numero2 = parseInt(document.getElementById("med2").value);
var numero3 = parseInt(document.getElementById("med3").value);
var numero4 = parseInt(document.getElementById("med4").value);
var numero5 = parseInt(document.getElementById("med5").value);
var total = (numero1+numero2+numero3+numero4+numero5)/5;

document.getElementById("toolmed").innerHTML = mes;
}