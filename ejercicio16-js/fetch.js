//fetch

//fetch(url, opcion).then().then().catch();

// Objeto opcion, carga con caracteristicas de lo que esperamos recibir
const opcion = {
    method:"GET",
    headers:{
        accept:"application/json"
    }
}

fetch("https://rickandmortyapi.com/api/character/1", opcion)
.then(function(response){
    //Transformamos el string (json) en objeto que js reconoce
    return response.json();
})
.then(function(datos){
    console.log(datos.name, datos.image);
})
.catch(function(error){
    console.error(error);
})

// Declaramos una funcion que renderiza tarjetas en el frontend a partir del fetch
function pedirDatos(){
    // Llamamos a nuestro fetch
    fetch("https://rickandmortyapi.com/api/character", opcion)
    .then(function(response){
        return response.json();
    })
    .then(function(personajes){

        //Manipulacion de objetos del DOM
        const contenedor = document.getElementById("contenedor-tarjetas");

        // Utilizamos un for-each para consultar personajes y renderizarlos en el DOM
        personajes.results.forEach(function(dato){
          //Creamos el elemento html
          const article = document.createElement('article');
          //Agregamos estilo a article
          article.classList.add("tarjeta");
          //Inyectamos contenido a <article>
article.innerHTML = `
          <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
          <label>Nombre:</label>
          <p>${dato.name}</p>
          <div>
            <label>Estado:</label>
            <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
            <label>Planeta:</label>
            <p>${dato.location.name}</p>
</div>
          `
            //Adjuntamos el contenido
            contenedor.appendChild(article);
        });
    })
    .catch(function(error){
        console.error(error);
    })
}
//Llamamos a la funcion pedirDatos
pedirDatos();