function mostrar(){
	
	var numero= 0;
	var suma= 0;
	var promedio= 0;
	var i= 0;

	while(i<5){

		do{
			numero= parseInt(prompt("Ingrese un número:"));
			if(isNaN(numero)){
				alert("Error en el ingreso!");
			}
		}
		while(  isNaN(numero)   );

		suma= suma + numero;
		i++;
	}

	promedio= suma/5;

	alert("El promedio es: "+ promedio);
	document.getElementById("suma").value= suma;
	document.getElementById("promedio").value= promedio.toFixed(2);

}