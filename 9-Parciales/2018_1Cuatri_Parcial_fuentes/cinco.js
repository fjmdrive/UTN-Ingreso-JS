function mostrar(){

    var planeta= prompt("Ingrese un planeta:");

    switch(planeta){
        case "mercurio":
        case "venus":
            alert("Acá hace más calor.");
            break;
        case "tierra":
            alert("Acá vivimos.");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Acá hace más frío.");
            break;
        default:
            alert("Planeta inválido.");
            break;
    }

}
