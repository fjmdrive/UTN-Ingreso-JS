function mostrar()
{
    var precio= parseFloat(prompt("Ingrese el precio:"));
    var porcentajeDescuento= parseFloat(prompt("Ingrese el porcentaje de descuento:"));

    var precioFinal= precio - precio*porcentajeDescuento/100;

    document.getElementById("elPrecioFinal").value= precioFinal.toFixed(2);
}
