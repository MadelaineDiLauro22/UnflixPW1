window.onload = function() {
    let temp1 = ["Seleccionar Capitulo", "Piloto", "Purple giraffe", "Sweet taste of liberty", "Return of the shirt", "Okey awesome", "Slutty pumpkin", "Matchmaker", "The duel", "Belly full of turkey", "The pineapple incident", "The limo", "The wedding", "Drumroll", "Zip, zip, zip", "Game night", "Cupcake", "Life among the gorillas", "Nothing good happens after 2 A.M.", "Mary thr paralegal", "Best prom ever", "Milk", "Come on"];
    let temp2 = ["Seleccionar Capitulo", "Where were we?", "The scorpion and the toad", "Brunch", "Ted Mosby: architect", "World's greatest couple", "Aldrin justice", "Swarley", "Atlantic City", "Slap bet", "Single stamina", "How Lily stole christmas", "First time in New York", "Colums", "Monday night football", "Lucky Penny", "Stuff", "Arrivederci fiero", "Moving day", "Bachelor party", "Showdown", "Something Borrowed", "Something blue"];
    let temp3 = ["Seleccionar Capitulo", "Wait for it", "We're not from here", "Third wheel", "Little boys", "How i met everyone else", "I'm not that guy", "Dowisetrepla", "Spoiler alert", "Splasgiving", "The yips", "The platinum rule", "No tomorrow", "Ten sessions", "The bracket", "The chain of screaming", "Sandcastles in the sand", "The goat", "Rebound bro", "Everything must go", "Miracles"];
    let temp4 = ["Seleccionar Capitulo", "Do i know you", "The best burger in New York", "I heart NJ", "Intervention", "Shelter Island", "Happily ever after", "Not a father's day", "Woooo!", "The naked man", "The fight", "Little Minnesota", "Benefits", "Three days of snow", "The possimpible", "The Stinsons", "Sorry, bro", "The front porch", "Old king Clancy", "Murtaught", "Mosbius designs", "The three days rule", "Right place right time", "As fast as she can", "The leap"];
    let temp5 = ["Seleccionar Capitulo", "Definitions", "Double date", "Robin 101", "The sexless innkeeper", "Duel citizenship", "Bagpipes", "The rough patch", "The playbook", "Slapsgiving 2 : Revenge of the slap", "The window", "The last cigarette ever", "Girls versus suits", "Jenkins", "The perfect week", "Rabbit or duck", "Hooked", "Of course", "Say cheese", "Zoo or false", "Home wreckers", "Twin beds", "Robot versus wrestlers", "The wedding bride", "Doppelgangers"];
    let temp6 = ["Seleccionar Capitulo", "Big days", "Cleaning house", "Unfinished", "Subway wars", "Architecht of destruction", "Baby talk", "Canning Randy", "Natural history", "Glitter", "Blitzgiving", "The mermaid theory", "False positive", "Bad news", "Last words", "Oh honey", "Desperation day", "Garbage Island", "A change of heart", "Legendaddy", "The exploding meatball sub", "Hopeless", "The perfect cocktail", "Landmarks", "Challengge accepted"];
    let temp7 = ["Seleccionar Capitulo", "The best man", "The naked truth", "Ducky tie", "The Stinson missile crisis", "Field trip", "Mystery vs. history", "Noretta", "The Slutty pumpkin returns", "Disaster averted", "Tick tick tick...", "The rebound girl", "Symphony of illumination", "Tailgate", "46 minutes", "The burning beekeeper", "The drunk train", "No pressure", "Karma", "The broath", "Trilogy time", "Now we're even", "Good crazy", "The magician's code, part 1", "The magicinan's code part 2"];
    let temp8 = ["Seleccionar Capitulo", "Farhampton", "The Pre-nup", "Nannies", "Who wants to be a godparent", "The autumn of break-ups", "Splitsville", "The stamp tramp", "Twelve horny women", "Lobster crawl", "The over-correction", "The final page, part 1", "The final page, part 2", "Band or DJ", "Ring up!", "P.S. i love you", "Bad crazy", "The ashtray", "Weekend at Barney's", "The fortress", "The time travelers", "Romeward bound", "The bro Mitzvah", "Someting old", "Something new"];
    let temp9 = ["Seleccionar Capitulo", "The locket", "Coming back", "Last time in New York", "The broken code", "The poker game", "Knight vision", "No questions asked", "Thr lighthouse", "Platonish", "Mom and dad", "Bedtime stories", "The rehearsal dinner", "Bass player wanted", "Slapsviging 3: Slappointment in Slapmarra", "Unpause", "How your mother met me", "Sunrise", "Rally", "Vesuvius", "Daisy", "Gary Blauman", "The end od the aisle", "Last Forever, part 1", "Last forever, part 2"];

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