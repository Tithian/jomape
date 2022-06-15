// Expresiones regulares
const reg_pos = /^[1-9]\d*$/     // Solo enteros positivos
const reg_flo = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/ // Solo float positivos
const reg_cer_pos = /^[0-9]\d*$/     // Solo enteros positivos (o 0)

function disp(id) {
	id.style.display = "block";
}

function inv() {
	forms = document.getElementsByTagName("form")
	for(let i=0;i<forms.length;i++) {
		forms[i].style.display = "none";
	}
}

function calcularBaja() {
	let inicio = new Date(inicio_baja.value);
	let fin = new Date(fin_baja.value);
	respuesta= ""
	if (fin<inicio) {
		respuesta = "La fecha inicial debe ser menor que la final."
	} else if (inicio_baja.value == "" | fin_baja.value == ""){
		respuesta = "Introduzca las fechas de inicio y fin."
	} else if (reg_flo.test(base.value)==false){
		respuesta = "Introduzca un número positivo en el sueldo base."
	} else if (reg_pos.test(num_pagas.value)==false){
		respuesta = "Introduzca un número entero positivo en el número de pagas extras anuales."
	} else if (num_pagas.value<2) {
		respuesta = "Mínimo deberías recibir 2 pagas extras anuales por ley."
	} else if (reg_flo.test(media_horas_extra.value)==false) {
		respuesta = "Introduzca un número positivo en la media de horas extra."
	} else {
		respuesta = bajaCalc(base.value,num_pagas.value,inicio,fin,media_horas_extra.value)
	}
	r2.innerHTML = respuesta
}

function bajaCalc(sb,np,inicio,fin,mhe) {
	let respuesta = ""
	let prorrateo = Math.round(((np*sb)/12)*100)/100;
	console.log("El "+np+" y el "+sb+" dan el "+prorrateo)
	let brcc = Math.round(((parseFloat(sb)+parseFloat(prorrateo))/30)*100)/100;
	console.log("El "+sb+" y el "+prorrateo+" dan el "+brcc)
	let brcp = Math.round((brcc+(mhe/360))*100)/100;
	console.log(brcp)
	let br;

	const un_dia = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

	let dias_de_baja = Math.round(Math.abs((fin - inicio) / un_dia))+1;
	console.log(dias_de_baja)
	let ses, set, diasa, diasb, diasc, tramo1, tramo2, tramo3, total;

	if (document.querySelector("input[name='bc']:checked").value === "brcp") {
        br = brcp;
		set = Math.round((br*0.75)*100)/100;
        tramo1 = Math.round(set*(dias_de_baja-1)*100)/100;
        diasa = dias_de_baja-1;
        if (dias_de_baja>1) {
            respuesta+="El primer día cobra su salario normal.<br>";
            respuesta+="Los "+diasa+" días siguientes le pertenecen: "+tramo1+" €.";
        } else {
            respuesta+="El primer día cobra su salario normal.";
        }

    } else {
        br = brcc;
        ses = Math.round((br*0.6)*100)/100;
		set = Math.round((br*0.75)*100)/100;

        switch(true) {
		case (dias_de_baja>=21):
			tramo1 = Math.round((ses*12)*100)/100;
			tramo2 = Math.round((ses*5)*100)/100;
			tramo3 = Math.round(set*(dias_de_baja-20)*100)/100;
			diasc = dias_de_baja%21;
			diasb = 5;
			diasa = 12;
			total = Math.round((tramo1+tramo2+tramo3)*100)/100;
			respuesta += "Los 3 primeros días no cobra.<br>";
			respuesta += "Los siguientes "+diasa+" días le corresponden "+tramo1+"€.<br>";
			respuesta += "Los siguientes "+diasb+" días le corresponden "+tramo2+"€.<br>";
			respuesta += "Los "+diasc+" últimos días le corresponden "+tramo3+"€.<br>";
			respuesta += "Total: "+total+"€.";
	    break;

		case (dias_de_baja>=16 && dias_de_baja<21):
			tramo1 = Math.round((ses*12)*100)/100;
			tramo2 = Math.round(ses*(dias_de_baja-15)*100)/100;
			diasb = dias_de_baja%16;
			diasa = 12;
			total = Math.round((tramo1+tramo2)*100)/100;
			respuesta+="Los 3 primeros días no cobra.<br>";
			respuesta+="Los siguientes "+diasa+" días le corresponden "+tramo1+"€.<br>";
			respuesta+="Los "+diasb+" últimos días le corresponden "+tramo2+"€.<br>";
			respuesta+="Total: "+total+"€.";
		break;

		case (dias_de_baja>=4 && dias_de_baja<16):
			tramo1 = Math.round(ses*(dias_de_baja-3)*100)/100;
			diasa = dias_de_baja%4;
			total = tramo1;
            respuesta+="Los 3 primeros días no cobra.<br>";
			respuesta+="Los siguientes "+diasa+" días le corresponden "+tramo1+"€.<br>";
			respuesta+="Total: "+total+"€.";
	    break;

	    case (dias_de_baja<=4):
		    respuesta+="Los 3 primeros días no cobra.<br>";
	    break;
		}
	}
	return respuesta
}

function calcularDesempleo() {
	let respuesta;
	let dias = total_dias_cotizados.value;
	let chk_dias = reg_pos.test(dias);
	let cant_cot = cantidad_cotizada.value;
	let chk_cant = reg_flo.test(cant_cot);
	let nHijos = hijos.value;
	let chk_hijos = reg_cer_pos.test(nHijos);
	if(chk_dias == false) {
		respuesta = "Ingrese un número entero positivo de días mayor a cero."
	} else if(dias>2190) {
		respuesta = "Los últimos 6 años comprenden solo 2190 días."
	} else if(chk_cant == false) {
		respuesta = "La cantidad cotizada debe ser un número decimal positivo."
	} else if(cant_cot>=100000){
		respuesta = "Tu... has ganado mucho para querer el paro."
	} else if(chk_hijos == false) {
		respuesta = "Inserte un número entero y positivo de hijos."
	} else {
		respuesta = desempleoCalc(dias,cant_cot,nHijos)
	}
	r1.innerHTML = respuesta
}

function desempleoCalc(dias,cot,hijos) {
	respuesta = ""
	// Paso 1
	let dias_paro;
	// Paso 2
	let brdiaria = Math.round((cot/180)*100)/100;
	let set, cin;
	// Esto para los máximos según hijos
	let max = 1182.16;
	let min = 540.41;
	// Para el descuento
	let desc = Math.round(((cot/6)*0.047)*100)/100;
	switch (true) {
		case(dias>359 && dias<540):
			dias_paro = 120;
		break;
		case(dias>=540 && dias<720):
			dias_paro = 180
		break;
		case(dias>=720 && dias<900):
			dias_paro = 240
		break;
		case(dias>=900 && dias<1080):
			dias_paro = 300
		break;
		case(dias>=1080 && dias<1260):
			dias_paro = 360
		break;
		case(dias>=1260 && dias<1440):
			dias_paro = 420
		break;
		case(dias>=1440 && dias<1620):
			dias_paro = 480
		break;
		case(dias>=1620 && dias<1800):
			dias_paro = 540
		break;
		case(dias>=1800 && dias<1980):
			dias_paro = 600
		break;
		case(dias>=1980 && dias<2160):
			dias_paro = 660
		break;
		case(dias>=2160):
			dias_paro = 720
		break;
		case(dias<360):
			respuesta = "No le corresponden días de paro.";
		break;
		}


	switch (true) {
		case(hijos<2 && hijos>0):
			min = 722.80;
			max = 1351.04;
		break;
		case(hijos>1):
			min = 722.80;
			max = 1519.92;
		break;
	}



	if (dias_paro<=180 && dias_paro>0 && cot<100000) {
		set = Math.round((brdiaria*0.7)*100)/100;
		var tramo1 = Math.round((set*30)*100)/100;
		if (tramo1>max) {
			tramo1 = max;
		} else if(tramo1<min) {
			tramo1 = min;
		}

	} else if(dias_paro>0 && cot<100000){
		set = Math.round((brdiaria*0.7)*100)/100;
		cin = Math.round((brdiaria*0.5)*100)/100;
		var tramo1 = Math.round((set*30)*100)/100;
		// Aplicamos el descuento
		// Aqui comprobamos lo que cobraría con los topes máximos y mínimos
		if (tramo1>max) {
			tramo1 = max;
		} else if(tramo1<min) {
			tramo1 = min;
		}
		var tramo2 = Math.round((cin*30)*100)/100;
		if (tramo2>max) {
			tramo2 = max;
		} else if(tramo2<min) {
			tramo2 = min;
		}
	}
	var t1 = Math.round((tramo1-desc)*100)/100;
	var t2 = Math.round((tramo2-desc)*100)/100;
	var tt1, tt2, meses_restantes;

	if (t2 && tramo1) {
		tt1 = Math.round((t1*6)*100)/100;
		meses_restantes = Math.round((dias_paro/30)*100)/100;
		tt2 = Math.round((t2*meses_restantes)*100)/100;
		total = Math.round((tt1+tt2)*100)/100;
		respuesta += "Días 1º al 180º: "+t1+" €/mes.<br>Total: "+tt1+" €.<br>";
		respuesta += "Días 181ª al "+dias_paro+"º: "+t2+" €/mes.<br>Total: "+tt2+" €."
		respuesta += "<br><br>Total líquido a percibir: "+total+"€."

	} else if (tramo1) {
		meses_restantes = Math.round((dias_paro/30)*100)/100;
		tt1 = Math.round((t1*meses_restantes)*100)/100;
		respuesta += "Días 1º al "+dias_paro+"º: "+t1+" €/mes.<br><br>Total líquido a percibir: "+tt1+" €.<br>"
	}
	return respuesta
}

function addCom() {
	let tag = "cs"
	let tagnumber = "csvalor"
	let master = document.createElement("div");
	master.setAttribute("class", "datos periodo master")

	let div = document.createElement("div");
	div.setAttribute("class", "input-container cs");

	let divnumber = document.createElement("div");
	divnumber.setAttribute("class", "input-container");

	let input = document.createElement("input");
	input.setAttribute("class", "input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", " ")

	let inputnumber = document.createElement("input");
	inputnumber.setAttribute("class", "input");
	inputnumber.setAttribute("type", "number");
	inputnumber.setAttribute("placeholder", " ")


	let divcut = document.createElement("div");
	divcut.setAttribute("class", "cut");

	let divcutnumber = document.createElement("div");
	divcutnumber.setAttribute("class", "cut");

	let label = document.createElement("label");
	label.setAttribute("class", "placeholder")

	let labelnumber = document.createElement("label");
	labelnumber.setAttribute("class", "placeholder")

	let checkcont = compsal.getElementsByClassName("input-container cs");

	if(checkcont.length >= 0 && checkcont.length < 10) {
		let index = checkcont.length+1
		input.setAttribute("id", tag+index);
		label.setAttribute("for", tag+index);
		label.innerHTML = "Complemento "+index+":";
		div.appendChild(input);
		div.appendChild(divcut);
		div.appendChild(label);

		inputnumber.setAttribute("id", tagnumber+index);
		labelnumber.setAttribute("for", tagnumber+index);
		labelnumber.innerHTML = "Cantidad:";
		divnumber.appendChild(inputnumber);
		divnumber.appendChild(divcutnumber);
		divnumber.appendChild(labelnumber);

		master.appendChild(div);
		master.appendChild(divnumber);
		compsal.appendChild(master);
	}

}

function remCom() {
	let checkcont = compsal.getElementsByClassName("master");
	let index = checkcont.length-1
	if(checkcont.length >=1) {
		compsal.removeChild(checkcont[index])
	}
}

/*
						<div class="input-container">
							<input id="sbase" class="input" type="number" placeholder=" "/>
							<div class="cut"></div>
							<label for="sbase" class="placeholder">Salario base</label>
						</div>*/
