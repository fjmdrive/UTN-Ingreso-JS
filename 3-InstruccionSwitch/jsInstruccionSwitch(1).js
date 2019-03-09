function mostrar() {

    var mes = document.getElementById("mes").value;

    switch (mes) {

        case "Enero":
            alert("Que comiences bien el año!!!");
            break;
        case "Marzo":
            alert("A clases!!!");
            break;
        case "Julio":
            alert("Se vienen las vacaciones!!!");
            break;
        case "Diciembre":
            alert("Felices fiestas!!!");
            break;
        default:
            alert("Seleccionó un mes no contemplado en el ejercicio.");
    }

}