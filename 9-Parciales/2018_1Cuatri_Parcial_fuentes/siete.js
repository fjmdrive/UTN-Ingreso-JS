function mostrar(){
    var i= 0;
    var sumaNotas= 0;
    var notaMenor;
    var sexoMenor;
    var contador= 0;
    while(i<5){
        var nota= parseInt(prompt("Ingrese una nota entre 0 y 10:"));
        while(!(nota>=0 && nota<=10)){
            nota= parseInt(prompt("Nota no válida, vuelva a ingresarla:"));
        }
        var sexo= prompt("Ingrese su sexo, f o m:");
        while(!(sexo=='f' || sexo=='m')){
            sexo= prompt("Sexo no válido, vuelva a ingresarlo:");
        }
        if (i==0){
            notaMenor= nota;
            sexoMenor= sexo;
        }else{
            if(nota<notaMenor){
                notaMenor= nota;
                sexoMenor= sexo;
            }

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