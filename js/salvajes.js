window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Dia uno", "Dia dos", "Dia tres", "Dia seis", "Dia siete", "Dia doce", "Dia quince", "Dia ventidos", "Dia veintitres"];
    let temp2 = ["Seleccionar Capitulo", "Dia 30/1", "Dia 34/12", "Dia 36/14", "Dia 42/15", "Dia 46/26", "Dia 50/33", "Exodo"];

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