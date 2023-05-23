window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "El sr. Monk y el candidato (parte 1)", "El sr. Monk y el candidato (parte 2)", "El sr. Monk y la vidente", "El sr. Monk en la feria", "El sr. Monk ingresa en el psiquiatrico", "El sr. Monk y el atracador multimillonario", "El sr. Monk y la otra mujer", "El sr. Monk y el corredor de maraton", "El sr. Monk se toma unas vacaciones", "El sr. Monk y el terremoto", "El sr. Monk y el forastero pelirrojo", "El sr. Monk y el avion"];
    let temp2 = ["Seleccionar Capitulo", "El sr. Monk vuelve al colegio", "El sr. Monk va a Mexico", "El sr. Monk va al beisbol", "El sr. Monk va al circo", "El sr. Monk y el hombre mas viejo del mundo", "El sr. Monk va al teatro", "El sr. Monk y el sospechoso durmiente", "El sr. Monk contra el playboy", "El sr. Monk y el duodecimo hombre", "El sr. Monk y el repartidor de periodicos", "El sr. Monk y las tres tartas", "El sr. Monk y la estrella de television", "El sr. Monk y la abuela raptada", "El sr. Monk y la mujer del capitan", "El sr. Monk se casa", "El sr. Monk va a la carcel"];
    let temp3 = ["Seleccionar Capitulo", "El sr. Monk toma Manhattan", "El sr. Monk y la habitacion del panico", "El sr. Monk y el apagon", "El sr. Monk es despedido", "El sr. Monk conoce al padrino", "El sr. Monk y la pastorcilla mentirosa", "El sr. Monk y el empleado del mes", "El sr. Monk y el programa de concursos", "El sr. Monk se toma su medicina", "El sr. Monk y la pista false", "El sr. Monk contra la cobra", "El sr. Monk se agobia", "El sr. Monk y el atasco", "El sr. Monk se va a Las Vegas", "El sr. Monk y las elecciones", "El sr. Monk y el niño"];
    let temp4 = ["Seleccionar Capitulo", "El sr. Monk y el otro detective", "El sr. Monk vuelve a casa", "El sr. Monk se queda en cama", "El sr. Monk va a la oficina", "El sr. Monk se emborracha", "El sr. Monk y la señora Monk", "El sr. Monk va de boda", "El sr. Monk y el pequeño Monk", "El sr. Monk y el Santa secreto", "El sr. Monk va a un desfile de moda", "El sr. Monk se golpea la cabeza", "El sr. Monk y el matrimonio del capitan", "El sr. Monk y la gran recompensa", "El sr. Monk y el astronauta", "El sr. Monk va al dentista", "El sr. Monk actua de jurado"];
    let temp5 = ["Seleccionar Capitulo", "El sr. Monk y el actor", "El sr. Monk y la huelga de basura", "El sr. Monk y el gran partido", "El sr. Monk no ve nada", "El sr. Monk detective privado", "El sr. Monk y la reunion de ex alumnos", "El sr. Monk cambia de psiquiatra", "El sr. Monkva a un concierto de Rock", "El sr. Monk se encuentra con su padre", "El sr. Monk y el leproso", "El sr. Monk hace un amigo", "El sr. Monk esta a su servicio", "El sr. Monk esta en el aire", "El sr. Monk visita una granja", "El sr. Monk y el hombre requetemuerto", "El sr. Monk va al hospital"];
    let temp6 = ["Seleccionar Capitulo", "El sr. Monk y su mayor fan", "El sr. Monk y el rapero", "El sr. Monk y el hombre desnudo", "El sr. Monk y la mala novia", "El sr. Monk habla de sexo", "El sr. Monk y el tesoro enterrado", "El sr. Monk y el temerario", "El sr. Monk y el hombre equivocado", "El sr. Monk pasa la noche en vela", "El sr. Monk y el hombre que disparo a Santa Claus", "El sr. Monk se une a una secta", "El sr. Monk va al banco", "El sr. Monk y las tres Julies", "El sr. Monk pinta su obra maestra", "El sr. Monk es un fugitivo (parte 1)", "El sr. Monk es un fugitivo (parte 2)"];
    let temp7 = ["Seleccionar Capitulo", "El sr. Monk se compra una casa", "El sr. Monk y el genio", "El sr. Monk y la fiebre de la Loto", "El sr. Monk recibe un derechazo", "El sr. Monk esta bajo el agua", "El sr. Monk se enamora", "El caso 100 del sr. Monk", "El sr. Monk es hipnotizado", "El sr. Monk y el milagro", "El otro hermano del sr. Monk", "El sr. Monk sobre ruedas", "El sr. Monk y la señora de al lado", "El sr. Monk juega los playoffs", "El sr. Monk y el maton del colegio", "El sr. Monk y el mago", "El sr. Monk contra el ayuntamiento"];
    let temp8 = ["Seleccionar Capitulo", "La serie favorita del sr. Monk", "El sr. Monk y el extranjero", "El sr. Monk y el OVNI", "El sr. Monk es otra persona", "El sr. Monk sube al estrado", "El sr. Monk y el critico", "El sr. Monk y la maldicion vudu", "El sr. Monk va a terapia de grupo", "Feliz cumpleaños sr. Monk", "El sr. Monk y Sharona", "El sr. Monk y el perro", "El sr. Monk es el padrino", "El sr. Monk y la placa", "El sr. Monk y el fin (parte 1)", "El sr. Monk y el fin (parte 2)"];

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