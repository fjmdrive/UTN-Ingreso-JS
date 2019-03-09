function mostrar()
{
    var num1= parseFloat(prompt("Ingrese un número:"));
    while(isNaN(num1)){
        num1= parseFloat(prompt("Error. Ingrese un número:"));
    }

    var num2= parseFloat(prompt("Ingrese otro número"));
    while(isNaN(num2)){
        num2= parseFloat(prompt("Error. Ingrese otro número"));
    }

    var esMayor= false;
    var resultado;

    if(num1 == num2){   //CONCATENO
        resultado= String(num1) + String(num2);
    }else if (num1 > num2){ //RESTO
        resultado= num1 - num2;
    }else{
        resultado= num1 + num2; //SUMO
        if (resultado>10){
            esMayor= true;
        }
    }

    if(!esMayor){
        alert("El resultado es: "+ resultado);
    }else{
        alert("La suma es "+ resultado+ " y supero el 10");
    }

}
