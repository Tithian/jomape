<?php
$precio1 = $_POST['precio1'];

$precio2 = $_POST['precio2'];

$precio3 = $_POST['precio3'];

$media = ($precio1+$precio2+$precio3)/3;

echo "<br/> &nbsp; Datos Recibidos";

echo "<br/> &nbsp; Precio producto estblecimiento 1: ". $precio1. "euros";

echo "<br/> &nbsp; Precio producto estblecimiento 2: ". $precio2. "euros";

echo "<br/> &nbsp; Precio producto estblecimiento 3: ". $precio3. "euros <br/>";

echo "<br/> &nbsp; El precio medio del producto es de: ". $media. "euros";

?>