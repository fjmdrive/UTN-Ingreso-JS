function mostrar()
{
	var cont = 0, suma = 0, respuesta = "s";
	do{
		do{
			var numero= parseInt(prompt("Ingrese un número:"));
			if( isNaN(numero)){
				alert("Error en el ingreso!");
			}
		}while(isNaN(numero));

		cont++;
		suma= suma + numero;

		respuesta= prompt("Desea ingresar otro número?(s/n):").toLowerCase;

	}while(respuesta == "s");
	promedio = suma / cont;
	document.getElementById("suma").value = suma.toFixed(2);
	document.getElementById("promedio").value = promedio.toFixed(2);

}//FIN DE LA FUNCIÓN