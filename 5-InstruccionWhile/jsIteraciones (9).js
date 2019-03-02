function mostrar(){

	var mayor;
	var menor;
	var primerNumero= true;

	do{
		var num= parseFloat(prompt("Ingrese un número:"));
		while(isNaN(num)){
			num= parseFloat(prompt("Error, vuelva a ingresar el número:"));
		}

		if(primerNumero){
			mayor= num;
			menor= num;
			primerNumero= false;
		}else{
			if(num>mayor){
				mayor= num;
			}else if (num<menor){
				menor= num;
			}
		}
		var continuar= prompt("Desea ingresar otro número?(s/n)").toLowerCase();
	}while(continuar=='s');
	
	document.getElementById("maximo").value= mayor;
	document.getElementById("minimo").value= menor;

}