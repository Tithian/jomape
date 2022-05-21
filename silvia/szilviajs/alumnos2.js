function alumnos() {

    let alumno = parseInt(document.getElementById("unit").value);
  

if (alumno>=100) {

    let alumnogr1 = alumno*65;
    document.write("<p>En el caso de más de cien alumnos, el autobus saldría: </p>", "<p>Euros</p>");
    document.write(alumnogr1);
    document.write("<p>Cada alumno pagaría 65 euros. </p>");
}
else if (alumno>=50 && alumno<=99) {

    let alumnogr2 = alumno*70;
    document.write("<p>En este caso el autobús saldría a:  </p>", "<p>Euros</p>");
    document.write(alumnogr2);
    document.write("<p>Cada alumno pagaría 70 euros. </p>");
}
else if (alumno>=30 && alumno<=49) {

    let alumnogr3 = alumno*95;
    document.write("<p>En este caso el autobús saldría a:  </p>", "<p>Euros</p>");
    document.write(alumnogr3);
    document.write("<p>Cada alumno pagaría 95 euros.  </p>");
}
else if (alumno<30) {

    let alumnogr4 = Math.floor(4000/alumno);
    document.write("<p>En este caso el autobús le saldría a 4000 Euros independientemente el número de los alumnos. </p>");
    document.write("<p>Cada alumno pagaría:  </p>", + alumnogr4,  "<p>Euros</p>");
   
}
}


function divisores(){

var n = parseInt(document.getElementById("num").value)
document.write("el número intorducido es: " + n + "<br>")
document.write("sus divisores son: <br>")
//document.getElementById("divi").innerHTML = "sus divisores son: "
var total = 0


for(var j=1; j<n; j++) {

 var q=n/j;

 if(Math.trunc(q)*j==n) {

    document.write(j+"<br>");
    //document.getElementById("divi").innerHTML = j;
    total += j

}


 }
 document.write("el total de los divisores: " + total)
 //document.getElementById("divi").innerHTML = "el total de los divisores: " + total;

}


function crearnodo(parrafo,contenido){

    var p = document.createElement('p');


    var texto = document.createTextNode(contador+'.- '+parrafo+' : '+contenido);

    p.appendChild(texto);

    var antes= document.getElementById('form3').appendChild(p);
    contador++;
           
}


contador=1;

/*function eliminarNodo(parrafo,contenido){

    var p = document.removeElement('p');

    var texto = document.removeChild(contador+'.- ' + parrafo +' : '+contenido);

    p.removeChild(texto);

    var despues = document.getElementById('form3').removeChild(p);

    contador++;

}*/