/** Organización del código:
 * El código en JS se puede estructurar en las secciones generales:
 * 1. Comentarios de la cabecera.
 * 2. Importación de librerías externas.
 * 3. Importación de módulos locales.
 * 4. Definición de variables globales.
 * 5. Declaración de funciones.
 * 6. Ejecución principal del código, procesos.
 * 7. Resultados. 
 */ 
/* este es un comentario en bloque */
// comentarios en linea
// instruccion de salida por consola
console.log('helo helo');
//alert('Peligro familia robinson');

//directiva
//document.write(`<h1>Hola Perinola</h1>`);

//tipos de variavles
// CON VAR 
//Principio de hoisting
console.log("Valor de x antes de la declaración:"+x); // Salida: undefined
var x = 10;
var x = 20;
console.log("Valor de x después de la declaración:"+x);

// Declaración de variables con let
// No posee propiedad de hoisting
// console.log("Valor de y antes de la declaración:", y); // Error: y is not defined
let y;
//let y = 30; // Error: y has already been declared
y = 5; //reasignacion de variable
console.log("Valor de y después de la declaración:"+ y); // Salida: 5

// constantes
const pi=3.1416
// PI = 3.1415; // Error: Assignment to constant variable.
// al declarese deben ser asignadas

// Elevación de variables con var
console.log("Valor de a antes de la declaración:"+ n); // Salida: undefined
var n;
n = 40;
console.log("Valor de a después de la declaración:"+ n); // Salida: 40

// Elevación de variables con let y const
//console.log("Valor de b antes de la declaración:"+ b); // Error: b is not defined
let m;
m = 50;
console.log("Valor de b después de la declaración:"+ m); // Salida: 50

//console.log("Valor de c antes de la declaración:"+ c); // Error: c is not defined
const p = 60;
console.log(`Valor de c después de la declaración: ${p}`); // Salida: 60

console.log(`Valor de c después de la declaración:`, p);