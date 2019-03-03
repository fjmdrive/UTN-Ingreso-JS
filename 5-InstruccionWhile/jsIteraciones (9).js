function mostrar(){

	var mayor;
	var menor;
	var primerNumero= true;

	do{
		var num= parseFloat(prompt("Ingrese un número:"));
		while(isNaN(num)){
			num= parseFloat(prompt("Error, vuelva a ingresar el número:"));
		}

		//Revisar
		if(num>mayor || primerNumero){
			mayor= num;
		}
		if(num<menor || primerNumero){
			menor= num
			primerNumero= false;
		}


		var continuar= prompt("Desea ingresar otro número?(s/n)").toLowerCase();
	}while(continuar=='s');
	
	document.getElementById("maximo").value= mayor;
	document.getElementById("minimo").value= menor;

}