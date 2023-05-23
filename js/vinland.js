window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "En algun lugar, no aqui", "Espada", "Troll", "Un verdadero guerrero", "El hijo del trol", "El viaje comienza", "Normando", "Mas alla del borde del mar", "La batalla del puente de Londres", "Ragnarok", "Apuesta", "La tierra del otro lado", "Hijo de un heroe", "Gloria", "Despues del festival del Solsticio de invierno", "Historia de Bestias", "Avalon", "Fuera de  la cuna", "Frente unido", "Corona", "Reunion", "Lobo solitario", "Error de calculo", "Fin del prologo"];

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