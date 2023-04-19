/*
=======EJERCICIO IF WHILE==============================
Hacer un programa, que nos diga 
si un numero es par o impar
1.- Una Ventana prompt
2.- Si no es valido que nos vuelva a pedir de nuevo el numero

Valor de retorno
true si es valor dado es NaN, de otro modo, false.

=================================================
*/
// solicitamos al usuario ingresar un valor 
var valor1 = parseInt(prompt("Ingrese un número"));

//mediante el ciclo while validamos dos condiciones
// que el numero NO sea un valor entero (OR) o que el valor sea menor o igual a cero
while(!Number.isInteger(valor1) || (valor1 <= 0 )){
  // de cuplirse una de las dos condiciones arrojará un mensaje de ERROR 
  // solicitando ingresar nuevamente el valor solicitado hasta que este sea válido
  var valor1 = parseInt(prompt("Error, Ingrese un número válido"));
}
//una vez pasada las validaciones anteriores dividimos el numero por 2 y guardamos el RESTO 
//en la variable modulo 
let modulo = (valor1 % 2);
//verificamos por consola si el valor es cero o distinto de cero
console.log(modulo);
//utilizamos la condisional SÍ, si la variable módulo es igual a cero imprime como respuesta que es un numero par
if (modulo == 0 ){
  alert(`${valor1} es un número par`)
} else{
  // de lo contrario imprime que es un número impar
  alert(`${valor1} es un número impar`)
}
//fin del programa


