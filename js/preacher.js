window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Pilot", "See", "The possibilities", "Monster swamp", "South will rise again", "Sundowner", "He gone", "El valero", "Finish the song", "Call and response"];
    let temp2 = ["Seleccionar Capitulo", "On the road", "Munbai sky towe", "Damsels", "Viktor", "Dallas", "Sokosha", "Pig", "Holes", "Puzzle Piece", "Dirty little secret", "Backdoors", "On your kness", "The end of the road"];
    let temp3 = ["Seleccionar Capitulo", "Angelville", "Sonsabitches", "Gonna hurt", "The tombs", "The Cooffin", "Les enfants du Sang", "Hilter", "The Tom/Brady", "Schwanzkopf", "The light above"];
    let temp4 = ["Seleccionar Capitulo", "Masada", "Last supper", "Deviant", "Search and rescue", "Bleak City", "The lost apostle", "Messiahs", "Fear of the Lord", "Overture", "End of the world"];

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