function mostrar(){
    var i= 0;
    for(;;){
        i++;
        alert("Iteración número: "+ i);
        var salir= prompt("Para salir ingrese el 9:");
        if(salir=='9'){
            break;
        }
    }
}