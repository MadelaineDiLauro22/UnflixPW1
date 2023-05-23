const movies = [{
        id: "v1",
        nombre: "22 jump street",
        categoria: [3, 1]
    },
    {
        id: "v2",
        nombre: "casino royale",
        categoria: [1]
    },
    {
        id: "v3",
        nombre: "destino final 3",
        categoria: [8, 9]
    },
    {
        id: "v4",
        nombre: "hasta el ultimo hombre",
        categoria: [4, 10]
    },
    {
        id: "v5",
        nombre: "el hobbit la batalla de los 5 ejercitos",
        categoria: [1]
    },
    {
        id: "v6",
        nombre: "el hobbit la desolacion de smaug",
        categoria: [1]
    },
    {
        id: "v7",
        nombre: "john wick",
        categoria: [1]
    },
    {
        id: "v8",
        nombre: "tenemos que hablar de kevin",
        categoria: [5, 9]
    },
    {
        id: "v9",
        nombre: "la octava clausula",
        categoria: [9]
    },
    {
        id: "v10",
        nombre: "legalmente rubia",
        categoria: [3]
    },
    {
        id: "v11",
        nombre: "yo antes de ti",
        categoria: [5, 6]
    },
    {
        id: "v12",
        nombre: "zombie land tiro de gracia",
        categoria: [8, 3, 1]
    }
]
const series = [{
        id: "v13",
        nombre: "doctor house",
        categoria: [5]
    },
    {
        id: "v14",
        nombre: "everybody hates chris",
        categoria: [3]
    },
    {
        id: "v15",
        nombre: "fleabag",
        categoria: [3]
    },
    {
        id: "v16",
        nombre: "the good doctor",
        categoria: [5]
    },
    {
        id: "v17",
        nombre: "how i met your mother",
        categoria: [3, 5]
    },
    {
        id: "v18",
        nombre: "invencible",
        categoria: [1, 2, 5, 7]
    },
    {
        id: "v19",
        nombre: "mad men",
        categoria: [5]
    },
    {
        id: "v20",
        nombre: "monk",
        categoria: [3, 5]
    },
    {
        id: "v21",
        nombre: "preacher",
        categoria: [5, 7, 8]
    },
    {
        id: "v22",
        nombre: "salvajes",
        categoria: [5]
    },
    {
        id: "v23",
        nombre: "super store",
        categoria: [3]
    },
    {
        id: "v24",
        nombre: "the boys",
        categoria: [1, 3, 5, 7]
    },
    {
        id: "v25",
        nombre: "vinland saga",
        categoria: [1, 2, 4]
    },
    {
        id: "v26",
        nombre: "unsolved murder",
        categoria: [10]
    }
]


window.onload = function() {

    let filtro = 1;
    let sSize = screen.width;

    /* navbar */

    let nbHome = document.getElementById("home");
    let nbSeries = document.getElementById("series");
    let nbMovies = document.getElementById("movies");
    let logoutButton = document.getElementById("logoutButton");

    let selectorCat = document.getElementById("selector-cat");
    let searchInput = document.getElementById("searchInput");
    let banner = document.getElementById("banner");
    let contenido = document.getElementById("contenido");
    let contenidoBuscador = document.getElementById("contenido_buscador");

    /* series y peliculas */

    let videos = document.getElementsByName("video");
    let invencible = document.getElementById("invencible");
    let zl = document.getElementById("zl");
    let salvajes = document.getElementById("salvajes");
    let himym = document.getElementById("himym");
    let hd = document.getElementById("hd");
    let house = document.getElementById("house");
    let h5e = document.getElementById("h5e");
    let vls = document.getElementById("vls");
    let ehc = document.getElementById("ehc");
    let lb = document.getElementById("lb");
    let fb = document.getElementById("fb");
    let tb = document.getElementById("tb");
    let mm = document.getElementById("mm");
    let df = document.getElementById("df");
    let l8 = document.getElementById("l8");
    let ttjs = document.getElementById("22js");
    let cr = document.getElementById("cr");
    let monk = document.getElementById("monk");
    let yadt = document.getElementById("yadt");
    let gd = document.getElementById("gd");
    let jw = document.getElementById("jw");
    let um = document.getElementById("um");
    let sp = document.getElementById("sp");
    let pr = document.getElementById("pr");
    let heuh = document.getElementById("heuh");
    let kev = document.getElementById("kev");

    /* eventos */

    let ruta = localStorage.getItem("ruta");

    if (ruta == "home") {
        document.title = "Home";
        nbSeries.classList.remove('border_bottom');
        nbMovies.classList.remove('border_bottom');
        nbHome.classList.add('border_bottom');
        filtro = 1;
        filtrar();
        localStorage.removeItem("ruta")
    }

    if (ruta == "series") {
        document.title = "Series";
        nbHome.classList.remove('border_bottom');
        nbMovies.classList.remove('border_bottom');
        nbSeries.classList.add('border_bottom')
        filtro = 2;
        filtrar();
        localStorage.removeItem("ruta")
    }

    if (ruta == "movies") {
        document.title = "Peliculas";
        nbHome.classList.remove('border_bottom');
        nbSeries.classList.remove('border_bottom');
        nbMovies.classList.add('border_bottom');
        filtro = 3;
        filtrar();
        localStorage.removeItem("ruta")
    }

    nbHome.onclick = () => { actualizar("home"); }
    nbSeries.onclick = () => { actualizar("series"); }
    nbMovies.onclick = () => { actualizar('movies'); }

    function actualizar(ruta) {
        localStorage.setItem('ruta', ruta);
        window.location.reload();
    }

    if (logoutButton) logoutButton.onclick = () => {
        localStorage.removeItem("nombre");
        window.location.assign("index.html");
    }

    selectorCat.onchange = function() { buscar() }
    searchInput.onkeyup = function() { buscar() }

    animaciones();
    window.addEventListener("resize", function() {
        sSize = screen.width;
        filtrar();
    });

    /* funciones */
    function filtrar() {
        videos.forEach(video => {
            video.style.display = "none";
        })

        if (filtro == 1) {

            if (sSize >= 768) invencible.style.display = "inline";
            if (sSize >= 768) salvajes.style.display = "inline";
            if (sSize >= 768) zl.style.display = "inline";
            himym.style.display = "inline";
            hd.style.display = "inline";
            house.style.display = "inline";
            h5e.style.display = "inline";
            vls.style.display = "inline";
            ehc.style.display = "inline";
            lb.style.display = "inline";
            fb.style.display = "inline";
            tb.style.display = "inline";
            mm.style.display = "inline";
            df.style.display = "inline";
            l8.style.display = "inline";
            ttjs.style.display = "inline";
            cr.style.display = "inline";
            yadt.style.display = "inline";
            gd.style.display = "inline";
            jw.style.display = "inline";
            um.style.display = "inline";
            sp.style.display = "inline";
            pr.style.display = "inline";
            heuh.style.display = "inline";
            kev.style.display = "inline";
        }
        if (filtro == 2) {
            if (sSize >= 768) salvajes.style.display = "inline";
            if (sSize >= 768) invencible.style.display = "inline";
            himym.style.display = "inline";
            house.style.display = "inline";
            vls.style.display = "inline";
            ehc.style.display = "inline";
            fb.style.display = "inline";
            tb.style.display = "inline";
            mm.style.display = "inline";
            monk.style.display = "inline";
            gd.style.display = "inline";
            um.style.display = "inline";
            sp.style.display = "inline";
            pr.style.display = "inline";
        }
        if (filtro == 3) {
            if (sSize >= 768) zl.style.display = "inline";
            hd.style.display = "inline";
            h5e.style.display = "inline";
            lb.style.display = "inline";
            df.style.display = "inline";
            l8.style.display = "inline";
            ttjs.style.display = "inline";
            cr.style.display = "inline";
            yadt.style.display = "inline";
            jw.style.display = "inline";
            heuh.style.display = "inline";
            kev.style.display = "inline";
        }
    }

    function buscar() {
        if (searchInput.value != "" || selectorCat.value != "") {
            banner.style.display = "none";
            contenido.style.display = "none";
            contenidoBuscador.style.display = "flex";
            contenidoBuscador.style.justifyContent = "space-evenly";
            contenidoBuscador.style.flexWrap = "wrap";
            let sum = 0;
            let mensaje = document.getElementById("no_results");
            mensaje.style.display = "none";
            movies.forEach(e => document.getElementById(e.id).style.display = "none");
            series.forEach(e => document.getElementById(e.id).style.display = "none");
            if (filtro == 1) {
                if (selectorCat.value == "" && searchInput.value != "") {
                    series.forEach(e => {
                        if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })
                    movies.forEach(e => {
                        if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })
                }
                if (selectorCat.value != "" && searchInput.value == "") {
                    series.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })
                    movies.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })

                }
                if (selectorCat.value != "" && searchInput.value != "") {
                    series.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                                $(`#${e.id}`).fadeIn();
                                sum++;
                            } else document.getElementById(e.id).style.display = "none";
                        } else document.getElementById(e.id).style.display = "none";
                    })
                    movies.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                                $(`#${e.id}`).fadeIn();
                                sum++;
                            } else document.getElementById(e.id).style.display = "none";
                        } else document.getElementById(e.id).style.display = "none";
                    })
                }
            }
            if (filtro == 2) {
                if (selectorCat.value == "" && searchInput.value != "") {
                    series.forEach(e => {
                        if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })
                }
                if (selectorCat.value != "" && searchInput.value == "") {
                    series.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })

                }
                if (selectorCat.value != "" && searchInput.value != "") {
                    series.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                                $(`#${e.id}`).fadeIn();
                                sum++;
                            } else document.getElementById(e.id).style.display = "none";
                        } else document.getElementById(e.id).style.display = "none";
                    })
                }
            }
            if (filtro == 3) {
                if (selectorCat.value == "" && searchInput.value != "") {
                    movies.forEach(e => {
                        if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })
                }
                if (selectorCat.value != "" && searchInput.value == "") {
                    movies.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            $(`#${e.id}`).fadeIn();
                            sum++;
                        } else document.getElementById(e.id).style.display = "none";
                    })

                }
                if (selectorCat.value != "" && searchInput.value != "") {
                    movies.forEach(e => {
                        if (e.categoria.find(cat => cat == selectorCat.value)) {
                            if (e.nombre.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1) {
                                $(`#${e.id}`).fadeIn();
                                sum++;
                            } else document.getElementById(e.id).style.display = "none";
                        } else document.getElementById(e.id).style.display = "none";
                    })
                }
            }
            if (sum == 0) mensaje.style.display = "block"
            else mensaje.style.display = "none"
        } else {
            contenidoBuscador.style.display = "none";
            banner.style.display = "block";
            contenido.style.display = "block";
        }
    }

    function animaciones() {
        slider('#continuarviendo', 1, false);
        slider('#recomendaciones', 1, true);
        slider('#masnuevo', 1, true);
    }

    function slider(id, scrool, autoplay) {
        $(id).slick({
            infinite: true,
            slidesToScroll: scrool,
            autoplay: autoplay,
            autoplaySpeed: 2000,
            variableWidth: true,
            height: 150
        });

    }
    if ($('#banner')) {
        $('#banner').slick({
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: true,
            adaptiveHeight: true,
            arrows: false
        });
    }

}