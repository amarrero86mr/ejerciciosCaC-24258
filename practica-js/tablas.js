//asignemos a "numero" el valor de la tabla
let number = 7; //valor a elegir 

function tablaDel(numero)  {
    console.log(`Veamos la tabla del ${numero}... `);
    
    for (let x = 1; x <=10; x++) {
        console.log( numero +' x ' + x + ' = ' + (numero*x));
    };
}
tablaDel(number);

// tablaDel(parseInt(prompt('elige un numero para mostrarte su tabla de multiplicacion'))); 