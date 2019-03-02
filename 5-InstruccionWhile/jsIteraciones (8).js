function mostrar(){

	var flag=1;
	var sumaPositivos=0;
	var productoNegativos=0;

	do{
		var num= parseFloat(prompt("Ingrese un número"));

		while(isNaN(num)){
			num= parseFloat(prompt("Número inválido, vuelva a ingresar:"));
		}

		if(num<0 && flag){ //Tengo al primer negativo
			productoNegativos= 1;
			flag= 0;
		}

		if(num>0){
			sumaPositivos= sumaPositivos + num;
		}else if (num<0){
			productoNegativos= productoNegativos * num;
		}

		var continuar= prompt("Desea ingresar otro número? (s/n)").toLowerCase();
	}while(continuar=='s');

	document.getElementById("suma").value= sumaPositivos;
	document.getElementById("producto").value= productoNegativos;

}