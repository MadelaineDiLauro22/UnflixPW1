window.onload = function() {
    let form = document.getElementById("form");
    let nombre = document.getElementById("nombre");
    let pass = document.getElementById("pass");

    form.onsubmit = function(e) {
        let error = false;
        mensajesError = "";

        if (nombre.value == "") {
            error = true;
            mensajesError += "El nombre es requerido <br>"
        }
        if (pass.value == "") {
            error = true;
            mensajesError += "La contraseña es requerida"
        }

        if (error) {
            let mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = mensajesError;
            e.preventDefault();
        } else {
            localStorage.setItem("nombre", nombre.value);
        }
    }
}