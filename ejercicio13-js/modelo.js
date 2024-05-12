/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script modelo sirve a index.html y genera el molde principal
 * luego será adaptado a los personajes particulares en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas genéricas comunes a 
 * todos los objetos que crearemos en el futuro
 */

// definimos el objeto mediante function constructora

function Simpsons(nombre, edad, peso, esCalvo, fraseFavorita) {
    //this. indica que la variable será propiedad del objeto nuevo, que se creará en el otro archivo
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esCalvo = esCalvo;
    this.fraseFavorita = fraseFavorita;

    // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)
    //this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
    this.obtenerFoto = function() {
        document.write(`<div class="container">`);  
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="imagen de ${this.nombre}" >`);
    };
    
    // Método para obtener el nombre
    this.obtenerNombre = function() {
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    };
    
    // Método para obtener la edad
    this.obtenerEdad = function() {
      document.write(`<p>Edad: ${this.edad} años</p>`);
    };
    
    this.obtenerPeso = function() {
        document.write(`<p>Peso: ${this.peso} lbs</p>`);
      };

    this.obtenerEsCalvo = function() {
        let cabello;
        if (this.esCalvo){
            cabello = "si"
        } else {cabello = "no"}
        document.write(`<p>Es calvo: ${cabello}</p>`);
    };
    
    // Método para obtener la frase favorita
    this.obtenerFraseFavorita = function() {        
      document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
      document.write('</div>');
    };
};