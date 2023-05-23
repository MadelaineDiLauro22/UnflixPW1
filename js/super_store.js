window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Pilot", "Magazine profile", "Shots and salsa", "Mannequin", "Shopllifter", "Secret shoper", "Color wars", "Wedding day sale", "All-nighter", "Demotion", "Labor"];
    let temp2 = ["Seleccionar Capitulo", "Strike", "Back to work", "Guns, pills and birds", "Spokesman scandal", "Dog adoption day", "Halloween theft", "Election day", "Seasonal help", "Black friday", "Lost and found", "Rrebranding", "Ladies lunch", "Valentine's day", "Super hot store", "Wellness fair", "Integrity award", "Mateo's last day", "Glenn's kids", "Spring cleaning", "Cheyenne's wedding", "Tornado"];
    let temp3 = ["Seleccionar Capitulo", "Grand re-opening", "Part-time hires", "Workplace bullying", "Sal's dead", "Health fund", "Chrismas eve", "Viral video", "Golgen globes party", "High volume store", "Angels and mermaids", "Groundhog day", "Video game release", "Safety training", "Amnesty", "Target", "District manager", "Local vendors day", "Lottery", "Gender reveal", "Aftermath", "Town hall"];
    let temp4 = ["Seleccionar Capitulo", "Back to school", "Bay shower", "Toxic workplace", "Costume competition", "Delivery day", "Maternity leave", "New initiative", "Manager's conference", "Shadowing gleen", "Steps challenge", "Blizzard", "Love birds", "Minor crimes", "Salary", "Easter", "Quinceañera", "Cloud green", "Scanners", "#Cloud9Fail", "Sandra's fight", "Employee apreciation day"];
    let temp5 = ["Seleccionar Capitulo", "Cloud 9.0", "Testimonials", "Forced hire", "Mall Closing", "Self-care", "Trick-or-treat", "Shoplifter rehab", "Toy drive", "Curbside pickup", "Negotiations", "Lady boss", "Myrtle", "Favoritism", "Sandra's wedding", "Cereak bar", "Employee App", "Zephra cares", "Playdate", "Carol's back", "Customer safari", "California (part 1)"];
    let temp6 = ["Seleccionar Capitulo", "Essential", "California (parte 2)", "Floor supervisor", "Prize wheel", "Hair care products", "Biscuit", "The trough", "Ground rules", "Conspiracy", "Depositions", "Deep cleaning", "Customer satisfaction", "Perfect store", "All sales final"];

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