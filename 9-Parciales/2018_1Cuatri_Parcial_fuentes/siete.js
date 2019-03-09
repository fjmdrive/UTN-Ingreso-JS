function mostrar(){
    var i= 0;
    var sumaNotas= 0;
    var notaMenor;
    var sexoMenor;
    var contador= 0;
    while(i<5){
        var nota= parseInt(prompt("Ingrese una nota entre 0 y 10:"));

        //Si me piden un rango numérico, es más fácil validar sin tener
        //que usar el isNaN(), definos el rango válido y lo negamos:
        while( ! (nota>=0 && nota<=10)){
            nota= parseInt(prompt("Nota no válida, vuelva a ingresarla:"));
        }

        var sexo= prompt("Ingrese su sexo, f o m:");
        while(!(sexo=='f' || sexo=='m')){
            sexo= prompt("Sexo no válido, vuelva a ingresarlo:");
        }

        /*  En vez de i == 0 podía haber usado una variable booleana
            previamente inicializada en true, pero antes de salir del
            if no hay que olvidarse de pasarla a false.
        */

        if (nota < notaMenor || i == 0){
            notaMenor= nota;
            sexoMenor= sexo;
        }
        
        if((sexo== 'm') && (nota > 6)){
            contador++;
        }
        sumaNotas= sumaNotas + nota;
        i++;
    }
    alert("El promedio de las notas es: "+ (sumaNotas/5).toFixed(2));
    alert("La nota mas baja es: "+ notaMenor+ " y corresponde al sexo: "+ sexoMenor);
    alert("La cantidad de varones con nota mayor a 6 es: "+ contador);
}