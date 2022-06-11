/*funcion del ejercicio 1*/
function sum_cuad_dig(numero) 
{
	let i=0;
	let suma = 0;
	while (numero[i] != null)
	{
		suma=suma +(numero[i]*numero[i]);
		i++;
	}
	if (suma > numero)
	{
		let algo ='El número: ' + numero + ' Junto con su suma de los dígitos al cuadrado: ' + suma + ' Es desbordado';
		respuesta1.textContent = algo;
	}
	else
	{
		let algo = 'El número: ' + numero + ' Junto con su suma de los dígitos al cuadrado: ' + suma + ' No es desbordado';
		respuesta1.textContent = algo;
	}
}
/*Funcion del ejercicio 2*/
function fruteria_calculo (peras, manzanas, fresas, sandias)
{
	let condicion = parseInt(peras)+parseInt(manzanas)+parseInt(fresas)+parseInt(sandias);
	let precio_peras = peras * 3;
	let precio_manzanas = manzanas * 2.5;
	let precio_fresas = fresas * 4;
	let precio_sandias = sandias;
	let precio = 0;
	if (condicion>=5)
	{
		precio_peras = precio_peras*0.9;
		precio_manzanas = precio_manzanas*0.9;
		precio_fresas = precio_fresas*0.9;
		precio_sandias = precio_sandias*0.9;
	}
	if(peras>0)
	{
		let texto1 = 'Kilos de las peras: ' + peras + ' a 3€/Kg sale a: ' + precio_peras+ '€';
		respuesta2p.textContent = texto1;
		precio = precio + precio_peras;
	}
	if(manzanas>0)
	{
		let texto2 = 'Kilos de las manzanas: ' + manzanas + ' a 2,5€/Kg sale a: ' + precio_manzanas+ '€';
		respuesta2m.textContent = texto2;
		precio = precio + precio_manzanas;
	}
	if(fresas>0)
	{
		let texto3 = 'Kilos de las fresas: ' + fresas + ' a 4€/Kg sale a: ' + precio_fresas+ '€';
		respuesta2f.textContent = texto3;
		precio = precio + precio_fresas;
	}
	if(sandias>0)
	{
		let texto4 = 'Kilos de las sandias: ' + sandias + ' a 1€/Kg sale a: ' + precio_sandias+ '€';
		respuesta2s.textContent = texto4;
		precio = precio + precio_sandias;
	}
	let texto5 = 'Precio total de la compra: ' + (precio + 5) + '€';
	respuesta2t.textContent = texto5;	
	
}
/*funcione del ejercicio 3*/
let contador = 0;
function killnodo () 
		{
			while(contador != 0)
			{
				let nodo=document.getElementById(contador);
				nodo.parentNode.removeChild(nodo);
				contador--;
			}
		}
function crearnodo(grupo, album)
	{
		contador++;
		let newP = document.createElement('p');
		newP.setAttribute('id', contador);
		newP.textContent = contador + '. ' + grupo + ' : ' + album;
		document.getElementById('f3').appendChild(newP);
	}
function mostrar (campo)
{
	alert(campo);
}

	