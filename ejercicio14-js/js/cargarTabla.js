// Armamos la collecion de los equipos
// Una  tabla con 8 equipos
// Cada equipo tiene 3 propiedades
// Cada equipo es un objeto
// La tabla es un array de objetos
// Cada objeto tiene 3 atributos
// Cada atributo es una propiedad
// Cada propiedad tiene un valor
// El valor de nombre es un string
// El valor de puntos es un numero
// El valor de goles es un numero

// declarar la variable tabla
let tablaE = [];

// let tablaE = [
//     { nombre: "Boca Juniors", puntos: 0, goles: 0 },
//     { nombre: "River Plate", puntos: 0, goles: 0 },
//     { nombre: "Racing Club", puntos: 0, goles: 0 },
//     { nombre: "Independiente", puntos: 0, goles: 0 },
//     { nombre: "San Lorenzo", puntos: 0, goles: 0 },
//     { nombre: "Velez Sarsfield", puntos: 0, goles: 0 },
//     { nombre: "Estudiantes", puntos: 0, goles: 0 },
//     { nombre: "Gimnasia", puntos: 0, goles: 0 }
// ];

window.onload = cargarEventos();
// generar coneccion del dom - generamos una fincion de eventos (botones)
function cargarEventos() {
    document.getElementById("nuevo-equipo").addEventListener("submit", nuevoEquipo);
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla);
    document.getElementById("ocultar-tabla").addEventListener("click", ocultarTabla);
    mostrarTabla(); // Esto asegura que se muestre la tabla al cargar la página
}

// function nuevo equipo
function nuevoEquipo(event) {
    event.preventDefault();// evita que se recargue la pagina

    // declaro el objeto equipo
    let equipoIndex = document.getElementById("equipoIndex").value;
    let equipoU = document.getElementById("equipo").value;
    let puntosU = document.getElementById("puntos").value;
    let golesU = document.getElementById("goles").value;

    if (equipoIndex === "-1") {
        let nuevoEquipo = { nombre: equipoU, puntos: puntosU, goles: golesU };
        tablaE.push(nuevoEquipo);
    } else {// Si el índice es diferente de -1, significa que se está editando un equipo
        tablaE[equipoIndex].nombre = equipoU;
        tablaE[equipoIndex].puntos = puntosU;
        tablaE[equipoIndex].goles = golesU;
        document.getElementById("equipoIndex").value = "-1";
        document.getElementById("guardar-cambios").style.display = "none"; // Oculta el botón "Guardar Cambios" después de guardar
    }

    limpiarFormulario();
    // mostrarTabla(); // Mostramos la tabla actualizada después de agregar o editar un equipo
};

function editarEquipo(index) {
    document.getElementById("equipo").value = tablaE[index].nombre;
    document.getElementById("puntos").value = tablaE[index].puntos;
    document.getElementById("goles").value = tablaE[index].goles;
    document.getElementById("equipoIndex").value = index;
    document.getElementById("guardar-cambios").style.display = "inline"; // Muestra el botón "Guardar Cambios" al editar
};

function mostrarTabla() {
    let cuerpoTabla = document.getElementById("equipos-tabla");
    cuerpoTabla.innerHTML = ""; // Limpiamos el cuerpo de la tabla antes de volver a dibujarla
    // Recorremos la tabla de equipos y creamos filas para cada equipo
    for (let i = 0; i < tablaE.length; i++) {
        let fila = document.createElement("tr");
        // [i] es el indice del array de objetos
        fila.innerHTML = `
            <td>${tablaE[i].nombre}</td> 
            <td>${tablaE[i].puntos}</td>
            <td>${tablaE[i].goles}</td>
            <td>
                <button onclick="editarEquipo(${i})">Editar</button>
                <button onclick="eliminarEquipo(${i})">Eliminar</button>
            </td>`;
        cuerpoTabla.appendChild(fila);
    }
    cuerpoTabla.style.display = "table"; // Mostrar la tabla
};

function ocultarTabla() {
    let cuerpoTabla = document.getElementById("equipos-tabla");
    cuerpoTabla.style.display = "none"; // Ocultar la tabla
};

function eliminarEquipo(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este equipo?")) {
        tablaE.splice(index, 1);
        mostrarTabla();
    }
}

function limpiarFormulario() {
    document.getElementById("equipo").value = "";
    document.getElementById("puntos").value = "";
    document.getElementById("goles").value = "";
}