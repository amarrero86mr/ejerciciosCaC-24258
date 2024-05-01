/**
 * Autor/a:
 * version:
 * fecha:
 * El siguiente script genera control de flujos mediante switch y bucle do while
 * Usar variables de tipo let, como banderas para controlar la ejecución de los bucles
 * El programa nos va a saludar dando la bienvenida y el adios
 */

// variables
let opc;
// variable de control(bandera)


do{
    // inicializamos opc por instruccion de usuario
    opc = prompt('bienvenido/a al sistema, \n  Ingrese 1 si desea un saludo \n Ingrese 2 si desea una despedida');
    var repite=false;    
    // switch 
    switch (opc) {
        case '1':
            document.write(`<h1> hola que tengas un muy lindo día </h1>`);
    
            break;
        case '2':
            document.write(`<h1> Adios! Hasta la proxima</h1>`);
            break;
        default:
            alert('opción incorrecta')
            repite = true;
            break;
    };

} while (repite); //condicion de salida repite=false
// usuario no cometio un error