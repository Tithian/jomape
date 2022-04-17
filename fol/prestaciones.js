function magic() {
	document.getElementById("magic").style.display = "block";
}

function inv() {
	document.getElementById("magic").style.display = "none"
}

function chkFloat(texto) {  // HAGO UNA FUNCIÓN QUE COMPRUEBE QUE ES UN FLOAT
	var esfloat = parseFloat(document.getElementById(texto).value);
	if (esfloat>=0) {
        return esfloat;
    }
}

function fill(texto, append, tool) {
	if (append===true) {
		let rell = document.getElementById(tool).innerHTML += texto;
	} else {
		let rell = document.getElementById(tool).innerHTML = texto;
	}
}

function bajaCalc() {
	var sueldo_base = chkFloat("base");
	var num_pagas = chkFloat("num_pagas");
	var prorrateo = Math.round(((num_pagas*sueldo_base)/12)*100)/100;
	var media_horas_extra = chkFloat("media_horas_extra");
	var inicio = new Date(document.getElementById("inicio_baja").value);
	var fin = new Date(document.getElementById("fin_baja").value);

	var brcc = Math.round(((sueldo_base+prorrateo)/30)*100)/100;
	var brcp = Math.round((brcc+(media_horas_extra/360))*100)/100;
	var br;

	const un_dia = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds


	if(fin>inicio) {
		var dias_de_baja = Math.round(Math.abs((fin - inicio) / un_dia))+1;
		var ses, set, diasa, diasb, diasc, tramo1, tramo2, tramo3, total;
		console.log(prorrateo);

		if (document.querySelector("input[name='bc']:checked").value === "brcp") {
            br = brcp;
			var set = Math.round((br*0.75)*100)/100;
            tramo1 = Math.round(set*(dias_de_baja-1)*100)/100;
            diasa = dias_de_baja-1;
            var fuckyou = isNaN(br);
            if (fuckyou===false) {
                if (dias_de_baja>1) {
	                fill("El primer día cobra su salario normal.<br>", false, "toolbaja");
	                fill("Los "+diasa+" días siguientes le pertenecen: "+tramo1, true, "toolbaja");
	                neg = false;
	            } else {
	                fill("El primer día cobra su salario normal.", false, "toolbaja");
                }
            } else {
                fill("Revise los campos.", false, "toolbaja")
            }



        } else {
            br = brcc;
            var ses = Math.round((br*0.6)*100)/100;
			var set = Math.round((br*0.75)*100)/100;
			var fuckyou = isNaN(br);

			if (fuckyou===false) {
	            switch(true) {
				case (dias_de_baja>=21):
					tramo1 = Math.round((ses*12)*100)/100;
					tramo2 = Math.round((ses*5)*100)/100;
					tramo3 = Math.round(set*(dias_de_baja-20)*100)/100;
					diasc = dias_de_baja%21;
					diasb = 5;
					diasa = 12;
					total = Math.round((tramo1+tramo2+tramo3)*100)/100;
					fill("Los 3 primeros días no cobra.<br>", false, "toolbaja");
					fill("Los siguientes "+diasa+" días le corresponden "+tramo1+"€.<br>", true, "toolbaja");
					fill("Los siguientes "+diasb+" días le corresponden "+tramo2+"€.<br>", true, "toolbaja");
					fill("Los "+diasc+" últimos días le corresponden "+tramo3+"€.<br>", true, "toolbaja");
					fill("Total: "+total+"€.", true, "toolbaja");
			    break;

				case (dias_de_baja>=16 && dias_de_baja<21):
					tramo1 = Math.round((ses*12)*100)/100;
					tramo2 = Math.round(ses*(dias_de_baja-15)*100)/100;
					diasb = dias_de_baja%16;
					diasa = 12;
					total = Math.round((tramo1+tramo2)*100)/100;
					fill("Los 3 primeros días no cobra.<br>", false, "toolbaja");
					fill("Los siguientes "+diasa+" días le corresponden "+tramo1+"€.<br>", true, "toolbaja");
					fill("Los "+diasb+" últimos días le corresponden "+tramo2+"€.<br>", true, "toolbaja");
					fill("Total: "+total+"€.", true, "toolbaja");
				break;

				case (dias_de_baja>=4 && dias_de_baja<16):
					tramo1 = Math.round(ses*(dias_de_baja-3)*100)/100;
					diasa = dias_de_baja%4;
					total = tramo1;
	                fill("Los 3 primeros días no cobra.<br>", false);
					fill("Los siguientes "+diasa+" días le corresponden "+tramo1+"€.<br>", true, "toolbaja");
					fill("Total: "+total+"€.", true, "toolbaja");
			    break;

			    case (dias_de_baja<=4):
				    fill("Los 3 primeros días no cobra.<br>", false, "toolbaja");
			    break;
				}
	        } else {
			fill("Revise los campos.", false, "toolbaja");
			}
		}
	}
	else {
		fill("Pon bien las fechas, retarded.", false, "toolbaja");
	}

}

function desempleoCalc() {
	// Paso 1
	var dias = document.getElementById("total_dias_cotizados").value;
	var regex1 = /^[1-9]\d*$/     // Solo enteros positivos
	var chk_dias = dias.match(regex1);
	var dias_paro;
	// Paso 2
	var cant_cot = document.getElementById("cantidad_cotizada").value;
	var regex2 = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/ // Solo float positivos
	var chk_cant = cant_cot.match(regex2);
	var brdiaria, set, cin;
	// Esto pa los máximos según hijos
	var hijos = document.getElementById("hijos").value;
	var regex3 = /^[0-9]\d*$/     // Solo enteros positivos (o 0)
	var chk_hijos = hijos.match(regex3);
	var max = 1182.16;
	var min = 540.41;
	// Para el descuento
	var desc = Math.round(((cant_cot/6)*0.047)*100)/100;


	if (chk_hijos) {
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
	}

	if (chk_dias && dias<=100000) {
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
				dias_paro = 0
				fill("No le corresponden días de paro.", false, "tooldesempleo");
			break;
			}

//		fill("Los días de paro son: "+dias_paro, false, "tooldesempleo");
	} else {
		fill("Introducza una cantidad de días cotizados correcta.", false, "tooldesempleo");

	}
	if (chk_cant && dias_paro>0) {
		brdiaria = Math.round((cant_cot/180)*100)/100;
		console.log("BR:"+brdiaria);
		fill("Ese ya gana mucho dinero, y encima queriendo cobrar el paro, que poca vergüenza.",false, "tooldesempleo");
	} else if (dias_paro!=0 && chk_dias) {
		if (dias>100000) {
			fill("Tampoco te flipes, mete 4 cifras maximo.", false, "tooldesempleo");
		} else {
		fill("Introduzca una cantidad en € cotizada correcta.", false, "tooldesempleo");
		}
	}


	if (dias_paro<=180 && dias_paro>0 && cant_cot<100000) {
		set = Math.round((brdiaria*0.7)*100)/100;
		var tramo1 = Math.round((set*30)*100)/100;
		console.log("El tramo entra por aquí:"+tramo1);
		if (tramo1>max) {
			tramo1 = max;
			console.log("Como es mucho, pasa a ser:"+tramo1);
		} else if(tramo1<min) {
			tramo1 = min;
		}

	} else if(dias_paro>0 && cant_cot<100000){
		set = Math.round((brdiaria*0.7)*100)/100;
		cin = Math.round((brdiaria*0.5)*100)/100;
		var tramo1 = Math.round((set*30)*100)/100;
		console.log("TRAMO1 AQUI:"+tramo1);
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
	console.log("El tramo no trolea: "+tramo1);
	console.log("El descuento es: "+desc);
	var t1 = Math.round((tramo1-desc)*100)/100;
	console.log("Lo que trolea es esto: "+t1);
	var t2 = Math.round((tramo2-desc)*100)/100;
	var tt1, tt2, meses_restantes;

	if (t2 && tramo1) {
		tt1 = Math.round((t1*6)*100)/100;
		meses_restantes = Math.round((dias_paro/30)*100)/100;
		tt2 = Math.round((t2*meses_restantes)*100)/100;
		total = Math.round((tt1+tt2)*100)/100;
		fill("Días 1º al 180º: "+t1+" €/mes.<br>Total: "+tt1+" €.<br>", false, "tooldesempleo");
		fill("Días 181ª al "+dias_paro+"º: "+t2+" €/mes.<br>Total: "+tt2+" €.", true, "tooldesempleo");
		fill("<br><br>Total líquido a percibir: "+total+"€.", true, "tooldesempleo");

	} else if (tramo1) {
		meses_restantes = Math.round((dias_paro/30)*100)/100;
		tt1 = Math.round((t1*meses_restantes)*100)/100;
		fill("Días 1º al "+dias_paro+"º: "+t1+" €/mes.<br><br>Total líquido a percbir: "+tt1+" €.<br>", false, "tooldesempleo");
	}


//console.log(meses_restantes);
//console.log("Descuento: "+desc);
//console.log("Días de paro: "+dias_paro);
//console.log("Tramo1: "+t1);
//console.log("Minimo: "+min);
//console.log("Máximo: "+max);
}

/*
console.log("sueldo_base");
console.log("num_pagas");
console.log("prorrateo");
console.log("media_horas_extra");
console.log("br");


fill("Continue.", false, "tooldesempleo");
*/