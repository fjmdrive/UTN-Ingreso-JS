function mostrar(){

    //Averiguar que quiere decir con: "Si la hora es menor a 24"
    
    //Los ingresos por id en este curso de ingreso no los validamos:
    var hora= parseInt(document.getElementById("laHora"));

    var cadena;

    switch (hora){
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            cadena= "Es de noche";
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            cadena= "Es de noche, a dormir.";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            cadena= "Es de mañana."
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            cadena= "Es de tarde.";
            break;
        default:
            cadena= "La hora no es válida.";
    }

    alert(cadena);

}
