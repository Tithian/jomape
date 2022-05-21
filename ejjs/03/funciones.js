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

function convertir(temp,fc) {
	let res;
    if (fc === true) {
        res = (temp-32)*5/9;
    } else {
        res = (temp*9/5)+32;
    }
    return parseFloat(res.toFixed(5))
}

function mayor(a,b) {
	if (a>b) {
		return a
	} else {
		return b
	}
}

function primo(n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0){
        return false;
        }
    }
    return true;
}

function area(r) {
    return Math.PI*(r**2);
}

function sumaDivisores(n) {
	let total = [];
	for(let i=0;i<n;i++) {
		if(n%i === 0) {
			total.push(i);
		}
	}
	return total
}

function factorial(num) {
	num = BigInt(num)
    if(num==1n || num==0n) {
        return 1n;
    } else if (num<0n) {
        return -1;
    } else {
        return num*factorial(num-1n);
    }
}

function contar(n) {
	sum = 0;
	arr = String(n).split("")
	for(let i=0; i<arr.length;i++) {
		num = parseInt(arr[i])
		console.log(num)
		sum += num
	}
	return sum;
}

function binario(n) {
	return (n >>> 0).toString(2);
}

