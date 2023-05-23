window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Las reglas del juego", "Cherry", "Moja (El compuesto V)", "La hembra de la especie", "Bueno para el alma", "Los inocentes", "La sociedad de la autopreservacion", "Me has encontrado"];
    let temp2 = ["Seleccionar Capitulo", "El tiovivo", "Preparacion y planificacion", "Mas alla de las colinas con las espadas de mil hombres", "Nada igual en el mundo", "Nos damos el piro", "Las putas puertas abajo", "Carnicero", "Lo que se yo"];
    let temp3 = ["Seleccionar Capitulo", "Revancha", "El unico en el cielo", "Costa Berberisca", "Glorioso plan quinquenial", "La ultima vez para contemplar este mundo de mentiras", "Herogasm", "Here comes a candle to light you to bed", "The instant white-hot wild"];
    let selector = document.getElementById("selector-temporada");

    selector.onchange = function() {
        if (selector.value != 0) {
            let opciones = eval(selector.value);
            let num_opciones = opciones.length;
            document.getElementById("selector-capitulo").length = num_opciones;
            for (i = 0; i < num_opciones; i++) {
                let capitulo = document.getElementById("selector-capitulo").options[i];
                capitulo.value = opciones[i];
                capitulo.text = opciones[i];
                if (capitulo.text == "Seleccionar Capitulo") capitulo.disabled = true;
            }
        } else {
            document.getElementById("selector-capitulo").length = 1;
            document.getElementById("selector-capitulo").options.value = "";
            document.getElementById("selector-capitulo").options.text = "Seleccionar Capitulo";
        }
        document.getElementById("selector-capitulo").options[0].selected = true;
    }
}