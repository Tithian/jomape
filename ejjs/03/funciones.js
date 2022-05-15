function potencia(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

function par(n){
	if ( n % 2 == 0 ) {
		return true;
	}
	else {
		return false;
	}
}

function irpf(s) {
	res = 0
	switch(true) {
		case(s<12450):
			res = 19
			break
		case(s>=12450 && s<20200):
			res = 24
			break
		case(s>=20200 && s<35200):
			res = 30
			break
		case(s>=35200 && s<60000):
			res = 37
			break
		case(s>=60000 && s<300000):
			res = 45
			break
		case(s>=300000):
			res = 47
			break
	}
	return res;
}

function factura(u,c,d,i) {
    let bruto = u*c;
    let descontado = bruto-(d*bruto)/100;
    let coniva = descontado+(descontado*i)/100;
	return coniva;
}