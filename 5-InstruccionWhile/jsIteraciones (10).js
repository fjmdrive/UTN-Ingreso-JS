function mostrar(){

	var sumaNeg= 0;
	var sumaPos= 0;
	var cantNeg= 0;
	var cantPos= 0;
	var cantCeros= 0;
	var cantPares= 0;
	var promPos= 0;
	var promNeg= 0;

	do{
		var num= parseInt(prompt("Ingrese un número entero:"));
		while(isNaN(num)){
			num= parseInt(prompt("Error, vuelva a ingresar el número:"));
		}

		if(num>0){
			sumaPos= sumaPos + num;
			cantPos++;
		}else if (num<0){
			sumaNeg= sumaNeg + num;
			cantNeg++;
		}else{
			cantCeros++;
		}

		if(num%2==0){
			cantPares++;
		}

		var continuar= prompt("Desea ingresar otro número?(s/n):").toLowerCase();
	}while(continuar=='s');

	if(cantPos>0){
		promPos= sumaPos/cantPos;
	}

	if(cantNeg>0){
		promNeg= sumaNeg/cantNeg;
	}

	var diferencia= cantPos - cantNeg;

	document.write("Suma de positivos: "+ sumaPos +
					"<br>Suma de negativos: "+ sumaNeg +
					"<br>Cantidad de positivos: "+ cantPos +
					"<br>Cantidad de negativos: "+ cantNeg +
					"<br>Cantidad de ceros: "+ cantCeros +
					"<br>Cantidad de pares: "+ cantPares +
					"<br>Promedio de positivos: "+ promPos.toFixed(2) +
					"<br>Promedio de negativos: "+ promNeg.toFixed(2) +
					"<br>Diferencia entre positivos y negativos: "+ diferencia);

}