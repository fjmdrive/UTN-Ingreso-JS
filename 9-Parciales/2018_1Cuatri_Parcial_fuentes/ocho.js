function mostrar(){

    var contPares= 0;
    var contImpares= 0;
    var contCeros= 0;
    var contPositivos= 0;
    var sumaPositivos= 0;
    var sumaNegativos= 0;

    var letraMenor;
    var letraMayor;
    var numeroMenor;
    var numeroMayor;
    var primerNumero= true;

    do{
        var letra= prompt("Ingrese una letra:");
        while ( ! (isNaN(letra)) ){
            letra= prompt("Error. Ingrese una letra:");
        }

        var num= parseInt(prompt("Ingrese un número entero entre -100 y 100:"));
        while ( ! (num>= -100 && num <= 100) ){
            num= parseInt(prompt("Error. Ingrese un número entero entre -100 y 100:"));
        }

        //Contar los pares y los impares:
        if(num%2 == 0){
            contPares++;
        }else{
            contImpares++;
        }

        //Contar o acumular ceros, positivos y negativos:
        if(num == 0){
            contCeros++;
        }else if (num>0){
            contPositivos++;
            sumaPositivos= sumaPositivos + num;
        }else{
            sumaNegativos= sumaNegativos+ num;
        }

        //Obtener máximos y mínimos:
        if(num < numeroMenor || primerNumero){
            numeroMenor= num;
            letraMenor= letra;
        }
        if(num > numeroMayor || primerNumero){
            numeroMayor= num;
            letraMayor= letra;
            primerNumero= false;
        }

        var continuar= prompt("Desea continuar?(s/n):").toLowerCase();
    }while(continuar=="s");

    var promedioPositivos= 0;
    if(contPositivos > 0){
        promedioPositivos= sumaPositivos/contPositivos;
    }

    document.write("Cantidad de pares: "+ contPares+ "<br>");
    document.write("Cantidad de impares: "+ contImpares + "<br>");
    document.write("Cantidad de ceros: "+ contCeros+ "<br>");
    document.write("Promedio de los positivos: "+ promedioPositivos.toFixed(2)+ "<br>");
    document.write("Suma de los negativos: "+ sumaNegativos+ "<br>");
    document.write("Número máximo: "+ numeroMayor+ " y su letra: "+ letraMayor+ "<br>");
    document.write("Número mínimo: "+ numeroMenor+ " y su letra: "+ letraMenor+ "<br>");
  
}