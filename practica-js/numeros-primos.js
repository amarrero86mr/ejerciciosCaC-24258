let numElegido = 13; //cantidad de numeros que va a revisar: si =3 >> va a revisar 1, 2 y 3 //
let numerosPrimos = [1,];

for (let recorrido = 1; recorrido <= numElegido; recorrido++) {
    
    let cont = 0;
    let div = recorrido;

    for (let x = 1; x <= div; x++) {
        if (div % x == 0) {
            
            cont ++;
        }
    }
    
    if (cont == 2){
        numerosPrimos.push(div);
    }
}
    
console.log(numerosPrimos);