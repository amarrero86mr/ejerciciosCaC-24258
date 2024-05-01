



let cant, note, suma, promedio;

// cant y nota inicializamos mediante instruccion de entrada
// suma y promedio inicializamos en 0 
suma = 0;
promedio = 0;

// Pedimos al usuario que ingrese la cantidad de notas
cant = parseInt(prompt("Ingrese la cantidad de notas"));
// modifico el valor de cant para que sea un numero entero

for (let i = 0; i < cant; i++) {
    // le pedimos al usuario que ingrese la nota
    nota = parseFloat(prompt('ingrese la nota'));
    //mostramos la nota
    document.write('<h1> la nota ingresada es ' + nota +' </h1>');
    // acumulamos la nota

    suma += nota;  
};

promedio = suma/cant;

document.write(`<p style="font-weight:bold">El promedio final es: ${promedio}</p>`);
document.write(`<p style="color:green; font-weight:bold">El programa ha finalizado</p>`);