$(document).ready(function() {
    $("a.desplegable").click(function() {
        if ($('.menu').is(":visible")) {
            $('.menu').slideUp();
        } else {
            $('.menu').slideDown();
        }
    });
    $(window).resize(function() {
        if ($(this).width() > 768) {
            $(".menu").show();
        } else {
            $(".menu").hide();
        }
    });

    $("nav.menu").click(function() {
        let x = screen.width;

        if (x < 960) {
            if ($('.menu').is(":visible")) {
                $('.menu').slideUp();
            }
        }
    });
    $(window).resize(function() {
        if ($(this).width() > 768) {
            $(".menu").show();
        } else {
            $(".menu").hide();
        }
    });

    if ($("#similares")) {
        $("#similares").slick({
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: true,
            height: 150
        });
    }



    let path = window.location.pathname;
    let _path = path.split('/');
    let pathname = _path[_path.length - 1];


    if (pathname != "index.html") {
        let nombre = localStorage.getItem("nombre")
        if (!nombre) window.location.assign("index.html");
    }

    let logoDesk = document.getElementById("logo");
    let logoMob = document.getElementById("logo_mobile")
    let nbHome = document.getElementById("home");
    let nbSeries = document.getElementById("series");
    let nbMovies = document.getElementById("movies");
    let logoutButton = document.getElementById("logoutButton");

    if (nbHome) nbHome.onclick = () => {
        localStorage.setItem("ruta", "home");
        window.location.assign("home.html");
        console.log(1)
    }
    if (nbSeries) nbSeries.onclick = () => {
        localStorage.setItem("ruta", "series");
        window.location.assign("home.html");
    }
    if (nbMovies) nbMovies.onclick = () => {
        localStorage.setItem("ruta", "movies");
        window.location.assign("home.html");
    }
    if (logoutButton) logoutButton.onclick = () => {
        localStorage.removeItem("nombre");
        window.location.assign("index.html");
    }
    if (logoDesk) logoDesk.onclick = () => window.location.assign("home.html");
    if (logoMob) logoMob.onclick = () => window.location.assign("home.html");

});