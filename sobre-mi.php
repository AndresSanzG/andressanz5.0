<?php include 'inc/head.php'; ?>

<body>

    <!-- Menú y logo -->
    <header class="col-12 header-scroll">
        <nav class="col-10">
            <!-- LOGO -->
            <div id="logo" class="logo-scroll">
                <a href="index.php">
                    <h1>ANDRÉS SANZ</h1>
                    <h2><?= $tit ?></h2>
                </a>
            </div>
            <!-- MENU -->
            <ul id="menu" class="col-7 menu-scroll">
                <li class="col-3">
                    <a id="open-servicios" href="servicios.php<?= $ext ?>" class=""><?= $menu1 ?></a>
                </li>
                <li class="col-3">
                    <a id="open-trabajo" href="index.php#ancla-portfolio<?= $ext ?>"><?= $menu2 ?></a>
                </li>
                <li class="col-3">
                    <a id="open-me" href="sobre-mi.php<?= $ext ?>"><?= $menu3 ?></a>
                </li>
                <li class="col-3">
                    <a id="open-contact" href="contacto.php<?= $ext ?>"><?= $menu4 ?></a>
                </li>

            </ul>
            <a id="lspa" href="<?= rtrim($url, "?leng=$lg") ?>?leng=es">ESP</a>

            <a id="leng" href="<?= rtrim($url, "?leng=$lg") ?>?leng=en">ENG</a>
        </nav>
    </header>

    <?php include 'inc/cargando.php'; ?>

    <div class="bajo-header"></div>

    <div id="present" class="sp-apear">
        <div class="present-img sp-hide sp2"></div>
        <div class="contact-titular col-5 mb8">
            <h2 class="sp-hide sp3"><?= $me1 ?></h2>
            <h3 class="sp-hide sp4"><?= $me2 ?></h3>
            <div class="text-present sp-hide sp5">
                <p><?= $me3 ?></p>
                <p><?= $me4 ?></p>
                <p><?= $me5 ?></p>
                <p><?= $me6 ?></p>
                <p><?= $me7 ?></p>
                <button class="sp-hide sp6"><a href="contacto.php"><?= $me8 ?></a></button>
            </div>
        </div>
        <div class="invite-scroll sp-hide sp8">&#8250;</div>
        <ul class="menu-sobre sp-apear sp-hide sp3">
            <li class="sp-hide sp4"><span><?= $mmenu1 ?></span></li>
            <li class="sp-hide sp5"><span><?= $mmenu2 ?></span></li>
            <li class="sp-hide sp6"><span><?= $mmenu3 ?></span></li>
            <li class="sp-hide sp7"><span><?= $mmenu4 ?></span></li>
            <li class="sp-hide sp8"><span><?= $mmenu5 ?></span></li>
            <li class="sp-hide sp9"><span><?= $mmenu6 ?></span></li>
            <li class="sp-hide sp10"><span><?= $mmenu7 ?></span></li>
        </ul>
    </div>

    <?php include 'inc/referencias.php'; ?>


    <?php include 'inc/trayectoria-y-formacion.php';?>


    <?php include 'inc/idiomas.php'; ?>


    <?php include 'inc/otros-estudios-y-habilidades.php'; ?>




    <?php include 'inc/footer.php'; ?>

    <script type="text/javascript">
        $(document).ready(function() {

            var contRefer = 0;
            var maxRefer = $('.refer').length;


            //Enable swiping...
            $("#referencias").swipe({
                //Generic swipe handler for all directions
                swipe: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {

                    var windowidth = $(window).width();

                    if ((direction == 'left') && (distance >= 50)) {
                        contRefer++;
                        cambioRefer();

                        $('.control').removeClass('active');
                        $('.control').eq(contRefer).addClass('active');

                        if ($('#refer-box').hasClass('refer-big-box')) {
                            $('.refer').removeClass('refer-big');
                            $('.refer').eq(contRefer).addClass('refer-big')
                        }
                        $('.refer .int').css('transform', 'translateX(0px)');
                    }
                    if ((direction == 'right') && (distance >= 50)) {
                        contRefer--;
                        cambioRefer();
                        $('.refer .int').css('transform', 'translateX(0px)');

                        $('.control').removeClass('active');
                        $('.control').eq(contRefer).addClass('active');

                        if ($('#refer-box').hasClass('refer-big-box')) {
                            $('.refer').removeClass('refer-big');
                            $('.refer').eq(contRefer).addClass('refer-big')
                        }
                    }
                },
                swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {


                    if ((direction == 'left') && (distance < 50)) {
                        $('.refer-view .int').css({
                            'transform': 'translateX(' + -distance + 'px)'
                        });
                    }

                    if ((direction == 'right') && (distance < 50)) {
                        $('.refer-view .int').css({
                            'transform': 'translateX(' + distance + 'px)'
                        });
                    }

                },

                allowPageScroll: "vertical"

            });

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


            var URLsearch = window.location.search;
            // alert(URLsearch);

            // CAMBIO DE IDIOMA
            if (URLsearch == '?leng=en') {
                $('#leng').css('display', 'none');
                $('#lspa').css('display', 'flex');
            }
            if (URLsearch == '?leng=es') {
                $('#lspa').css('display', 'none');
                $('#leng').css('display', 'flex');

            }

        });
    </script>


    <script>
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
    </script>

</body>

</html>