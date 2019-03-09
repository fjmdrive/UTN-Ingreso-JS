
function mostrar()
{
    var ancho= parseFloat(prompt("Ingrese el ancho:"));
    while(isNaN(ancho)){
        ancho= parseFloat(prompt("Error. Ingrese el ancho:"));
    }

    var largo= parseFloat(prompt("Ingrese el largo:"));
    while(isNaN(largo)){
        largo= parseFloat(prompt("Error. Ingrese el largo:"));
    }
    
    var perimetro= ancho*2 + largo*2;

    alert("El perímetro es: "+ perimetro);

}
