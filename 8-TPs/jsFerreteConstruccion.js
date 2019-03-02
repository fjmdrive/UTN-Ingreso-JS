/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
    var largo= parseFloat(document.getElementById("Largo").value);
    var ancho= parseFloat(document.getElementById("Ancho").value);
    
    var metros= (largo*2 + ancho*2)*3;
    alert("Cantidad de metros de alambre: "+ metros.toFixed(2));

}
function Circulo () {
	var radio= parseFloat(document.getElementById("Radio").value);
    
    var metros= Math.PI*(radio*2)*3;
    alert("Cantidad de metros de alambre: "+ metros.toFixed(2));
}
function Materiales (){
    var largo= parseFloat(document.getElementById("Largo").value);
    var ancho= parseFloat(document.getElementById("Ancho").value);
    
    var metrosCuadrados= (largo*ancho);
    var cemento= 2*metrosCuadrados;
    var cal= 3*metrosCuadrados;
    alert("Cantidad de bolsas de cemento: "+ cemento.toFixed(2)+ "\n"+
          "Cantidad de bolsas de cal: "+ cal.toFixed(2));
}