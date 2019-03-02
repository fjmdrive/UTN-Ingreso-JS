function mostrar(){

/*
    //Ejercicio parcial:

    var num1= prompt("Ingrese un número:");
    var num2= prompt("Ingrese otro número:");
    var cadena= num1 + num2;

    alert(cadena);

    num1= 5;
    num2= 7;

    cadena= String(num1)+ String(num2);
    alert(cadena);  

*/

var clave = prompt("ingrese el número clave.");

while (!(clave=="utn750")){
//while(clave!= "utn750"){
    clave= prompt("La clave es inválida, vuelva a ingresarla:");
}

alert("Acceso concedido!");


}
