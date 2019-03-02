/*
Realizar el algoritmo que permita ingresar el 
  
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo 
*/
function mostrar()
{
    var cantPares = 0;
    var primerAnimal= true;
    
    var mayorPeso;
    var nombrePesado;
    var tempPesado;
    var cantBajoCero= 0;

    var sumaPeso=0;
    var cantAnimales=0;

    var continuar= 's';

    while (continuar == 's'){
        var nombre= prompt("Ingrese el nombre del animal:");
        var peso= parseInt(prompt("Ingrese el peso (entre 1 y 1000:"));
        while(!(peso>=1 && peso<=1000)){
            peso= parseInt(prompt("Error. Vuelva a ingresar el peso (entre 1 y 1000:"));
        }
        var temp= parseInt(prompt("Ingrese la temperatura (entre -30 y 30:"));
        while(!(temp>=-30 && temp<=30)){
            temp= parseInt(prompt("Error. Vuelva a ingresar la temp. (entre -30 y 30):"));
        }
        if (temp%2==0){ //Cantidad de temperaturas pares
            cantPares++;
        }
        if (primerAnimal){ //Si es el primer animal, lo considero el mas pesado.
            nombrePesado= nombre;
            tempPesado= temp;
            mayorPeso= peso;
            primerAnimal= false;
        }else{
            if(peso>mayorPeso){ //Si no es el primer animal, comparo su peso.
                nombrePesado= nombre;
                tempPesado= temp;
                mayorPeso= peso;
            }
        }
        if(temp<0){  //Cantidad de animales con temperaturas bajo 0.
            cantBajoCero++;
        }
        sumaPeso= sumaPeso + peso;
        cantAnimales++;

        continuar= prompt("Desea ingresar otro animal? (s/n)");
    }

    alert("Cantidad de temperaturas pares: "+ cantPares +
          "\nNombre del mas pesado: "+ nombrePesado + " y su temperatura es: "+ tempPesado +
          "\nCantidad de animales que viven bajo cero: "+ cantBajoCero +
          "\nPromedio del peso de todos los animales: "+ (sumaPeso/cantAnimales).toFixed(2));
    
}
