function suma(a,b) {
   var sum =a + b; 
   console.log('la suma es '+ sum)
}

suma(8,4);

//funciones retornables

function dato_t() {
    var salario = 2222;
    console.log(salario)


}

var obrero = dato_t();  

function potencia(n1,n2) {
    var resultado = 1;
    for (let index = 1; index <= n2; index++) {
        resultado= resultado * n1;
        
    }
    alert(resultado)
}

function par(n1) {
    if (n1%2 ==0) {
        alert('Es par')
    }else if (n1%2 !==0) {
        alert('No es par')
    }

}

function sal(n1,n2,n3) {
    var resultado = (n1*n2)*(n3/100);
    return resultado
}

function factura(n1,n2,n3,n4) {
    var calculo = (parseInt(n1)*parseInt(n2));
    var calculo2 = calculo-((parseInt(n3)*calculo)/100);
    var calculof = calculo2+((parseInt(n4)*calculo2)/100);
    alert(calculof)
}