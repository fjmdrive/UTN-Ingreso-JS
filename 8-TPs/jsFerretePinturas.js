/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados (){
    var gradoF= parseFloat(document.getElementById("Temperatura").value);
    var gradoC= (gradoF - 32)/1.8;
    alert(gradoF.toFixed(2)+ " °F equivalen a: "+ gradoC.toFixed(2)+ " °C");
	
}

function CentigradosFahrenheit () {
	var gradoC= parseFloat(document.getElementById("Temperatura").value);
    var gradoF= (gradoC * 1.8) + 32;
    alert(gradoC.toFixed(2)+ " °C equivalen a: "+ gradoF.toFixed(2)+ " °F");
}
