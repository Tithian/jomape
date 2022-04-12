<html>
<body>
    <div>
        <h1>Bienvenido, <?php echo $_POST["nombre"]; ?></h1>
        <p>El precio original es de <?php echo $_POST["precio"]; ?></p>
        <p>Los impuestos son
        <?php
            echo $_POST["impuesto"];
        ?> %
        </p>
        <p>
        <?php
        $t = $_POST["promo"];

        if ($t == "none") {
          echo "No tienes descuento, pringao";
        } elseif ($t == "trans") {
          echo "No se tendrán en cuenta gastos de transporte";
        } else {
          echo "Tienes un 5% de descuento sobre el precio original";
          $disc = 5;
        }

        ?>
        </p>
        <p>El precio total es de:
         <?php

            $imp = $_POST["precio"]*$_POST["impuesto"]/100;
            if ($disc == "5") {
                $disc = $_POST["precio"]*5/100;
                $total = $imp+$_POST["precio"]-$disc;
                echo $total;
            } else {
                $total = $imp+$_POST["precio"];
                echo $total;
            }

         ?>
        </p>
    </div>

</body>
</html>