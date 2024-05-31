// console.log('Inicio del proceso');
// let suma = 0;
// for (let i = 0; i < 10000000; i++) {
//     suma += i;
// }
// console.log('Suma completa: ', suma);
// console.log('Fin del proceso');

// const multiplicar = (x, y) => x * y;
// const cuadrado = (x) => multiplicar(x, x);  const trianguloCorrecto = (a, b, c) => {
// return cuadrado(a) + cuadrado(b) ===
// cuadrado(c);
// };


// trianguloCorrecto(3, 4, 5);
// console.log(trianguloCorrecto(3,4,5))

// console.log('Codigo Asincrono');  console.log('Inicio');

// function dos() {
// setTimeout(function () {
// console.log('Dos');
// }, 2000)
// }

// function uno() {
// setTimeout(function () {  console.log('Uno');
// }, 5000)
// dos();
// console.log('Tres');
// }

// uno();  console.log('Fin')

// const mensajeUno = () => {
//     setTimeout(() => {
//         return console.log("Hola desde mensaje uno");;
//     }, 3000);
// }

// const mensajeDos = () => {
//     setTimeout(() => {
//         return console.log("Hola desde mensaje dos");;
//     }, 5000);
// }

// const mensajeTres = () => {
//     setTimeout(() => {
//         return console.log("Hola desde mensaje tres");;
//     }, 1000);
// }

// mensajeUno();
// mensajeDos();
// mensajeTres();

// // funciones callback (funciones que se pasan como argumento
// // a otra función y se ejecutan dentro de la misma función)

// function mensaje(texto, cb) {
//   console.log(texto);
//   cb();
// }

// console.log("Hola");

// const cb = () => {
//   console.log("Ejemplo Sincrónico");
// }

// setTimeout(cb, 3000);

// setTimeout(() => {
//     console.log("Sincrónico");
//   }, 1000); //Primer parámetro es la función a ejecutar,
//   // el segundo es el tiempo en milisegundos

// console.log("Mundo");

// const mensajeD = () => {
//     const intervalo = setInterval(() => {
//         return console.log("Hola desde mensaje dos");;
//     }, 500);
//     setTimeout(() => {
//         clearInterval(intervalo);
        
//     }, 3000);
// }
// mensajeD();// entra en el event loop, y se ejecuta cuando el navegador lo permite.

function esperar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve ('gracias por la espera'), 4000);
    });
}

console.log('1');
console.log(esperar());
console.log('3');

console.log("1");
esperar().then((result) => console.log(result));
console.log("3");

