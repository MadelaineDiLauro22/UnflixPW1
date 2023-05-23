window.onload = function() {
    let regexContraseña = /^(?=.{2,}[A-Za-z])(?=.{2,}\d)(?=.{2,}[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let regexTarjeta = /^[0-9]{16,19}$/;

    let nombreDeUsuario = document.getElementById("nombre");
    nombreDeUsuario.innerHTML = localStorage.getItem("nombre");
    let botonConfirmar = document.getElementById("confirmar");

    botonConfirmar.onclick = function() {

        let contraseña = document.getElementById("password").value;
        let repetirContraseña = document.getElementById("new-password").value;
        let metodoPago = $("input[name=opcion]:checked").val();
        let tarjetaClave = document.getElementById("cod_seguridad").value;
        let tarjeta = document.getElementById("numero_tarjeta").value;
        let cuponDePago = $("input[name=cupon]:checked").val();
        let error = false;
        let mensajesError = "";

        if (contraseña == "" || repetirContraseña == "" || metodoPago == "") {
            error = true;
            mensajesError += "<p>Deben estar todos los campos completos</p>";
            document.getElementById("mensaje").innerHTML = mensajesError;
            return;
        }
        if (contraseña != repetirContraseña) {
            error = true;
            mensajesError += "<p>Las contraseñas deben ser iguales</p>";

        }
        if (!regexContraseña.test(contraseña) || contraseña.length < 8) {
            error = true;
            mensajesError += "<p>La contraseña tiene que respetar el formato de 2 letras, 2 números, 2 caracteres especiales y tener una longitud igual o mayor a 8</p>";
        }

        if (metodoPago == "tarjeta") {
            if (!regexTarjeta.test(tarjeta)) {
                error = true;
                mensajesError += "<p>El número de la tarjeta debe tener una longitud entre 16 y 19 dígitos</p>";
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
            if (tarjetaClave == 000 || tarjetaClave.length != 3) {
                error = true;
                mensajesError += "<p>El código de seguridad es inválido</p>";
            }
        }

        if (metodoPago == "cupon") {
            console.log(cuponDePago)
            if (!cuponDePago) {
                error = true;
                mensajesError += "<p>Elija una opción de pago</p>";
            }
        }
        if (error) document.getElementById("mensaje").innerHTML = mensajesError;
        else {
            document.getElementById("mensaje").innerHTML = "<p>Usuario actualizado con exito</p>"
            localStorage.setItem("metodo", metodoPago);
            if (metodoPago == "tarjeta") {
                localStorage.setItem("tarjeta", tarjeta);
                localStorage.setItem("claveTarjeta", tarjetaClave);
                localStorage.removeItem("cupon");
            }
            if (metodoPago == "cupon") {
                localStorage.setItem("cupon", cuponDePago);
                localStorage.removeItem("tarjeta");
                localStorage.removeItem("claveTarjeta");
            }
            if (metodoPago == "transferencia") {
                localStorage.removeItem("cupon");
                localStorage.removeItem("tarjeta");
                localStorage.removeItem("claveTarjeta");
            }
        }
    }
    document.getElementById("cancelar").onclick = () => {
        localStorage.removeItem("metodo", metodoPago);
        localStorage.removeItem("cupon");
        localStorage.removeItem("tarjeta");
        localStorage.removeItem("claveTarjeta");
        localStorage.removeItem("nombre");
        window.location.assign("index.html");
    };


};