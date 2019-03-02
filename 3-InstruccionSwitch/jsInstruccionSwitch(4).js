function mostrar(){
 
    var mes = document.getElementById('mes').value;

    switch (mes) {

        case "Febrero":
            alert("28 dias");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("30 dias");
            break;
        default:
            alert("31 dias");
            break;
    }

}