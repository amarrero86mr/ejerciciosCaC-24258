/**
 * Autor/a: 
 * version:
 * fecha:
 * El siguiente script sirve a index1.html y genera 
 * accion de repeticion con bucle while
 * Vamos a dar opcion al usuario si queremos registrar o no un dato
 * 
 */

// let dato;
// let registrar;
// registrar = prompt('desea registrar dato? s/n')
// while (registrar.toLowerCase() === 's') {
    
//     dato = prompt('ingrese un dato');

//     document.write("<h1> El dato ingresado es: " + dato + "</h1>");

//     registrar = prompt('quiere registrar otro dato? s/n');
// };

//ahora vamos a ver con confirm

registrar = confirm("Desea registrar un dato?");

while (registrar) {// condicion de salida es un booleano
    
        dato = prompt("Ingrese un dato: ");
    
        // mostramos el dato
        document.write("<h1> El dato ingresado es: " + dato + "</h1>");
    
        // preguntamos si quiere registrar otro dato
        registrar = confirm("Desea registrar otro dato?");   
    
}