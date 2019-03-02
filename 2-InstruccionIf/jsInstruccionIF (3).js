function mostrar(){  
    var edad= parseInt(document.getElementById("edad").value);
    if(edad>=18){
        document.getElementById("edad").value= "Es mayor de edad";
    }else{
        document.getElementById("edad").value= "Es menor de edad";
    }
}
