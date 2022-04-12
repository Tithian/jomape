function MostrarMeses(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mes = meses[<?php echo $_POST["genero"]; ?>];
    for (i=0;i<meses.length;i++)
    {
        mes+=meses[i]+"<br>";
    }
     document.getElementById("resultado").innerHTML = mesese[];
}

/*Esto es tu código tal cual*/