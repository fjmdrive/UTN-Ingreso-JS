function mostrar(){

    var clave = prompt("ingrese el número clave.");
    
    while( ! (clave=="utn750")  ){
        clave= prompt("La clave es inválida, vuelva a ingresarla:");
    }

    //Otra forma válida:
    /*
        while(clave != "utn750"){
            clave= prompt("La clave es inválida, vuelva a ingresarla:");
        }
    */

    alert("Acceso concedido!");

}
