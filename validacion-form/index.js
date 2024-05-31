const parrafo = document.getElementById("warnings");

window.addEventListener('load', (e) => {
    e.preventDefault();
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioGuardado) {
        console.log(usuarioGuardado);
    console.log(usuarioGuardado.email);
    console.log(usuarioGuardado.nombre);

    }

    parrafo.innerHTML =  `Bienvenido ` + usuarioGuardado.nombre ;


});

