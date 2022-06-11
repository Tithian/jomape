/*
Ej1
*/
function Ejercicio1(numero)
{
	
	for(let i=2; i<=numero; i++)
	{
		let comprobar=abundante(i)
		if(comprobar==true && i<numero)
			{
				respuesta1.innerHTML+=i+", ";
			}
		else if(i==numero)
		{
			respuesta1.innerHTML+=i+".";
		}
	
	}
}

function sumaDivisores (numero)
{
	let total = 0;
	for(let i=0; i<=numero; i++)
	{
		if ((numero%i)==0)
		{
			total += i;
		}
	}
	return total;
}

function abundante(numero)
{
	if (sumaDivisores(numero)>numero*2)
	{
		{
			return true;
		}
	}
	else 
	{
		return false;
	}
}


/*
Ej2
*/
function ejercicio2(num){
	let costeVuelo = pago(parseInt(num));
	respuesta2.innerHTML="El total es: " + costeVuelo + "€";
	if(num>150)
	{
		respuesta2.innerHTML="Imposible, la capacidad máxima de este avión es de 150 personas";
	}
}
function pago(num)
{
	let total = 0;
	for(let i=1;i<=num;i++)
	{
		if(i<=10)
		{
			total += 50;
		}
		else if(i>10 && i<=50)
		{
			total += 75;
		}
		else if(i>50 && i<100)
		{
			total += 100;
		}
		else if(i>100 && i<=150)
		{
			total += 150;
		}
	
	}
	return total;
}

/*Ej3*/
let contador = 1;
function agregarGrupo(texto){
    if(texto == ""){
        
    }
	else{
    let select = document.f3.grupos; 
    let option = document.createElement('option') 
    option.value = texto; 
    option.text = texto; 
    select.appendChild(option); 
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
