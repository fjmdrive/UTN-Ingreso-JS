function mostrar()
{
	var edad= parseInt(document.getElementById("edad").value);
    var estado= document.getElementById("estadoCivil").value;

    if(edad>=18 && estado=="Soltero"){
        alert("Es soltero y no es menor.");   
    }
}