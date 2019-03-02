/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar (){
    var precio1= parseFloat(document.getElementById("PrecioUno").value);
    var precio2= parseFloat(document.getElementById("PrecioDos").value);
    var precio3= parseFloat(document.getElementById("PrecioTres").value);

    var suma= precio1+ precio2+ precio3;
    alert("La suma de los productos es: $"+ suma.toFixed(2));	
}
function Promedio (){
    var precio1= parseFloat(document.getElementById("PrecioUno").value);
    var precio2= parseFloat(document.getElementById("PrecioDos").value);
    var precio3= parseFloat(document.getElementById("PrecioTres").value);

    var promedio= (precio1+ precio2+ precio3)/3;
    alert("El promedio de los productos es: $"+ promedio.toFixed(2));
}
function PrecioFinal (){
    var precio1= parseFloat(document.getElementById("PrecioUno").value);
    var precio2= parseFloat(document.getElementById("PrecioDos").value);
    var precio3= parseFloat(document.getElementById("PrecioTres").value);

    var suma= precio1+ precio2+ precio3;
    var aumento= suma*0.21;
    var precioFinal= suma+ aumento;

    alert("El precio final es: $" + precioFinal.toFixed(2));
}