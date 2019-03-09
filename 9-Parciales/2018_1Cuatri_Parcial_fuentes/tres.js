function mostrar()
{
    var precio= parseFloat(prompt("Ingrese el precio:"));
    while(isNaN(precio)){
        precio= parseFloat(prompt("Error. Ingrese el precio:"));
    }

    var porcentajeDescuento= parseFloat(prompt("Ingrese el porcentaje de descuento:"));
    while(isNaN(porcentajeDescuento)){
        porcentajeDescuento= parseFloat(prompt("Error. Ingrese el porcentaje de descuento:"));
    }
    
    var precioFinal= precio - precio*porcentajeDescuento/100;

    document.getElementById("elPrecioFinal").value= precioFinal.toFixed(2);
}
