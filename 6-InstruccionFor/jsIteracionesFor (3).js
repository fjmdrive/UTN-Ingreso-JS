function mostrar(){

    var cant = parseInt(prompt("ingrese el número de repeticiones"));

    while(isNaN(cant) || cant<0){
        cant= parseInt(prompt("Error, vuelva a ingresar el número de repeticiones:"));
    }

    for(var i= 0; i< cant; i++){
        document.write("Hola UTN FRA<br>");
    }
    
}