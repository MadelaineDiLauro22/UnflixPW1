window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Todos odian la responsabilidad", "Todos odian a Keisha", "Todos odian el basketball", "Todos odian la salchicha", "Todos odian al gordo Mike", "Todos odian el Halloween", "Todos odian a la niñera", "Todos odian la lavanderia", "Todos odian los vales de comida", "Todos odian a Greg", "Todos odian la Navidad", "Todos odian el trabajo de medio tiempo", "Todos odian el dia de la foto", "Todos odian el dia de San Valentin", "Todos odian la loteria", "Todos odian las calificaciones", "Todos odian los funerales", "Todos odian Corleone", "Todos odian a Drew", "Todos odian la Playboy", "Todos odian la carcel", "Todos odian el dia del padre"];
    let temp2 = ["Seleccionar Capitulo", "Todos odian el rechazo", "Todos odian al presidente del aula", "Todos odian las elecciones", "Todos odian a un mentiroso", "Todos odian a Malvo", "Todos odian el sistema de amigos", "Todos odian las promesas", "Todos odian el dia de gracias", "Todos odian la supersticion", "Todos odian a Kris", "Todos odian los huevos", "Todos odian a los monitores", "Todos odian el dia nevado", "Todos odian al sustituto", "Todos odian el corte de escuela", "Todos odian las cadenas robadas", "Todos odian a los DJ's", "Todos odian el beisbol", "Todos odian apostar", "Todos odian los chistes groseros", "Todos odian las matematicas", "Todos odian el ultimo dia"];
    let temp3 = ["Seleccionar Capitulo", "Todos odian al consejero", "Todos odian a Caruso", "Todos odian manejar", "Todos odian a blanquito", "Todos odian el apartamento de soltero", "Todos odian a Bed-Stuy", "Todos odian el huesped", "Todos odian el salario minimo", "Todos odian al chico nuevo", "Todos odian el kwanzaa", "Todos odian Port Authority", "Todos odian a los chicos malos", "Todos odian el primer beso", "Todos odian la Pascua", "Todos odian a Gretzky", "Todos odian el DFN", "Todos odian las desventajas", "Todos odian el dia de la tierra", "Todos odian ser de onda", "Todos odian el baile de noveno grado", "Todos odian el dia de las madres", "Todos odian la graduacion"];
    let temp4 = ["Seleccionar Capitulo", "Todos odian tattaglia", "Todos odian los pasteles", "Todos odian el regreso", "Todos odian a la maestra de literatura", "Todos odian la frase:'mi hermano'", "Todos odian a Doc", "Todos odian a un soplon", "Todos odian a Big Bird", "Todos odian a James", "Todos odian la bispera de año nuevo", "Todos odian al Sr. Levine", "Todos odian las Letras", "Todos odian las identificaciones falsas", "Todos odian los examenes para la universidad", "Todos odian el boxeo", "Todos odian la lasagna", "Todos odian las vacaciones de primavera", "Todos odian el auto", "Todos odian al respondon", "Todos odian a Tasha", "Todos odian las amenazas de bomba", "Todos odian el examen para terminar la escuela"];

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