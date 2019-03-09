function mostrar(){

    var laHora = parseInt(document.getElementById('hora').value);

	switch(laHora){
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
        default:
            alert("Ingresó una hora que no esta en el rango de 7 a 11.");
    }

}