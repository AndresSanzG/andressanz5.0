$(document).ready(function () {



    // EFECTO CONTACTO USABILIDAD
    $("#form input").keyup(function () {
        var $this = $(this);
        // $this.css('background', 'red');
        if (($this) && ($this.val().length == 0)) {
            $this.siblings('label').removeClass('act-label');
            $this.removeClass('act-input');
        } else {
            $this.siblings('label').addClass('act-label');
            $this.addClass('act-input');
        }
    });
    // Para el textArea
    // $("#form textarea").css('border','20px solid blue');

    $("#form textarea").keyup(function () {
        var $this = $(this);
        // $this.css('background', 'red');
        if (($this) && ($this.val().length == 0)) {
            $this.siblings('label').removeClass('act-label');
            $this.removeClass('act-input');
        } else {
            $this.siblings('label').addClass('act-label');
            $this.addClass('act-input');
        }
    });



    // Mensajes que se reciben en Contacto
    var sms = $('.mensaje h3').text();

    if (sms == '') {
        $('.mensaje').css('display', 'none');
    } else {
        $('.mensaje').css('display', 'table');
    }

    $('.mensaje img').click(function () {
        $('.mensaje').fadeOut(1000);
    });

    //ANCLAS
    $('.menu-sobre li:eq(0)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#present').offset().top - 220
        }, 1000);
    });
    $('.invite-scroll, .menu-sobre li:eq(1)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#referencias').offset().top - 220
        }, 1000);
    });
    $('.menu-sobre li:eq(2)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#trayectoria').offset().top - 220
        }, 1000);
    });
    $('.menu-sobre li:eq(3)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#formacion').offset().top - 220
        }, 1000);
    });
    $('.menu-sobre li:eq(4)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#idiomas').offset().top - 220
        }, 1000);
    });
    $('.menu-sobre li:eq(5)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#otros-estudios').offset().top - 220
        }, 1000);
    });
    $('.menu-sobre li:eq(6)').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#otras-habilidades').offset().top - 220
        }, 1000);
    });





    // EFECTO APARECER 
    function eventAparecer() {

        // Normal
        $('.sp-apear').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + 700) {
                $(this).removeClass("sp-hide");
                $(this).find('.sp-hide').removeClass("sp-hide");
            } else {
                $(this).addClass("sp-hide");
                $(this).find('.sp-hide').addClass("sp-hide");
            }
        });

        // Zoom
        $('.sp-apear-zoom').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
                $(this).removeClass("sp-hide-zoom");
            } else {
                $(this).addClass("sp-hide-zoom");
            }
        });

        // Desde la izquierda (Left)
        $('.sp-apear-left').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
                $(this).removeClass("sp-hide-left");
            } else {
                $(this).addClass("sp-hide-left");
            }
        });

        // Desde la derecha (derecha)
        $('.sp-apear-right').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
                $(this).removeClass("sp-hide-right");
            } else {
                $(this).addClass("sp-hide-right");
            }
        });

        // fin evento scroll
    };

    $(document).ready(eventAparecer);
    $(window).on("scroll", eventAparecer);



    // CAMBIO PORTADA         
    // Iniciamos el contador de tiempo y colocamos lo básico
    var cont = 1;
    $('#logo h1').addClass('azul-dark');
    $('#logo h2').addClass('azul-light');
    $('.active').addClass('bk-azul');
    $('#des .barra-tiempo').css('width', '100%');

    // Metemos todo con una suave animación
    setTimeout(function () {
        $('#logo h1').css('opacity', '1');
    }, 300);
    setTimeout(function () {
        $('#logo h2').css('opacity', '1');
    }, 400);
    setTimeout(function () {
        $('#menu li').eq(0).css('opacity', '1');
    }, 700);
    setTimeout(function () {
        $('#menu li').eq(1).css('opacity', '1');
    }, 800);
    setTimeout(function () {
        $('#menu li').eq(2).css('opacity', '1');
    }, 900);
    setTimeout(function () {
        $('#menu li').eq(3).css('opacity', '1');
    }, 1000);
    setTimeout(function () {
        $('#menu li').eq(3).css('opacity', '1');
    }, 1200);


    $('header ul li').hover(function () {
        $(this).siblings().find('a').addClass('destroy-active');
    }, function () {
        $(this).siblings().find('a').removeClass('destroy-active');
    });

    // BOTONES PORTADA
    $('.slogan-box button').click(function () {
        clearInterval(myVar);
        $('.barra-tiempo').fadeOut(1000);
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top - 80
        }, 1500);
    });
    $('#des .slogan-box button').click(function () {
        activarDes();
    });
    $('#ilust .slogan-box button').click(function () {
        activarIlust();
    });
    $('#web .slogan-box button').click(function () {
        activarWeb();
    });
    $('#video .slogan-box button').click(function () {
        activarVideo();
    });
    $('#bbaa .slogan-box button').click(function () {
        activarBbaa();
    });
    $('#ux .slogan-box button').click(function () {
        activarUx();
    });


    // CAMBIO TEXTO Y COLOR DEL MENU GALERIA
    $('.b-todo').click(function () {
        activarTodo();
    });
    $('.b-des').click(function () {
        activarDes();
    });
    $('.b-ilust').click(function () {
        activarIlust();
    });
    $('.b-web').click(function () {
        activarWeb();
    });
    $('.b-video').click(function () {
        activarVideo();
    });
    $('.b-bbaa').click(function () {
        activarBbaa();
    });
    $('.b-ux').click(function () {
        activarUx();
    });


    var URLsearch = window.location.search;

    // CAMBIO DE IDIOMA
    if (URLsearch == '?leng=en') {
        var textTodo = "No filters: All galleries";
        var textDes = "Filter: Graphic Design";
        var textIlust = "Filter: Illustration";
        var textWeb = "Filter: Web development";
        var textVid = "Filter: Video and animation";
        var textBbaa = "Filter: Traditional arts";
        var textUx = "Filter: UX / UI";
    }

    if (URLsearch == '?leng=es') {
        var textTodo = "Sin filtros: Todas las galerías";
        var textDes = "Filtro: Diseño Gráfico";
        var textIlust = "Filtro: Ilustración";
        var textWeb = "Filtro: Desarrollo web";
        var textVid = "Filtro: Video y animación";
        var textBbaa = "Filtro: Artes tradicionales";
        var textUx = "Filtro: UX / UI";
    }

    $('#botones-box button').hover(function () {
        if ($(this).hasClass('b-todo')) {
            $('.b-todo span').text(textTodo);
        }
        if ($(this).hasClass('b-des')) {
            $('.b-todo span').text(textDes);
        }
        if ($(this).hasClass('b-ilust')) {
            $('.b-todo span').text(textIlust);
        }
        if ($(this).hasClass('b-web')) {
            $('.b-todo span').text(textWeb);
        }
        if ($(this).hasClass('b-video')) {
            $('.b-todo span').text(textVid);
        }
        if ($(this).hasClass('b-bbaa')) {
            $('.b-todo span').text(textBbaa);
        }
        if ($(this).hasClass('b-ux')) {
            $('.b-todo span').text(textUX);
        }
    }, function () {

        if ($('#sp-tab').hasClass('deg-todo')) {
            $('.b-todo span').text(textTodo);;
        }
        if ($('#sp-tab').hasClass('deg-azul')) {
            $('.b-todo span').text(textDes);
        }
        if ($('#sp-tab').hasClass('deg-verde')) {
            $('.b-todo span').text(textIlust);
        }
        if ($('#sp-tab').hasClass('deg-magenta')) {
            $('.b-todo span').text(textWeb);
        }
        if ($('#sp-tab').hasClass('deg-cyan')) {
            $('.b-todo span').text(textVid);
        }
        if ($('#sp-tab').hasClass('deg-naranja')) {
            $('.b-todo span').text(textBbaa);
        }
        if ($('#sp-tab').hasClass('deg-morado')) {
            $('.b-todo span').text(textUX);
        }


    });

    function activarTodo() {
        $('.b-todo span').text('Míralo todo y difruta');
        $('#sp-tab').removeClass().addClass('deg-todo');
        $('.figure').removeClass('width-cero');
        $('.false-figure.des-image, .false-figure.bbaa-image, .false-figure.ilust-image').addClass('width-cero');
    };

    function activarDes() {
        $('.b-todo span').text('Diseño Gráfico');
        $('#sp-tab').removeClass().addClass('deg-azul');

        $('.figure').addClass('width-cero');
        $('.des-image').removeClass('width-cero');
    };

    function activarIlust() {
        $('.b-todo span').text('Ilustración');
        $('#sp-tab').removeClass().addClass('deg-verde');

        $('.figure').addClass('width-cero');
        $('.ilust-image').removeClass('width-cero');
    };

    function activarWeb() {
        $('.b-todo span').text('Desarrollo web');
        $('#sp-tab').removeClass().addClass('deg-magenta');

        $('.figure').addClass('width-cero');
        $('.web-image').removeClass('width-cero');
    };

    function activarVideo() {
        $('.b-todo span').text('Video y animación');
        $('#sp-tab').removeClass().addClass('deg-cyan');

        $('.figure').addClass('width-cero');
        $('.vid-image').removeClass('width-cero');
    };

    function activarBbaa() {
        $('.b-todo span').text('Artes tradicionales');
        $('#sp-tab').removeClass().addClass('deg-naranja');

        $('.figure').addClass('width-cero');
        $('.bbaa-image').removeClass('width-cero');
    };

    function activarUx() {
        $('.b-todo span').text('UX / UI');
        $('#sp-tab').removeClass().addClass('deg-morado');

        $('.figure').addClass('width-cero');
        $('.ux-image').removeClass('width-cero');
    };



    // GALERIA LIGHTBOX
    var $lg = $('#wpt, #concontra, #acc, #cv, #cards, #icons, #lonas, #cinf, #driven, #cereal, #birds, #super, #hindu, #cham, #hist, #vitru, #ponts, #real, #bode, #vivo, #mural, #made, #piedra');

    var $lgvid = $('#mano, #ddig, #cigvid, #econ');

    ini_Img($lg);
    ini_vids($lgvid)
    ini_webs();

    function ini_Img($lg) {
        // Añade el texto a todos los campos de texto (podía haberlo metido a mano, pero era una locura)
        $('.wpt-info-added').append($('.wpt-info'));
        $('.concontra-info-added').append($('.concontra-info'));
        $('.acc-info-added').append($('.acc-info'));
        $('.cv-info-added').append($('.cv-info'));
        $('.cards-info-added').append($('.cards-info'));
        $('.icons-info-added').append($('.icons-info'));
        $('.lonas-info-added').append($('.lonas-info'));

        $('.cinf-info-added').append($('.cinf-info'));
        $('.driven-info-added').append($('.driven-info'));
        $('.cereal-info-added').append($('.cereal-info'));
        $('.birds-info-added').append($('.birds-info'));
        $('.super-info-added').append($('.super-info'));
        $('.hindu-info-added').append($('.hindu-info'));
        $('.cham-info-added').append($('.cham-info'));
        $('.hist-info-added').append($('.hist-info'));
        $('.vitru-info-added').append($('.vitru-info'));
        $('.ponts-info-added').append($('.ponts-info'));

        $('.real-info-added').append($('.real-info'));
        $('.bode-info-added').append($('.bode-info'));
        $('.vivo-info-added').append($('.vivo-info'));
        $('.mural-info-added').append($('.mural-info'));
        $('.made-info-added').append($('.made-info'));
        $('.piedra-info-added').append($('.piedra-info'));


        // INICIACIÓN SOLO IMAGENES
        $lg.lightGallery({
            thumbnail: true,
            animateThumb: true,
            showThumbByDefault: false,
            mousewheel: true,
            download: false,
            hideBarsDelay: 1500
        });

        $lg.on('onAfterOpen.lg', function (event) {
            $('.lg-toolbar').append('<a class=\"lg-icon\" href=\"javascript:toggleCaption()\">&#9432</a>');
        });

        $lg.on('onSlideClick.lg', doToggle);
    }

    function ini_webs() {
        // Añade el texto a todos los campos de texto (podía haberlo metido a mano, pero era una locura)
        $('.valan-info-added').append($('.valan-info'));
        $('.playg-info-added').append($('.playg-info'));
        $('.ibero-info-added').append($('.ibero-info'));
        $('.cigna-info-added').append($('.cigna-info'));
        $('.andy-info-added').append($('.andy-info'));
        $('.futur-info-added').append($('.futur-info'));
        $('.farrutx-info-added').append($('.farrutx-info'));
        $('.nadira-info-added').append($('.nadira-info'));

        // INICIACIÓN IFRAMES WEB
        var $lgweb = $('#valan, #playg, #ibero, #cigna, #andy, #nadira, #farrutx, #futur');
        $lgweb.lightGallery({
            selector: 'this',
            download: false,
            hideBarsDelay: 500,
            zoom: false
        });

        $lgweb.on('onAfterOpen.lg', function (event) {
            $('.lg-toolbar').append('<a class=\"lg-icon\" href=\"javascript:toggleCaption()\">&#9432</a>');
        });
        $lgweb.on('onSlideClick.lg', doToggle);
    }



    function ini_vids($lgvid) {
        // Añade el texto a todos los campos de texto (podía haberlo metido a mano, pero era una locura)
        $('.mano-info-added').append($('.mano-info'));
        $('.ddig-info-added').append($('.ddig-info'));
        $('.cigvid-info-added').append($('.cigvid-info'));
        $('.econ-info-added').append($('.econ-info'));

        // INICIACIÓN IFRAMES VIDEOS

        $lgvid.lightGallery({
            download: false,
            zoom: false
        });
        $lgvid.on('onAfterOpen.lg', function (event) {
            $('.lg-toolbar').append('<a class=\"lg-icon\" href=\"javascript:toggleCaption()\">&#9432</a>');
        });
        $lgvid.on('onSlideClick.lg', doToggle);
    }

    function doToggle(e) {
        $('.lg-outer').toggleClass('lg-hide-items');
        var curVal = $('.lg-sub-html').css('visibility');
        $('.lg-sub-html').css('visibility', curVal == 'hidden' ? 'visible' : 'hidden');
    }


    // Poner de forma ramdom los figures
    var answers = $(".figure");
    for (var i = 0; i < answers.length; i++) {
        var target = Math.floor(Math.random() * answers.length - 1) + 1;
        var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
        answers.eq(target).before(answers.eq(target2));
    }


    // FIN document ready
});

// Cambia tiene que estar fuera de $(document).ready (ni puta idea de porque)

function toggleCaption() {
    var curVal = $('.ns').css('display');
    $('.ns').css('display', curVal == 'none' ? 'block' : 'none');

    var lgVal = $('.wpt-info, .concontra-info, .acc-info, .cv-info, .cards-info, .icons-info, .lonas-info, .cinf-info, .driven-info, .cereal-info, .birds-info, .super-info, .hindu-info, .cham-info, .hist-info, .vitru-info, .ponts-info, .valan-info, .playg-info, .ibero-info, .cigna-info, .andy-info, .mano-info, .ddig-info, .cigvid-info, .econ-info, .real-info, .bode-info, .vivo-info, .mural-info, .made-info, .piedra-info').css('display');

    $('.wpt-info, .concontra-info, .acc-info, .cv-info, .cards-info, .icons-info, .lonas-info, .cinf-info, .driven-info, .cereal-info, .birds-info, .super-info, .hindu-info, .cham-info, .hist-info, .vitru-info, .ponts-info, .valan-info, .playg-info, .ibero-info, .cigna-info, .andy-info, .mano-info, .ddig-info, .cigvid-info, .econ-info, .real-info, .bode-info, .vivo-info, .mural-info, .made-info, .piedra-info').css('display', lgVal == 'none' ? ' block' : 'none');
}


// Document ready 2
$(document).ready(function () {

    // Herrramientas en Servicios (html, css, photoshop... )
    $('.herramienta').hover(function () {
        $(this).find('.info-oculta').css('opacity', '1');
        $(this).find('img').addClass('img-min');
        $(this).find('.info-oculta p:first-child').removeClass('p-top');
        $(this).find('.info-oculta p:last-child').removeClass('p-bot');

    }, function () {
        $(this).find('.info-oculta').css('opacity', '0');
        $(this).find('img').removeClass('img-min');
        $(this).find('.info-oculta p:first-child').addClass('p-top');
        $(this).find('.info-oculta p:last-child').addClass('p-bot');
    });


    // Trayectoria (Trabajos: Ecix, cigna, valansee... etc)
    $('.trayect-buttons-box').on('click', '.trayect-buttons', function () {

        $('.hide-trayect-buttons-box').css({
            'z-index': '2'
        });

        $('.trayect-buttons').addClass('trayect-buttons-small');

        setTimeout(function () {
            $('#deloitte').css('opacity', '1')
        }, 400);
        setTimeout(function () {
            $('#ecix').css('opacity', '1')
        }, 500);
        setTimeout(function () {
            $('#cigna').css('opacity', '1')
        }, 600);
        setTimeout(function () {
            $('#valansee').css('opacity', '1')
        }, 700);
        setTimeout(function () {
            $('#interban').css('opacity', '1')
        }, 800);
        setTimeout(function () {
            $('#accenture').css('opacity', '1');
        }, 900);


        var idWork = $(this).attr('id');
        console.log(idWork);

        // alert($(this).attr('id'));

        $('#' + idWork).fadeOut(0);
        $('#' + idWork).siblings().fadeIn();

        setTimeout(function () {
            $('#hide-' + idWork).fadeIn(500);
            $('#hide-' + idWork).removeClass('before-hide');
            $('#hide-' + idWork).siblings().addClass('before-hide');
        }, 500);

    });


    // CLICK EN FORMACIÓN

    $('.formacion-buttons-box').on('click', '.formacion-buttons', function () {
        // $(this).css('opacity', '0');

        $('.hide-formacion-buttons-box').css({
            'z-index': '2'
        });

        $('.formacion-buttons').addClass('formacion-buttons-small');

        setTimeout(function () {
            $('#trazos').css('opacity', '1')
        }, 400);
        setTimeout(function () {
            $('#cice').css('opacity', '1')
        }, 500);
        setTimeout(function () {
            $('#esdip').css('opacity', '1')
        }, 600);
        setTimeout(function () {
            $('#uni').css('opacity', '1')
        }, 700);


        var idStudy = $(this).attr('id');
        console.log(idStudy);

        // alert($(this).attr('id'));

        $('#' + idStudy).fadeOut(0);
        $('#' + idStudy).siblings().fadeIn();

        setTimeout(function () {
            $('#hide-' + idStudy).fadeIn(500);
            $('#hide-' + idStudy).removeClass('before-hide');
            $('#hide-' + idStudy).siblings().addClass('before-hide');
        }, 500);

    });


    // CLICK EN IDIOMAS
    $('.idiomas-buttons').on('click', function () {
        $(this).css('opacity', '0');

        $('.hide-idiomas-buttons-box').css({
            'z-index': '2'
        });

        $('.idiomas-buttons').addClass('idiomas-buttons-small');

        setTimeout(function () {
            $('#ingles').css('opacity', '1')
        }, 400);
        setTimeout(function () {
            $('#frances').css('opacity', '1')
        }, 500);

    });

    // CLICK EN INGLES
    $('#ingles').on('click', function () {
        $('#ingles').fadeOut(0);
        $('#ingles').siblings().fadeIn();
        setTimeout(function () {
            $('#hide-ingles').fadeIn(500);
            $('#hide-ingles').removeClass('before-hide');
            $('#hide-ingles').siblings().addClass('before-hide');
        }, 500);
        setTimeout(function () {
            $('#hide-ingles .oral .donut-ring').attr('stroke-dasharray', '100 0');
        }, 1000);
        setTimeout(function () {
            $('#hide-ingles .oral .donut-segment').attr('stroke-dasharray', '85 15');
        }, 1100);
        setTimeout(function () {
            $('#hide-ingles .escrito .donut-ring').attr('stroke-dasharray', '100 0');
        }, 1300);
        setTimeout(function () {
            $('#hide-ingles .escrito .donut-segment').attr('stroke-dasharray', '75 25');
        }, 1400);
    });

    // CLICK EN FRANCÉS
    $('#frances').on('click', function () {
        $('#frances').fadeOut(0);
        $('#frances').siblings().fadeIn();
        setTimeout(function () {
            $('#hide-frances').fadeIn(500);
            $('#hide-frances').removeClass('before-hide');
            $('#hide-frances').siblings().addClass('before-hide');
        }, 500);
        setTimeout(function () {
            $('#hide-frances .oral .donut-ring').attr('stroke-dasharray', '100 0');
        }, 1000);
        setTimeout(function () {
            $('#hide-frances .oral .donut-segment').attr('stroke-dasharray', '60 40');
        }, 1100);
        setTimeout(function () {
            $('#hide-frances .escrito .donut-ring').attr('stroke-dasharray', '100 0');
        }, 1300);
        setTimeout(function () {
            $('#hide-frances .escrito .donut-segment').attr('stroke-dasharray', '70 30');
        }, 1400);
    });




    // Cerrar Experiencia
    $('.close').on('click', function () {
        $('.hide-trayect-button, .hide-formacion-button, #hide-ingles, #hide-frances').fadeOut(0);
        $('.trayect-buttons').css('opacity', '1');
        $('.trayect-buttons').fadeIn(500);
        $('.trayect-buttons, .idiomas-buttons').removeClass('trayect-buttons-big trayect-buttons-small idiomas-buttons-small');


        $('.formacion-buttons, .idiomas-buttons').css('opacity', '1');
        $('.formacion-buttons, .idiomas-buttons').fadeIn(500);
        $('.formacion-buttons, .idiomas-buttons').removeClass('formacion-buttons-big formacion-buttons-small idiomas-buttons-small');

        $('#hide-ingles .oral .donut-ring, #hide-ingles .oral .donut-segment, #hide-ingles .escrito .donut-ring, #hide-ingles .escrito .donut-segment, #hide-frances .oral .donut-ring, #hide-frances .oral .donut-segment, #hide-frances .escrito .donut-ring, #hide-frances .escrito .donut-segment').attr('stroke-dasharray', '0 100');
    });



    // SLIDER DE LOS SITIOS DE ESTUDIO (TRAZOS, CICE... ETC)
    var sliderEdu = setInterval(sliderEdu, 6000);

    $('.full').css('left', '0px');

    var full = 0;

    function sliderEdu() {
        //Puntos
        full++;
        if (full > 2) {
            full = 0;
        }

        if (full == 0) {
            $('.full').css('left', '0px');
        }
        if (full == 1) {
            $('.full').css('left', '35px');
        }
        if (full == 2) {
            $('.full').css('left', '70px');
        }
        // console.log('full: ' + full);
    }


    //Cuando haces click en los puntos
    $(".marcadores div:eq(0)").click(function () {
        $('.sliderImg1').css({
            'left': '0%',
            'animation': 'none'
        });
        $('.sliderImg2').css({
            'left': '100%',
            'animation': 'none'
        });
        $('.sliderImg3').css({
            'left': '200%',
            'animation': 'none'
        });
        $('.full').css('left', '0px');
        full = 0;
        clearInterval(sliderEdu);
    });
    $(".marcadores div:eq(1)").click(function () {
        $('.sliderImg1').css({
            'left': '-100%',
            'animation': 'none'
        });
        $('.sliderImg2').css({
            'left': '0%',
            'animation': 'none'
        });
        $('.sliderImg3').css({
            'left': '100%',
            'animation': 'none'
        });
        $('.full').css('left', '35px');
        full = 1;
        clearInterval(sliderEdu);
    });
    $(".marcadores div:eq(2)").click(function () {
        $('.sliderImg1').css({
            'left': '-200%',
            'animation': 'none'
        });
        $('.sliderImg2').css({
            'left': '-100%',
            'animation': 'none'
        });
        $('.sliderImg3').css({
            'left': '0%',
            'animation': 'none'
        });
        $('.full').css('left', '70px');
        full = 2;
        clearInterval(sliderEdu);
    });



    // REFERENCIAS
    // Cambio de slide
    var contRefer = 0;
    var maxRefer = $('.refer').length;

    // alert(maxRefer);
    //console.log('maxRefer: '+maxRefer);

    $('.izda-arrow').click(function () {
        contRefer--;
        cambioRefer();
        $('.control').removeClass('active');
        $('.control').eq(contRefer).addClass('active');

        if ($('#refer-box').hasClass('refer-big-box')) {
            $('.refer').removeClass('refer-big');
            $('.refer').eq(contRefer).addClass('refer-big')
        }

    });

    $('.control').click(function () {

        var padreSuperior = $(this).parent().attr('class');
        // alert(padreSuperior);

        if (padreSuperior == 'separador1') {
            contRefer = $(this).index();
        } else if (padreSuperior == 'separador2') {
            contRefer = $(this).index()
            contRefer = contRefer + 6;
        }
        // contRefer = $(this).index();
        cambioRefer();
        $('.control').removeClass('active');
        $(this).addClass('active');

        if ($('#refer-box').hasClass('refer-big-box')) {
            $('.refer').removeClass('refer-big');
            $('.refer').eq(contRefer).addClass('refer-big')
        }

        console.log('contRefer: ' + contRefer + '; maxRefer: ' + maxRefer);
    });

    $('.dcha-arrow').click(function () {
        contRefer++;
        cambioRefer();
        $('.control').removeClass('active');
        $('.control').eq(contRefer).addClass('active');

        if ($('#refer-box').hasClass('refer-big-box')) {
            $('.refer').removeClass('refer-big');
            $('.refer').eq(contRefer).addClass('refer-big')
        }

        // console.log('contRefer: '+contRefer+'; maxRefer: '+maxRefer);
    });


    // Abrir slide
    $('.refer .int').click(function () {

        var $this = $(this).parents('.refer').index();
        console.log('Este es:' + $this);

        $('.ver-mas').text('');
        $('.puntos').fadeOut(200);

        $('#refer-box').addClass('refer-big-box');
        $('.refer').eq($this).addClass('refer-big');
        // $('.up, .down').css('opacity' , '0');


    });

    // Cerrar slide
    $('.refer .int .close').click(function (e) {
        // cerrarRefer();

        e.stopPropagation();

        var $cont = contRefer;
        var $this = $('.refer');
        var $thisInt = $this.find('.int');

        $('.ver-mas').text('(Ver más)');
        $('.puntos').fadeIn(200);

        $('#refer-box').removeClass('refer-big-box');
        $('.refer').removeClass('refer-big');
        // $('.up, .down').css('opacity' , '1');
    });

    var referBig = $('.refer-big');

    // if(referBig.hasClass('refer-view')){
    //     $(this).removeClass('refer-big');
    // }

    function cerrarRefer() {

    }

    function cambioRefer() {

        var maxRefer = $('.refer').length;

        var contReferIzda2 = contRefer - 2;
        var contReferIzda = contRefer - 1;

        var contReferDcha = contRefer + 1;
        var contReferDcha2 = contRefer + 2;

        // Cuando es cero se vuelve 12
        if ((contRefer < 0)) {
            $('.refer').removeClass().addClass('refer refer-none');
            $('.refer').eq(maxRefer - 3).removeClass().addClass('refer refer-izda2');
            $('.refer').eq(maxRefer - 2).removeClass().addClass('refer refer-izda');
            $('.refer').eq(maxRefer - 1).removeClass().addClass('refer refer-view');
            $('.refer').eq(1).removeClass().addClass('refer refer-dcha');
            $('.refer').eq(2).removeClass().addClass('refer refer-dcha2');
            contRefer = maxRefer - 1; // 12
            $('.number-control').text(maxRefer + ' / ' + maxRefer);
        }
        // Cuando es 12 (el máximo)
        else if (contRefer == maxRefer) {
            $('.refer').removeClass().addClass('refer refer-none');
            $('.refer').eq(maxRefer - 2).removeClass().addClass('refer refer-izda2');
            $('.refer').eq(maxRefer - 1).removeClass().addClass('refer refer-izda');
            $('.refer').eq(0).removeClass().addClass('refer refer-view');
            $('.refer').eq(1).removeClass().addClass('refer refer-dcha');
            $('.refer').eq(2).removeClass().addClass('refer refer-dcha2');
            contRefer = 0;
            $('.number-control').text('1 / ' + maxRefer);
        } else {
            $('.refer').removeClass().addClass('refer refer-none');
            $('.refer').eq(contReferIzda2).removeClass().addClass('refer refer-izda2');
            $('.refer').eq(contReferIzda).removeClass().addClass('refer refer-izda');
            $('.refer').eq(contRefer).removeClass().addClass('refer refer-view');
            $('.refer').eq(contReferDcha).removeClass().addClass('refer refer-dcha');
            $('.refer').eq(contReferDcha2).removeClass().addClass('refer refer-dcha2');
            $('.number-control').text(contRefer + 1 + ' / ' + maxRefer);
        }
    }



});

// IMAGENES QUE SE MUEVEN CON EL RATÓN - ERROR 404
window.onload = function () {

    document.onmousemove = function (e) {

        var x = -(e.clientX / 100);
        var y = -(e.clientY / 100);

        var x2 = (e.clientX / 150);
        var y2 = (e.clientY / 150);

        var x3 = -(e.clientX / 200);
        var y3 = -(e.clientY / 200);

        var x4 = -(e.clientX / 250);
        var y4 = -(e.clientY / 250);

        $(".cero").css("transform", "translateX(" + x + "px) translateY(" + y + "px)");

        $(".primer-cuatro").css("transform", "translateX(" + x2 + "px) translateY(" + y2 + "px)");

        $(".segundo-cuatro").css("transform", "translateX(" + x3 + "px) translateY(" + y3 + "px)");

        $(".back-error").css("transform", "translateX(" + x4 + "px) translateY(" + y4 + "px)");

    };
};


// EFECTOS NADIRA

$(document).ready(function () {

    // PORTADA
    function mostrarPortada() {
        var elem = $('#nad-port .nad-container img');
        var myLength = elem.length;

        var i = -1;
        var id = setInterval(animacion, 250);

        function animacion() {
            if (i == myLength) {
                clearInterval(id);
            } else {
                i++;
                elem.eq(i).addClass('opa-1');
            }
        }
    }
    setTimeout(function () {
        mostrarPortada();
    }, 600)



    // BOTON SCROLL PORTADA - ANCLA ANIMADA NADIRA
    $('#nad-port').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#nad-intro').offset().top - 20
        }, 1000);
    });

    // PARALLAX ICONOS NADIRA
    function parallax() {

        var scrolled = $(window).scrollTop();

        var y1 = scrolled / 25;
        var y2 = -scrolled / 25;
        var y3 = scrolled / 20;
        var y4 = -scrolled / 20;
        var y5 = scrolled / 15;
        var y6 = -scrolled / 15
        var y7 = -scrolled / 10;
        var y8 = scrolled / 10;

        // SERVICIOS
        $(".icon-title").css("transform", "translateX(" + y1 + "px)");
        $("#nad-icon-1").css("transform", "translateY(" + y1 + "px)");
        $("#nad-icon-2").css("transform", "translateY(" + y2 + "px)");
        $("#nad-icon-4").css("transform", "translateY(" + y3 + "px)");
        $("#nad-icon-3").css("transform", "translateY(" + y4 + "px)");
        $("#nad-icon-5").css("transform", "translateY(" + y5 + "px)");
        $("#nad-icon-6").css("transform", "translateY(" + y6 + "px)");

        // SECTORES
        $("#nad-icon-7").css("transform", "translateY(" + y1 + "px)");
        $("#nad-icon-8").css("transform", "translateY(" + y3 + "px)");
        $("#nad-icon-9").css("transform", "translateY(" + y2 + "px)");
        $("#nad-icon-10").css("transform", "translateY(" + y6 + "px)");
        $("#nad-icon-11").css("transform", "translateY(" + y5 + "px)");
        $("#nad-icon-12").css("transform", "translateY(" + y4 + "px)");

        // CONTACTO
        $("#nad-icon-13").css("transform", "translateY(" + y6 + "px)");
        $("#nad-icon-14").css("transform", "translateY(" + y5 + "px)");
        $("#nad-icon-15").css("transform", "translateY(" + y4 + "px)");

        // ---Cuadrados---
        // SERVICIOS-Cuadrados---
        $(".cuadrados div:eq(0)").css("transform", "translateY(" + y8 + "px)");
        $(".cuadrados div:eq(1)").css("transform", "translateY(" + y7 + "px)");
        $(".cuadrados div:eq(2)").css("transform", "translateY(" + y8 + "px)");
        $(".cuadrados div:eq(3)").css("transform", "translateY(" + y5 + "px)");
        $(".cuadrados div:eq(4)").css("transform", "translateY(" + y4 + "px)");
        $(".cuadrados div:eq(5)").css("transform", "translateY(" + y6 + "px)");

        // SECTORES-Cuadrados--- 
        $(".cuadrados div:eq(6)").css("transform", "translateY(" + y3 + "px)");
        $(".cuadrados div:eq(7)").css("transform", "translateY(" + y2 + "px)");
        $(".cuadrados div:eq(8)").css("transform", "translateY(" + y4 + "px)");
        $(".cuadrados div:eq(9)").css("transform", "translateY(" + y5 + "px)");
        $(".cuadrados div:eq(10)").css("transform", "translateY(" + y8 + "px)");
        $(".cuadrados div:eq(11)").css("transform", "translateY(" + y7 + "px)");

        // CONTACTO-Cuadrados---   
        // $(".cuadrados div:eq(12)").css("transform", "translateY("+y6+"px)");  
        $(".cuadrados div:eq(13)").css("transform", "translateY(" + y5 + "px)");
        $(".cuadrados div:eq(14)").css("transform", "translateY(" + y4 + "px)");
        $(".cuadrados div:eq(15)").css("transform", "translateY(" + y3 + "px)");
        $(".cuadrados div:eq(16)").css("transform", "translateY(" + y2 + "px)");
        $(".cuadrados div:eq(17)").css("transform", "translateY(" + y1 + "px)");
        $(".cuadrados div:eq(18)").css("transform", "translateY(" + y8 + "px)");
        $(".cuadrados div:eq(19)").css("transform", "translateY(" + y7 + "px)");
    }

    $(window).scroll(function (e) {
        parallax();
    });


});


// EFECTOS FARRUTX
$(document).ready(function () {

    // PORTADA
    function mostrarPortada() {
        var elem = $('#far-port .far-container img');
        var myLength = elem.length;

        var i = -1;
        var id = setInterval(animacion, 300);

        function animacion() {
            if (i == myLength) {
                clearInterval(id);
                $('#far-port .far-container h1').addClass('opa-1');
            } else {
                i++;
                elem.eq(i).addClass('opa-1');
            }
        }
    }
    setTimeout(function () {
        mostrarPortada();
    }, 600)



    // BOTON SCROLL PORTADA - ANCLA ANIMADA FARRUTX
    $('#far-port').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#far-intro').offset().top - 20
        }, 1000);
    });

});

// -----------------------------
// EFECTOS FUTURO

// Efecto aparecer Introducción 
$(window).scroll(function () {

    // Rotando (rotate)
    $('.sp-mobile-apear').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var mobImg = ".fut-intro-img";

        if (imagePos < topOfWindow + 300) {
            $('.fut-intro-img img:eq(0)').addClass('mob-rotate-6');
            $('.fut-intro-img img:eq(1)').addClass('mob-rotate-5');
            $('.fut-intro-img img:eq(2)').addClass('mob-rotate-4');
            $('.fut-intro-img img:eq(3)').addClass('mob-rotate-3');
            $('.fut-intro-img img:eq(4)').addClass('mob-rotate-2');
        } else {
            $('.fut-intro-img img:eq(0)').removeClass('mob-rotate-6');
            $('.fut-intro-img img:eq(1)').removeClass('mob-rotate-5');
            $('.fut-intro-img img:eq(2)').removeClass('mob-rotate-4');
            $('.fut-intro-img img:eq(3)').removeClass('mob-rotate-3');
            $('.fut-intro-img img:eq(4)').removeClass('mob-rotate-2');

        }
    });

});


$(document).ready(function () {

    // $('body').css('background','red');

    $('#fut-port').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#fut-intro').offset().top - 20
        }, 1000);
    });

    // EFECTO PORTADA
    function mostrarPortada() {
        var elem = $('#fut-port .fut-container img');
        var myLength = elem.length;

        var i = -1;
        var id = setInterval(animacion, 300);

        function animacion() {
            if (i == myLength) {
                clearInterval(id);
            } else {
                i++;
                elem.eq(i).addClass('opa-1');
            }
        }
    }

    setTimeout(function () {
        mostrarPortada();
    }, 600);


    // PARALLAX dispositivos FUTURO
    function parallax2() {

        var scrolled = $(window).scrollTop();

        var y1 = scrolled / 25;
        var y2 = -scrolled / 25;
        var y3 = scrolled / 20;
        var y4 = -scrolled / 20;
        var y5 = scrolled / 15;
        var y6 = -scrolled / 15
        var y7 = -scrolled / 10;
        var y8 = scrolled / 10;

        $(".res-img:eq(0)").css("transform", "translateY(" + y1 + "px)");
        $(".res-img:eq(1)").css("transform", "translateY(" + -y1 + "px)");
        $(".res-img:eq(2)").css("transform", "translateY(" + y2 + "px)");
        $(".res-img:eq(3)").css("transform", "translateY(" + y3 + "px)");
        $(".res-img:eq(4)").css("transform", "translateY(" + y4 + "px)");
        $(".res-img:eq(5)").css("transform", "translateY(" + y5 + "px)");
        $(".res-img:eq(6)").css("transform", "translateY(" + y6 + "px)");
    }

    $(window).scroll(function (e) {
        parallax2();
    });





    // Selección de pantallas
    $('.big-mobile, .cont').on('click', '.big-a', function () {

        // alert($(this).attr('id'));

        var idImport = $(this).attr('data');
        console.log(idImport);

        var iconPant = "";
        var titlePant = "";
        var textPant = "";
        var imgPant = "";


        if (idImport == '-') {
            idImport = $('#cont').text();
            idImport--;
            if (idImport == 0) {
                var idImport = 8;
            }

            console.log(idImport);
        }
        if (idImport == '+') {
            idImport = $('#cont').text();
            idImport++;
            if (idImport == 9) {
                var idImport = 1;
                iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/prestamos.svg';
                titlePant = 'Préstamos'
                textPant = 'En esta sección el cliente podrá calcular las condiciones de su préstamo con facilidad y solicitarlo. ';
                imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/prestamos.jpg';
                cambiarTodo();
            }

        } else if ((idImport == 1) || (idImport == 9)) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/prestamos.svg';
            titlePant = 'Préstamos'
            textPant = 'En esta sección el cliente podrá calcular las condiciones de su préstamo con facilidad y solicitarlo. ';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/prestamos.jpg';
            cambiarTodo();
        }

        if (idImport == 2) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/cards.svg';
            titlePant = 'Tarjetas'
            textPant = 'En esta sección el cliente podrá idImportratar entre las diferentes tarjetas que ofrece el banco (Crédito, Débito, especial para comprar por internet...)';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/tarjetas.jpg';
            cambiarTodo();
        }

        if (idImport == 3) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/fondos.svg';
            titlePant = 'Fondos'
            textPant = 'En esta sección el cliente podrá consultar la evolución de sus fondos de inversión y ver su progreso en el tiempo.';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/fondos.jpg';
            cambiarTodo();
        }
        if (idImport == 4) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/seguros.svg';
            titlePant = 'Seguros'
            textPant = 'Sección de venta de productos para protegerse de cuando las cosas no salen como esperamos.';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/seguros.jpg';
            cambiarTodo();
        }
        if (idImport == 5) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/cuentas.svg';
            titlePant = 'Cuentas'
            textPant = 'Esta sección informa y vende las cuentas que se pueden idImportratar con el banco organizadas según el perfil de cliente.';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/cuentas.jpg';
            cambiarTodo();
        }
        if (idImport == 6) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/hipotecas.svg';
            titlePant = 'Hipotecas'
            textPant = 'Aquí el cliente podrá informarse sobre que tipo de hipoteca es la mejor opción para conseguir la financiación para su hogar. ';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/hipotecas.jpg';
            cambiarTodo();
        }
        if (idImport == 7) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/pensiones.svg';
            titlePant = 'Pensiones'
            textPant = 'Ayuda a decidir al cliente sobre los productos de ahorro orientados a tener una buena jubilación.';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/pensiones.jpg';
            cambiarTodo();
        }
        if (idImport == 8) {
            iconPant = '../../../img/basic/portfolio/06-ux/001-futuro/icons/bolsa.svg';
            titlePant = 'Bolsa'
            textPant = 'Sección orientada a dar la información para hacer las inversiones del cliente rentables y satisfacciorias.';
            imgPant = '../../../img/basic/portfolio/06-ux/001-futuro/pantallas/bolsa.jpg';
            cambiarTodo();
        }

        function cambiarTodo() {
            $('.pant-title img').attr('src', iconPant);
            $('.pant-title h2').text(titlePant);
            $('.pant-text p').text(textPant);
            $('.changing-img').attr('src', imgPant);
            $('#cont').text(idImport);
        }

        // on-click
    })
    // fin ready
});