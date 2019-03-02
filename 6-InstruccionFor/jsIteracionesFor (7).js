function mostrar(){

    var num= parseInt(prompt("Ingrese un número entero mayor a 1:"));
    while(isNaN(num)||num<=1){
        num= parseInt(prompt("Error, vuelva a ingresar un número entero mayor a 1:"));
    }
    var cant= 0;
    for(var i= 1; i<=num; i++){
        if(num%i==0){
            document.write(i+"<br>");
            cant++;
        }
    }
    document.write("<br>Cantidad de divisores: "+ cant);

}