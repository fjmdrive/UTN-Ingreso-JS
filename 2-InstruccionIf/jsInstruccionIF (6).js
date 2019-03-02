function mostrar(){  
    var edad= parseInt(document.getElementById("edad").value);
    if (edad>= 18){
        document.getElementById("edad").value= "Es mayor de edad";
    }else{
        if(edad>= 13 && edad <= 17){
            document.getElementById("edad").value= "Es adolescente";
        }else{
            document.getElementById("edad").value= "Es un niño";
        }
    }
}