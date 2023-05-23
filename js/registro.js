window.onload = function() {
    let regexNumero = /^[0-9]+$/;
    let regexLetras = /^[A-Za-z]+$/;
    let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let regexContraseña = /^(?=.{2,}[A-Za-z])(?=.{2,}\d)(?=.{2,}[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let regexTarjeta = /^[0-9]{16,19}$/;

    let form = document.getElementById("form");
    let cancelar = $("#cancelar");

    form.onsubmit = function(e) {
        let error = false;
        mensajesError = "";

        let nombre = document.getElementById("user").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let nombreUsuario = document.getElementById("nombreUsuario").value;
        let contraseña = document.getElementById("contraseña").value;
        let repetirContraseña = document.getElementById("rContraseña").value;
        let tarjetaClave = document.getElementById("tarjetaClave").value;
        let tarjeta = document.getElementById("tarjeta").value;
        let metodoPago = $("input[name=MetodoPago]:checked").val();
        let cupon = $("input[name=formaP]:checked").val();

        if (nombre == "" || apellido == "" || email == "" || nombreUsuario == "" || contraseña == "" || repetirContraseña == "") {
            error = true;
            mensajesError = "Deben estar todos los campos completos";
            document.getElementById("mensaje").innerHTML = mensajesError;
            e.preventDefault();
            return;
        }



        if (!regexLetras.test(nombre) && nombre != "") {
            error = true;
            mensajesError += "<p> El nombre sólo acepta letras</p>";
        }

        if (!regexLetras.test(apellido) && apellido != "") {
            error = true;
            mensajesError += "<p> El apellido sólo acepta letras</p>";
        }

        if (!regexEmail.test(email) && email != "") {
            error = true;
            mensajesError += "<p>El email tiene que respetar el formato  example@mail.com </p>";
        }

        if (!regexLetras.test(nombreUsuario) &&
            !regexNumero.test(nombreUsuario) &&
            nombreUsuario != ""
        ) {
            error = true;
            mensajesError += "<p> El nombre de Usuario sólo acepta letras y números</p>";
        }

        if (!regexContraseña.test(contraseña) || contraseña.length < 8) {
            error = true;
            mensajesError += "<p>La contraseña tiene que respetar el formato de 2 letras, 2 números y 2 caracteres especiales y tener una longitud igual o mayor a 8 caracteres</p>";
        }

        if (contraseña != repetirContraseña) {
            error = true;
            mensajesError += "<p>Las contraseñas deben coincidir</p>";
        }


        if (metodoPago == "tarjeta") {

            if (tarjetaClave == 000 || tarjetaClave.length != 3) {
                error = true;
                mensajesError += "<p>El código de seguridad es inválido</p>";
            }

            if (!regexTarjeta.test(tarjeta) && tarjeta != "") {
                error = true;
                mensajesError += "<p> Sólo acepta números con una longitud entre 16 y 19 dígitos</p>";
            }

            let sum = 0;

            for (i = 0; i < tarjeta.length - 1; i++) {
                sum += parseInt(tarjeta[i]);
            }

            if (sum % 2 == 0 && (tarjeta[tarjeta.length - 1] % 2 == 0) == false) {

                error = true;
                mensajesError += "<p> Tarjeta Inválida: El último número de la tarjeta debe ser par</p>";
            }

            if (sum % 2 != 0 && (tarjeta[tarjeta.length - 1] % 2 == 0) == true) {
                error = true;
                mensajesError += "<p> Tarjeta Inválida: El último número de la tarjeta debe ser impar</p>";
            }
        }


        if (metodoPago == "cupon" && !cupon) {
            error = true;
            mensajesError += "<p>Debe Seleccionar un cupon de pago</p>";
        }

        if (error) {
            e.preventDefault();
            document.getElementById("mensaje").innerHTML = mensajesError;
        }
    };

    cancelar.click(() => window.location.assign("index.html"));

};