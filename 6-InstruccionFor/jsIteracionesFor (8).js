function mostrar(){

    var num= parseInt(prompt("Ingrese un número entero mayor o igual a 1:"));
    while(isNaN(num)||num<1){
        num= parseInt(prompt("Error, vuelva a ingresar un número entero mayor o igual a 1:"));
    }
    var esPrimo= true;
    for(var i= 1; i<=num; i++){
        if(i!=1 && i!=num){
            if(num%i== 0){
                esPrimo= false;
                alert("Interrumpo el bucle! Es divisible por: "+ i);
                break;
            }
        }
    }
    var mensaje= "El número "+ num;
    if(esPrimo){
        mensaje= mensaje +  " es primo";
    }else{
        mensaje= mensaje + " NO es primo"
    }
    document.write(mensaje);
}