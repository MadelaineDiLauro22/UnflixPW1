window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "El humo ciega tus ojos", "El tocador de señoras", "Las bodas de Figaro", "Nueva Amsterdam", "5G", "Babilonia", "Devolviendo el golpe", "El codigo del vagabundo", "Mira el pajarito", "El punte", "El veranillo de San Miguel", "Nixon contra Kennedy", "La rueda"];
    let temp2 = ["Seleccionar Capitulo", "Para los jovenes de espiritu", "El vuelo 1", "El vuelo 2", "El benefactor", "Tres domingos", "La nueva", "Maidenform", "El violin de oro", "Una noche inolvidable", "Permiso de seis meses", "La herencia", "La jet set", "El rey de la montaña", "Meditaciones en una emergencia"];
    let temp3 = ["Seleccionar Capitulo", "De viaje", "Amor entre las ruinas", "Mi hogar de Kentuky", "Los preparativos", "Confuso", "Meter la pata en una agencia", "Ventitres del siete", "El souvenir", "A las tantas", "El color azul", "La gitana y el vagabundo", "Los adultos", "Cierra la puerta. Sientate"];
    let temp4 = ["Seleccionar Capitulo", "Relaciones publicas", "Navidad es solo una vez al año", "La buena noticia", "Los rechazados", "El crisantemo y la espada", "Historias del Waldorf", "La maleta", "El hombre del verano", "Las chicas bonitas", "A cuatro patas", "La muralla china", "Echando humo", "Mundo futuro"];
    let temp5 = ["Seleccionar Capitulo", "Un besito (Parte 1)", "Un besito  (Parte 2)", "Hojas de te", "Encuentro misterioso", "Codigo 30", "Lugare lejanos", "En el baile del bacalao", "Señora Lazaro", "Sombras en la oscuridas", "El vals de navidad", "La otra mujer", "Comisiones y honorarios", "El fantasma"];
    let temp6 = ["Seleccionar Capitulo", "El umbral (Parte 1)", "El umbral (Parte 2)", "Colaboraadores", "Tener y poseer", "El diluvio", "Para publicacion inmediata", "Hombre con un plan", "El colapso", "La media naranja", "Historia de dos ciudades", "Favores", "La cualidad de la clemencia", "Cosas a cargo"];
    let temp7 = ["Seleccionar Capitulo", "Zonas horarias", "Un dia de trabajo", "La excursion", "El monolito", "Los fugitivos", "La estrategia", "Waterloo", "Severance", "New Business", "The Forecast", "Time & life", "Lost horizon", "The milk honey route", "Person to person"];

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