window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Piloto", "Paternidad", "La navaja de Occam", "Maternidad", "Fe", "Esquizofrenia", "Fidelidad", "Veneno", "No RCP", "Historias", "Desintoxicacion", "Medicina deportiva", "Maldito", "Control", "El gangster", "Peso", "Todo un ejemplo", "Prioridades", "Chicas", "Perversion", "Tres historias", "Luna de miel"];
    let temp2 = ["Seleccionar Capitulo", "Aceptacion", "Autopsia", "La culpa", "Es o no es", "Lazos familiares", "Etica", "Caceria", "El error", "Engaño", "Falla de comunicacion", "Necesidad de saber", "Piel profunda", "El sexo mata", "Sin pistas", "A salvo", "Apuesto el resto", "Los perros dormilones mienten", "House contra Dios", "Euforia 1", "Euforia2", "Para siempre", "Quien es tu papi?", "Sin razon"];
    let temp3 = ["Seleccionar Capitulo", "Sentido", "Cain y Abel", "Consentimiento informado", "Lineas de arena", "Locos de amor", "Que sera?", "El hijo del hombre en coma", "Guacamole", "Buscando a Judas", "Feliz pequeña navidad", "Palabras y acciones", "Un dia, una habitacion", "Una aguja en un pajar", "Insensible", "Bobo", "Ultrasecreto", "Posicion fetal", "En el aire", "Cosas de la edad", "Adiestramiento", "Familia", "Dimision", "El cretino", "Error humano"];
    let temp4 = ["Seleccionar Capitulo", "Solo", "Lo correcto", "97 segundos", "Angeles guardianes", "Espejito, espejito", "Lo que haga falta", "Feo", "Bendita ignorancia", "Juegos", "Que mentira mas maravillosa", "Congelados", "No cambies nunca", "No se puede ser tan bueno", "Viviendo el sueño", "La cabeza de House", "Elcorazon de Wilson"];
    let temp5 = ["Seleccionar Capitulo", "Morir lo cambia todo", "No es cancer", "Sucesos adversos", "Marcas de nacimiento", "La suerte de Trece", "Felicidad", "El picor", "Emancipacion", "Ultimo recurso", "Deja que coman tarta", "Dulce Navidad", "Sin dolor", "Gran bebe", "El mejor de los mejores", "Infiel", "El camino mas facil", "El contrato social", "Ven gatita", "Encerrado", "Una simple explicacion", "Salvadores", "House dividido", "Bajo mi piel", "Ambos lados de la moneda"];
    let temp6 = ["Seleccionar Capitulo", "Roto (parte 1)", "Roto (parte 2)", "Fracaso epico", "El tirano", "Karma instantaneo", "Corazon valiente", "Razones desconocidas", "Trabajo en equipo", "Bendita ignorancia", "Wilson", "Oculto", "Remordimientos", "Escalada", "De 5 a 9", "Vidas privadas", "Agujero negro", "Caballero fracasado", "Evidente", "La eleccion", "Equipaje", "Ayudame"];
    let temp7 = ["Seleccionar Capitulo", "Y ahora que?", "Egoista", "No escrito", "Terapia de masaje", "Paternidad inesperada", "Politicas de oficina", "Viruela", "Pequeños sacrificions", "Heroico", "Disciplina con amor", "Medicina familiar", "Tu debes recordar esto", "2 historias", "Prueba de recesion", "Sorpresa", "Devuelta al ruego", "Caida en desgracia", "La excavacion", "La ultima tentecion", "Cambios", "El arreglo", "Despues de hora", "Seguir adelante"];
    let temp8 = ["Seleccionar Capitulo", "Veinte vicodines", "Transplante", "Un caso de caridad", "Negocios arriesgados", "La confesion", "Padres", "Muerto y enterrado", "Riesgos de paranoia", "Media naranja", "Fugitiva", "Nadie tiene la culpa", "Persecucion", "El hombre de la casa", "El amor es ciego", "Levantar la liebre", "Comprobacion visceral", "Necesitamos los huevos", "Cuerpo y alma", "La palabra con C", "Autopsia", "Resistiendo", "Todos mueren"];

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