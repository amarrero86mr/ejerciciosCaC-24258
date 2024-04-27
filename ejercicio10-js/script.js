/* 
Autor:
Version:
Fecha:
Descripción: estructuras de control para logIn
*/

// Declaracion e inicialización de variables //estaticas mediante codigo

//let usuario = 'admin'; // doy valor previo para una comparacion
//let contrasenia = 'admin'; // alfanumericas

// Declaracion e inicialización de variables //dinamica mediante prompt

// let usuario = prompt('ingrse su username');
// let contrasenia = prompt('ingrese su contraseña');

let usuario;
let contrasenia;

usuario = prompt('ingrse su username');
contrasenia = parseInt(prompt('ingrese su contraseña'));

if (usuario == 'admin' && contrasenia === 1234) {
    document.write('<h2>ingreso exitoso, bienvenido ' + usuario + '</h2>');
    console.log('ingreso exitoso');
} else {
    alert('usuario o contraseña incorrecto');
    console.log('usuario o contraseña incorrecto');
}