/**
 * autor/a:
 * version: funciones.js
 * fecha: 
 * El siguiente script sirve a index.html y genera funciones 
 * para calculos aritméticos
 * Aclaracion: muchas de las funciones son ejemplos y por ende sus llamadas estan comentadas
 */

// fuction declarada, sin parametro, se las llama vacias porque no retorna nada (void)
function saludar() {
     alert('Hola Usuario, bienvenido al sitio');
};
// llamado de la function(sino no se ejecuta)
// saludar();

// function declarada con parametro tipo void
function saludar2(nombre) {
    document.write(`<h1>hola, ${nombre} bienvenida al sitio </h1>`);
};
saludar2('ALICIA');

// igual al anterior pero con tres parametros
function saludar3(nombre1, nombre2, nombre3) {
    alert("Hola, " + nombre1 + " bienvenido a mi página");   
    alert("Hola, " + nombre2 + " bienvenido a mi página");
    alert("Hola, " + nombre3 + " bienvenido a mi página");
}
//saludar3("Rodrigo", "Pedro", "Diego");

// funcion suma dos numeros
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(resultado); // hata aca no hay return y lo que muestra es solo de un espacio de memoria que nace en la funcion y retmina en la funcion, no la pasa fuera de la funcion
    return resultado;
}
// let mostrar = sumar(5, 3);

//funcion que resta dos numeros
function restar(num1, num2) {return num1 - num2;};

// let mostrar2 = restar(5,3);
// console.log(mostrar2);

//funcion declarada tipo arrow
let sumar2 = (num1, num2) => num1 + num2;

// console.log(sumar2(2,3));

//Suma con una funcion flecha

let sumarFlecha = (num1, num2) => num1 + num2; //funcion flecha de una sola linea

//tambien son funciones declaradas y paramétricas

//llamar a la función sumarFlecha

// document.writeln(sumarFlecha(10, 10)+ "<br>");

//funciones flecha con más de una línea

let sumarFlecha2 = (num1, num2,num3, num4, num5) => {
    let resultado = num1 + num2 + num3 + num4 + num5;
    return resultado;
} // aqui se debe poner return para que devuelva el resultado cuando abro llaves

//llamar a la función sumarFlecha2

// document.writeln(sumarFlecha2(10, 10, 10, 10, 10)+ "<br>");

//function multiplicar
let multiplicar = (num1, num2) => num1 * num2;

//function dividir
let dividir = (num1, num2) => num1 / num2;