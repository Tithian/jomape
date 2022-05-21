
function sum_quad_dig() {

 

    let n = parseInt(document.getElementById("numdb").value);

    console.log(n);

   let cadenaNumero = n.toString();

   console.log(cadenaNumero);

  let suma=0;
 console.log(suma);

    longitud =cadenaNumero.length
console.log(longitud);

    for (var i=0; i< longitud; i++){

        suma+=(+cadenaNumero.parseInt(n).Math.pow(n,2));
   console.log(suma);

 alert(suma);

   
 }


}
