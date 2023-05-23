window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Comida quemada", "Monte Rushmore", "Oliver", "Tuberia", "Punto tres por ciento", "No es falso", "22 pasos", "Manzana", "Intangibles", "Sacrificio", "Islas parte uno", "Islas parte dos", "Siete razones", "Ella", "Sentido", "Dolor", "Sonrisa", "Mas"];
    let temp2 = ["Seleccionar Capitulo", "Hola", "Terreno medio", "36 horas", "Carbonero duro", "Zanahorias", "Dos capas", "Hubert", "Cuentos", "Empatia", "Cuarentena parte uno", "Cuarentena parte dos", "Secuelas", "Pregunta por", "Caras", "Riesgo y recompenza", "Creer", "Desglose", "Trompolin"];
    let temp3 = ["Seleccionar Capitulo", "Disaster", "Debts", "Claire", "Take my hand", "Frist Case, second base", "45-Degree angle", "SFAD", "Moonshot", "Incomplete", "Friends and family", "Fractured", "Mutations", "Sex and death", "Influence", "Unsaid", "Autopsy", "Fixation", "Heartbreak", "Hurt", "I love you"];
    let temp4 = ["Seleccionar Capitulo", "Frontline part 1", "Frontline part 2", "Newbies", "Not the same", "Fault", "Lim", "The uncertainty principale", "Parenting", "Irresponsible salad bar practices", "Decrypt", "We're all crezy sometimes", "Teeny blue eyes", "Spilled milk", "Gender reveal", "Waiting", "Dr. Red", "Letting go", "Forgive or forget", "Venga", "Vamos"];
    let temp5 = ["Seleccionar Capitulo", "New beginnings", "Piece of cake", "Measure of intelligence", "Rationality", "Crazytown", "One heart", "Expired", "Rebellion", "Yippee Kin-Yay", "Cheat day", "The family", "Dry spell", "Growinf pains", "Potluck", "My way", "The Shaun Show", "The Lea Show", "Sons"];

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