/*
Ej 1 
*/

function sumaDivisores (numero)
{
	let entero = parseInt(numero);
	let divisores = 0;
	for(let i=entero-1; i>0; i--)
	{
		if ((entero%i)==0)
		{
			divisores = divisores + i;
		}
	}
	if(perfecto(numero))
	{
		let algo ='La suma de los divisores de ' + numero + ' es: ' + divisores + ' .Y es además un número perfecto';
		respuesta1.textContent = algo;
	}
	else
	{
		let algo ='La suma de los divisores de ' + numero + ' es: ' + divisores+ ' .Pero no es un número perfecto';;
		respuesta1.textContent = algo;
	}
}

function perfecto (numero)
{
	let entero = parseInt(numero);
	let divisores = 0;
	for(let i=entero-1; i>0; i--)
	{
		if ((entero%i)==0)
		{
			divisores = divisores + i;
		}
	}
	if(divisores==entero)
	{
		return true;
	}
	else 
	{
		return false;
	}
}

/*
Ej 2 
*/

function pago (numero)
{
	let alumnos = parseInt(numero);
	let precio = 0;
	let precio_alu = 0;
	if(alumnos>0)
	{
		if(alumnos>=100)
		{
			precio = alumnos*65;
			let algo = "El precio del autobus es de: " + precio + "€ . Lo alumnos han pagado 65€ por alumno";
			respuesta2.textContent=algo;
		}
		else if(alumnos<100 && alumnos>=50)
		{
			precio = alumnos*70;
			let algo = "El precio del autobus es de: " + precio + "€ . Lo alumnos han pagado 70€ por alumno";
			respuesta2.textContent=algo;
		}
		else if(alumnos<50 && alumnos>=30)
		{
			precio = alumnos*95;
			let algo = "El precio del autobus es de: " + precio + "€ . Lo alumnos han pagado 95€ por alumno";
			respuesta2.textContent=algo;
		}
		else
		{
			precio_alu = 4000/alumnos;
			let algo = "El precio del autobus es de: 4000€ . Lo alumnos han pagado "+ precio_alu +" por alumno";
			respuesta2.textContent=algo;
		}
	}
}

/*
Ej 3 
*/

let contador = 1;
function agregarGrupo(texto){
    if(texto == ""){
        
    }
	else{
    let select = document.f3.grupos; // Vamos donde se encuentre el select, en este caso en el body, formulario de nombre ej3 y el nombre del select grupoElegir.
    let option = document.createElement('option') // Creamos el elemento opcion que queramos introducir
    option.value = texto; // Le añadimos un valor a dicho elemento
    option.text = texto; // Le añadimos un texto para que salga en la lista
    select.appendChild(option); // Lo añadimos a la lista
	}
}
function deletenodo (indice) 
	{
		let nodo=document.getElementById(indice);
		nodo.parentNode.removeChild(nodo);
		let i =parseInt(indice);
		let n =parseInt(indice)+1;
		contador--;
		while((contador+1) > i)
		{
			let nodo=document.getElementById(n);
			nodo.setAttribute('id', i);
			let texto = nodo.textContent;
			let mystring = i + texto.substring(1, texto.length);
			nodo.textContent = mystring;
			i++;
			n++;
		}
	}
function crearnodo(grupo, album, grupo_aux)
	{
		let newP = document.createElement('p');
		newP.setAttribute('id', contador);
		if ((grupo == "" && grupo_aux == "") || album == "")
		{
			alert('faltan datos');
		}
		else
		{
			if(grupo == "")
			{
				newP.textContent = contador + '. ' + grupo_aux + ' : ' + album;
				document.getElementById('id3').appendChild(newP);
				contador++;
			}
			else
			{
				newP.textContent = contador + '. ' + grupo + ' : ' + album;
				document.getElementById('id3').appendChild(newP);
				contador++;
			}
		}
	}
function mostrar (campo)
{
	alert(campo);
}