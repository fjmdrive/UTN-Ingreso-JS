function mostrar(){  
    var edad= parseInt(document.getElementById("edad").value);
    if(edad>=13 && edad<= 17){
        document.getElementById("edad").value= "Es adolescente";
    }
}