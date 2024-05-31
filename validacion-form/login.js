const form = document.getElementById("form_login");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const parrafo = document.getElementById("warnings")

window.addEventListener('load', (e) => {
    e.preventDefault();
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioGuardado) {
        console.log(usuarioGuardado);
    console.log(usuarioGuardado.email);
    console.log(usuarioGuardado.nombre);

    }
});

document.getElementById('form_login').addEventListener('submit', function(e){
    e.preventDefault()

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioGuardado) {
        console.log(usuarioGuardado);
    }
    let warnings = ""
    let noEntrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-]).{8,20}$/g  
    parrafo.innerHTML = ""

    // Email
    if (!regexEmail.test(email.value)) {
        warnings += `El e-mail no es valido <br>`
        noEntrar = true
    } else if (email.value != usuarioGuardado.email) {
        warnings += `El e-mail no es valido <br>`
        noEntrar = true
    }

    // contraseña
    if (!regexpass.test(pass.value)) {
        warnings += `La contraseña es incorrecta <br>`
        noEntrar = true
    } else if (pass.value != usuarioGuardado.pass) {
        warnings += `La contraseña es incorrecta <br>`
    } 

    if(noEntrar){
        
        parrafo.innerHTML = warnings;
    } else {
        alert('bienvenido ' +usuarioGuardado.nombre);
    }

});