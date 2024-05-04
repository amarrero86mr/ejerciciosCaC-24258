/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera una
 * función que llama a un menú
 * El menú consta de un switch que por recursividad 
 * vuelve a llamarse a si misma
 */

// declaración de la función para un menu

function menu() {
    
    //1- Declaración de las variables
    //Inicializacion de variables por instruccion de entrada

    let opc = prompt("Seleccione una opción:\n 1. Sumar\n 2. Restar\n 3. Multiplicar\n 4. Dividir \n 5. Salir");
    //inicializar variables
    let num1
    let num2

    if (opc > 0 && opc < 5) {
        num1 = parseInt(prompt("Ingrese el primer número"));
        num2 = parseInt(prompt("Ingrese el segundo número"));
    }
    let recursivo = true;
    // Proceso mediante estructura del menu mediante switch
    switch (opc) {
        case "1"://suma
            alert(`el resultado es: ${sumar(num1, num2)}`);
        break;
        case "2"://resta
            alert(`el resultado es: ${restar(num1, num2)}`);
        break;
        case "3":
            alert(`el resultado es: ${multiplicar(num1, num2)}`);
        break;
        case "4":
            alert(`el resultado es: ${dividir(num1, num2)}`);
        break;
        case "5": //salir
            document.write(" ¡Hasta luego! ");
            exit();
            recursivo = false;
        break; // No es necesario, pero se coloca por buenas prácticas
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida\n(1 - 2 - 3 - 4 - 5)");
            document.write();
            menu(); // Llamada recursiva para mostrar el menú nuevamente
            break;
        }
    
    if (recursivo) {
        menu();// se genera la recursividad para volver a llamar al menú
    }
}
