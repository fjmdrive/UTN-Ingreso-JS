function mostrar() {
	//Numeros enteros al azar entre 1 y 10 (incluidos)
	var nota = Math.floor(Math.random() * 10) + 1;

	if (nota >= 9 && nota <= 10) {
		alert("Excelente: " + nota);
	} else if (nota >= 4) {
		alert("Aprobó: " + nota);
	} else if (nota >= 1 && nota < 4) {
		alert("Vamos, la proxima se puede: " + nota);
	}

}