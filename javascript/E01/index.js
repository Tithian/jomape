
var numero1, numero2, numero3, numero4, numero5, total;

function chkFloat(texto) {
    let esfloat = parseFloat(document.getElementById(texto).value);
    
    return esfloat;
}

function sumaDe() {
    numero1 = chkFloat("sum1");
    numero2 = chkFloat("sum2");
    numero3 = chkFloat("sum3");
    total = numero1+numero2+numero3;

    alert("La suma total es "+total.toFixed(2));
}


function sumaDeTool() {
    numero1 = chkFloat("sum1");
    numero2 = chkFloat("sum2");
    numero3 = chkFloat("sum3");
    total = numero1+numero2+numero3;

    document.getElementById("toolsuma").innerHTML = "La suma es de "+total.toFixed(2);
}


function mediaDe() {
    numero1 = chkFloat("med1");
    numero2 = chkFloat("med2");
    numero3 = chkFloat("med3");
    numero4 = chkFloat("med4");
    numero5 = chkFloat("med5");
    total = (numero1+numero2+numero3+numero4+numero5)/5;

    alert("La media es "+total.toFixed(2));
}


function mediaDeTool() {
    numero1 = chkFloat("med1");
    numero2 = chkFloat("med2");
    numero3 = chkFloat("med3");
    numero4 = chkFloat("med4");
    numero5 = chkFloat("med5");
    total = (numero1+numero2+numero3+numero4+numero5)/5;

    document.getElementById("toolmedia").innerHTML = "La media es de "+total;
}

function cuadDe() {
    let cuadrado = chkFloat("cuad");
    total = cuadrado**2;
    
    alert("El cuadrado es "+total.toFixed(2));
}

function cuadDeTool() {
    let cuadrado = chkFloat("cuad");
    total = cuadrado**2;
    
    document.getElementById("toolcuad").innerHTML = "El cuadrado es "+total;
}

function opDe() {
    numero1 = chkFloat("op1");
    numero2 = chkFloat("op2");
    let suma = numero1+numero2;
    let resta = numero1-numero2;
    let mult = numero1*numero2;
    let resto = numero1%numero2;
    
    alert(
        "La suma de "+numero1+" y "+numero2+" es "+suma+".\n"+
        "La resta de "+numero1+" menos "+numero2+" es "+resta+".\n"+
        numero1+" por "+numero2+" es "+mult+" de toda la vida"+".\n"+
        "El resto de la división de "+numero1+" entre "+numero2+" es "+resto+"."
        );
}

function opDeTool() {
    numero1 = chkFloat("op1");
    numero2 = chkFloat("op2");
    let suma = numero1+numero2;
    let resta = numero1-numero2;
    let mult = numero1*numero2;
    let resto = numero1%numero2;
    
    document.getElementById("toolop").innerHTML ="La suma de "+numero1+" y "+numero2+" es "+suma.toFixed(2)+".<br><br>"+
        "La resta de "+numero1+" menos "+numero2+" es "+resta.toFixed(2)+".<br><br>"+
        numero1+" por "+numero2+" es "+mult.toFixed(2)+" de toda la vida"+".<br><br>"+
        "El resto de la división de "+numero1+" entre "+numero2+" es "+resto.toFixed(2)+".";
}

function sueldoDe() {
    let horas = chkFloat("horat");
    let salario = chkFloat("horap");
    let irpf = chkFloat("irpf");
    let sueldo = horas*salario;
    let contribucion = sueldo*(irpf/100);
    total = sueldo-contribucion;

    alert(
        "Cobraría: "+total.toFixed(2)+" €"+".\n"+
        "Salario bruto: "+sueldo.toFixed(2)+" €"+".\n"+
        "Contribución: "+contribucion.toFixed(2)+" €"+".\n"
        );
}

function sueldoDeTool() {
    let horas = chkFloat("horat");
    let salario = chkFloat("horap");
    let irpf = chkFloat("irpf");
    let sueldo = horas*salario;
    let contribucion = sueldo*(irpf/100);
    total = sueldo-contribucion;

    document.getElementById("toolsueldo").innerHTML = "Cobraría: "+total.toFixed(2)+" €.<br><br>"+
        "Salario bruto: "+sueldo.toFixed(2)+" €"+".<br><br>"+
        "Contribución: "+contribucion.toFixed(2)+" €.";
}

function segunDe() {
    let hor = chkFloat("horasseg");
    let min = chkFloat("minutos");
    let seg = chkFloat("segundos");
    total = seg+(hor*3600)+(min*60);

    alert("Total de segundos: "+total+".");


}
function segunDeTool() {
    let hor = chkFloat("horasseg");
    let min = chkFloat("minutos");
    let seg = chkFloat("segundos");
    total = seg+(hor*3600)+(min*60);

    document.getElementById("toolsegundos").innerHTML = "Total de segundos: "+total+".";
}

function precioDe() {
    let unitprice = chkFloat("unitprice");
    let units = chkFloat("units");
    let descuento = chkFloat("descuento");
    let iva = chkFloat("iva");
    let bruto = unitprice*units;
    let descontado = bruto-(descuento*bruto)/100;
    let coniva = descontado+(descuento*iva)/100;

    alert(
        "Precio bruto: "+bruto+" €.\n"+
        "Precio bruto con descuento: "+descontado+" €.\n"+
        "Precio total con IVA: "+coniva+" €."
        );
}

function precioDeTool() {
    let unitprice = chkFloat("unitprice");
    let units = chkFloat("units");
    let descuento = chkFloat("descuento");
    let iva = chkFloat("iva");
    let bruto = unitprice*units;
    let descontado = bruto-(descuento*bruto)/100;
    let coniva = descontado+(descuento*iva)/100;

    document.getElementById("toolprecio").innerHTML =
        "Precio bruto: "+bruto+" €.<br><br>"+
        "Precio bruto con descuento: "+descontado+" €.<br><br>"+
        "Precio total con IVA: "+coniva+" €.";
}

function precioReverseDe() {
    var preciototal = chkFloat("preciototal");

    if (isNaN(ivaopt)) {
        var eliva = (preciototal*parseFloat(21))/100;
        var bruto = preciototal-eliva;
    } else {
        var eliva = (preciototal*parseFloat("ivaopt"))/100;
        var bruto = preciototal-eliva;
    }

    alert(
        "Precio bruto: "+bruto+" €.\n"+
        "IVA: "+eliva+" €."
        );
}

function precioReverseDeTool() {
    var preciototal = chkFloat("preciototal");

    if (isNaN(ivaopt)) {
        var eliva = (preciototal*parseFloat(21))/100;
        var bruto = preciototal-eliva;
    } else {
        var eliva = (preciototal*parseFloat("ivaopt"))/100;
        var bruto = preciototal-eliva;
    }

    document.getElementById("toolprecioreverse").innerHTML =
        "Precio bruto: "+bruto+" €.<br><br>"+
        "IVA: "+eliva+" €.";
}

function exponenteDe() {
    let base = chkFloat("base");
    let exponente = chkFloat("exponente");

    total = Math.pow(base, exponente);

    alert(
        "Resultado: "+total
        );
}

function exponenteDeTool() {
    let base = chkFloat("base");
    let exponente = chkFloat("exponente");

    total = Math.pow(base, exponente);

    document.getElementById("toolexp").innerHTML = "Resultado: "+total;
}

function sueldo2De() {
    let horasextras = chkFloat("hextras");
    let precionormal = chkFloat("pnormal");
    let precioextra = chkFloat("pextra");
    let irpf = chkFloat("irpf2");
    const HORASMENSUALES = parseFloat("160");
    let totalnormal = HORASMENSUALES*precionormal;
    let totalextra = horasextras*precioextra;
    let salariobruto = totalnormal+totalextra;
    let contribucion = (irpf*salariobruto)/100;
    let salarioneto = salariobruto-contribucion;

    alert(
        "Horas normales: "+totalnormal+" €.\n"+
        "Horas extra: "+totalextra+" €.\n"+
        "Salario bruto: "+salariobruto+" €.\n"+
        "Contribución: "+contribucion+" €.\n"+
        "Salario Neto: "+salarioneto+" €."
        );
}

function sueldo2DeTool() {
    let horasextras = chkFloat("hextras");
    let precionormal = chkFloat("pnormal");
    let precioextra = chkFloat("pextra");
    let irpf = chkFloat("irpf2");
    const HORASMENSUALES = parseFloat("160");
    let totalnormal = HORASMENSUALES*precionormal;
    let totalextra = horasextras*precioextra;
    let salariobruto = totalnormal+totalextra;
    let contribucion = (irpf*salariobruto)/100;
    let salarioneto = salariobruto-contribucion;

    document.getElementById("toolsueldo2").innerHTML =
        "Horas normales: "+totalnormal+" €.<br><br>"+
        "Horas extra: "+totalextra+" €.<br><br>"+
        "Salario bruto: "+salariobruto+" €.<br><br>"+
        "Contribución: "+contribucion+" €.<br><br>"+
        "Salario Neto: "+salarioneto+" €.";
}

function meSubeLaBilirrubina() {
    var temperatura = chkFloat("canttemp");
    if (document.querySelector("input[name='temp']:checked").value === "farc") {
        let fartocel = (temperatura-32)*5/9;
            alert("Son "+fartocel+" ºC");
        } else {
        let celtofar = (temperatura*9/5)+32;
            alert("Son "+celtofar+" ºF");
        }

}

function meSubeLaBilirrubinaTool() {
    var temperatura = chkFloat("canttemp");
    if (document.querySelector("input[name='temp']:checked").value === "farc") {
        let fartocel = (temperatura-32)*5/9;
            document.getElementById("tooltemp").innerHTML ="Son "+fartocel.toFixed(6)+" ºC";
        } else {
        let celtofar = (temperatura*9/5)+32;
            document.getElementById("tooltemp").innerHTML= "Son "+celtofar.toFixed(6)+" ºF";
        }

}

function superDe() {
    let base = chkFloat("basetri");
    let altura = chkFloat("alturatri");
    let superficie = base*altura/2;

    alert("Superficie: "+superficie.toFixed(2));

}

function superDeTool() {
    let base = chkFloat("basetri");
    let altura = chkFloat("alturatri");
    let superficie = base*altura/2;

    document.getElementById("toolsup").innerHTML= "Superficie: "+superficie.toFixed(2);

}

function circunDe() {
    let radio = chkFloat("circunradio");
    let longitud = 2*Math.PI*radio;
    let area = Math.PI*radio;

    alert("Longitud: "+longitud.toFixed(2)+".\n\n"+"Área: "+area.toFixed(2));

}

function circunDeTool() {
    let radio = chkFloat("circunradio");
    let longitud = 2*Math.PI*radio;
    let area = Math.PI*radio;

    document.getElementById("toolcir").innerHTML= "Longitud: "+longitud.toFixed(2)+"<br><br>"+"Área: "+area.toFixed(2);

}

function anosDe() {
    let dias = parseInt(document.getElementById("dias").value);
    let anos = Math.floor((dias/365));
    let meses = Math.floor((dias%365)/30);
    let restodias = (dias%365)%30;

    alert("Años: "+anos+"\n\n"+"Meses: "+meses+"\n\n"+"Días: "+restodias);

}

function anosDeTool() {
    let dias = parseInt(document.getElementById("dias").value);
    let anos = Math.floor((dias/365));
    let meses = Math.floor((dias%365)/30);
    let restodias = (dias%365)%30;

    document.getElementById("toolanos").innerHTML= "Años: "+anos+"<br><br>"+"Meses: "+meses+"<br><br>"+"Días: "+restodias;

}

function separaNum() {
    let cifras = document.getElementById("cifras").value.toString();
    let millares = cifras[0];
    let centenas = cifras[1];
    let decenas = cifras[2];
    let unidades = cifras[3];

    alert("Unidades: "+unidades+"\n\n"+"Decenas: "+decenas+"\n\n"+"Centenas: "+centenas+"\n\n"+"Millares: "+millares);

}

function separaNumTool() {
    let cifras = document.getElementById("cifras").value.toString();
    let millares = cifras[0];
    let centenas = cifras[1];
    let decenas = cifras[2];
    let unidades = cifras[3];

    document.getElementById("toolsep").innerHTML = "Unidades: "+unidades+"<br><br>"+"Decenas: "+decenas+"<br><br>"+"Centenas: "+centenas+"<br><br>"+"Millares: "+millares;

}

function seAcercaElFin() {
    var fecha = prompt("Introduce una fecha:");
    var regEx = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    let fechadate = Date.parse(fecha);
    let ahora = new Date();
    if (fechadate>ahora) {
        alert("Es imposible que haya nacido en el futuro. No te flipes.")
    } else if(!fecha.match(regEx)) {
        alert("Inserte un formato valido.")
    } else {
        document.write(
            '<!DOCTYPE html>'+
            '<html lang="en">'+
                '<head>'+
                    '<meta charset="UTF-8">'+
                    '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
                    '<meta name="viewport" content="width=, initial-scale=1.0">'+
                    '<link rel="stylesheet" href="timer.css">'+
                    '<title>Días de Existencia</title>'+
                '</head>'+
                '<body>'+
                    '<span id="timer"></span>'+
                        '<script>'+
                            'function updateTimer() {'+
                                'date_input = Date.parse("'+fecha+'");'+
                                'date_now = new Date();'+
                                'diff    = date_now - date_input;'+
                                'days  = Math.floor( diff / (1000*60*60*24) );'+
                                'hours = Math.floor( diff / (1000*60*60) );'+
                                'mins  = Math.floor( diff / (1000*60) );'+
                                'secs  = Math.floor( diff / 1000 );'+
                                'd = days;'+
                                'h = hours - days  * 24;'+
                                'm = mins  - hours * 60;'+
                                's = secs  - mins  * 60;'+
                                'document.getElementById("timer").innerHTML ='+
                                "'<div class=\"wrapper\">'+"+
                                 "'<div class=\"bg\">'"+" + d + '<span> Dias</span></div>' +"+
                                 "'<div class=\"fg\">'"+" + d + '<span> Dias</span></div>' +"+
                                 "'</div>'+"+
                                 "'<div class=\"wrapper\">'+"+
                                 "'<div class=\"bg\">'"+" + h + '<span> horas</span></div>' +"+
                                 "'<div class=\"fg\">'"+" + h + '<span> horas</span></div>' +"+
                                 "'</div>'+"+
                                 "'<div class=\"wrapper\">'+"+
                                 "'<div class=\"bg\">'"+" + m + '<span> minutos</span></div>' +"+
                                 "'<div class=\"fg\">'"+" + m + '<span> minutos</span></div>' +"+
                                 "'</div>'+"+
                                 "'<div class=\"wrapper\">'+"+
                                 "'<div class=\"bg\">'"+" + s + '<span> segundos</span></div>' +"+
                                 "'<div class=\"fg\">'"+" + s + '<span> segundos</span></div></div>';"+
                            '}'+
                            "setInterval('updateTimer()', 1000 );"+
                        '</script>'+
                '</body></html>');
    }
}

