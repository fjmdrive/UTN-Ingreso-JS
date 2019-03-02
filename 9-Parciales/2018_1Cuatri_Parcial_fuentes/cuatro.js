function mostrar()
{
    var num1= parseFloat(prompt("Ingrese un número:"));
    var num2= parseFloat(prompt("ingrese otro número"));
    var esMayor= false;
    var resultado;

    if(num1 == num2){
        resultado= String(num1) + String(num2);
    }else if (num1 > num2){
        resultado= num1 - num2;
    }else{
        resultado= num1 + num2;
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
