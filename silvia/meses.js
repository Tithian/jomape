function mostrarMeses()
{
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (chorizo=0; chorizo<12; chorizo++) {
        document.write(meses[chorizo]);
        document.write("</br>");
    }
}