    // ----- INICIACIONES LIGHTGALLERY --------
var width = $(window).width();

// INICIACIÓN SOLO IMAGENES
var $lg = $('#wpt, #concontra, #acc, #cv, #cards, #icons, #lonas, #cinf, #driven, #cereal, #birds, #super, #hindu, #cham, #hist, #vitru, #ponts, #real, #bode, #vivo, #mural, #made, #piedra');

$lg.lightGallery({
    thumbnail:true,
    animateThumb: true,
    showThumbByDefault: false,
    mousewheel: true,
    download: false,
    hideBarsDelay: 1500
}); 

// Añade con programación un nuevo botón
$lg.on('onAfterOpen.lg',function(event){
   $('.lg-toolbar').append('<a class=\"lg-icon\" href=\"javascript:toggleCaption()\">&#9432</a>');
});


// Muestra / Oculta el texto al clickear en la imagen
$lg.on('onSlideClick.lg', doToggle);

function doToggle(e) {
    $('.lg-outer').toggleClass('lg-hide-items');
    var curVal = $('.lg-sub-html').css('visibility');
    $('.lg-sub-html').css('visibility', curVal == 'hidden' ? 'visible' : 'hidden');
}

// Añade el texto a todos los campos de texto
$(document).ready(function(){
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
    $('.valan-info-added').append($('.valan-info'));
    $('.playg-info-added').append($('.playg-info'));
    $('.ibero-info-added').append($('.ibero-info'));
    $('.cigna-info-added').append($('.cigna-info'));
    $('.andy-info-added').append($('.andy-info'));
    $('.mano-info-added').append($('.mano-info'));
    $('.ddig-info-added').append($('.ddig-info'));
    $('.cigvid-info-added').append($('.cigvid-info'));
    $('.econ-info-added').append($('.econ-info'));
    $('.real-info-added').append($('.real-info'));
    $('.bode-info-added').append($('.bode-info'));
    $('.vivo-info-added').append($('.vivo-info'));
    $('.mural-info-added').append($('.mural-info'));
    $('.made-info-added').append($('.made-info'));
    $('.piedra-info-added').append($('.piedra-info'));
});



// Cambia
function toggleCaption() {
    var curVal = $('.ns').css('display');
    $('.ns').css('display', curVal == 'none' ? 'block' : 'none');

    var lgVal = $('.wpt-info, .concontra-info, .acc-info, .cv-info, .cards-info, .icons-info, .lonas-info, .cinf-info, .driven-info, .cereal-info, .birds-info, .super-info, .hindu-info, .cham-info, .hist-info, .vitru-info, .ponts-info, .valan-info, .playg-info, .ibero-info, .cigna-info, .andy-info, .mano-info, .ddig-info, .cigvid-info, .econ-info, .real-info, .bode-info, .vivo-info, .mural-info, .made-info, .piedra-info').css('display');

   $('.wpt-info, .concontra-info, .acc-info, .cv-info, .cards-info, .icons-info, .lonas-info, .cinf-info, .driven-info, .cereal-info, .birds-info, .super-info, .hindu-info, .cham-info, .hist-info, .vitru-info, .ponts-info, .valan-info, .playg-info, .ibero-info, .cigna-info, .andy-info, .mano-info, .ddig-info, .cigvid-info, .econ-info, .real-info, .bode-info, .vivo-info, .mural-info, .made-info, .piedra-info').css('display', lgVal == 'none' ? ' block' : 'none');   
}


// INICIACIÓN IFRAMES WEB
var $lgweb = $('#valan, #playg, #ibero, #cigna, #andy')
$lgweb.lightGallery({
    selector: 'this',
    download: false,
    hideBarsDelay: 500,
    zoom: false
});

$lgweb.on('onAfterOpen.lg',function(event){
   $('.lg-toolbar').append('<a class=\"lg-icon\" href=\"javascript:toggleCaption()\">&#9432</a>');
});


// INICIACIÓN IFRAMES VIDEOS
var $lgvid = $('#mano, #ddig, #cigvid, #econ');

$lgvid.on('onAfterOpen.lg',function(event){
   $('.lg-toolbar').append('<a class=\"lg-icon\" href=\"javascript:toggleCaption()\">&#9432</a>');
});
$lgvid.on('onSlideClick.lg', doToggle);


 $lgvid.lightGallery({
        download: false,
        zoom: false
 }); 
    