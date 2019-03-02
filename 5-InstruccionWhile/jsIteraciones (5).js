function mostrar(){

    var sexo = prompt("ingrese f ó m .");

    while(sexo!='f' && sexo!= 'm'){
    //while (!(sexo=="f" || sexo=="m")){
        sexo= prompt("Sexo incorrecto, vuelva a ingresarlo:");
    }
    
    if(sexo == 'f'){
        document.getElementById("Sexo").value = "Femenino";
    }
    else{
        document.getElementById("Sexo").value = "Masculino";
    }

}