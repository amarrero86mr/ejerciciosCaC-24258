class Simpsons {
    // Constructor de la clase
    constructor(nombre, edad, peso, esCalvo, fraseFavorita) {
        //this. indica que la variable será propiedad del objeto nuevo, que se creará en el otro archivo
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.esCalvo = esCalvo;
        this.fraseFavorita = fraseFavorita;
    }
    // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)

    //this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
    obtenerFoto() {
        document.write(`<div class="container">`);
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}" >`);
    }
    // Método para obtener el nombre
    obtenerNombre() {
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    }
    // Método para obtener la edad
    obtenerEdad() {
        document.write(`<p>Edad: ${this.edad} años</p>`);
    }
    // Método para obtener la frase favorita
    obtenerFraseFavorita() {
        document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
        document.write('</div>');
    }
};