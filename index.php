<!-- INDEX -->
<?php include 'inc/head.php'; ?>

<body>

  <!-- Menú y logo -->
	<header class="col-12 header-intro">
		<nav class="col-10">
			<!-- LOGO -->
			<div id="logo" class="logo-intro">
				<a href="index.php">
					<h1>ANDRÉS SANZ</h1>
					<h2><?= $tit ?></h2>
				</a>
			</div>
			<!-- MENU -->
			<ul id="menu" class="col-7 menu-intro">
				<li class="col-3">
					<a id="open-servicios" href="servicios.php<?= $ext ?>"><?= $menu1 ?></a>
				</li>
				<li class="col-3">
					<a id="open-trabajo" href="index.php#ancla-portfolio<?= $ext ?>" class="activee"><?= $menu2 ?></a>
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
  <?php include 'inc/portada.php'; ?>
  <?php include 'inc/portfolio.php'; ?>
  <?php include 'inc/footer.php'; ?>



<script type="text/javascript">
    $(document).ready(function() {
      // SLIDER
      var cont = 1;

      setTimeout(function() {
        $('#des').removeClass('pos-right');
      }, 1500);

      // Iniciamos el bucle
      var tempo = 10000
      $('.barra-tiempo').css('transition', 'width ' + tempo + 'ms linear');

      myVar = setInterval(myTimer, tempo);

      function myTimer() {
        cont++;
        if (cont > 6) {
          cont = 1;
        }
        console.log(cont);
        cambioPortada();
      }

      function myStopFunction() {
        clearInterval(myVar);
        $('.barra-tiempo').fadeOut(1000);
      }

      // Cuando clickeamos en los points

      $('#portada-points li').click(function() {
        myStopFunction()
      });
      $('#portada-points li').eq(0).click(function() {
        cont = 1;
        cambioPortada()
      });
      $('#portada-points li').eq(1).click(function() {
        cont = 2;
        cambioPortada()
      });
      $('#portada-points li').eq(2).click(function() {
        cont = 3;
        cambioPortada()
      });
      $('#portada-points li').eq(3).click(function() {
        cont = 4;
        cambioPortada()
      });
      $('#portada-points li').eq(4).click(function() {
        cont = 5;
        cambioPortada()
      });
      $('#portada-points li').eq(5).click(function() {
        cont = 6;
        cambioPortada()
      });


      //Enable swiping...
      $("#portada, header").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {

          myStopFunction();

          if ((direction == 'left') && (distance >= 75)) {
            cont++;
            if (cont == 7) {
              cont = 1;
            }
            // Para verlo bien:
            // $('#logo h1').text(cont);                
            cambioPortada();
            $('#portada .section').css({
              'transform': 'translateX(0px)'
            });
          }
          if ((direction == 'right') && (distance >= 75)) {
            cont--;
            if (cont == 0) {
              cont = 6;
            }
            // Para verlo bien:
            // $('#logo h1').text(cont);
            cambioPortada();
            $('#portada .section').css({
              'transform': 'translateX(0px)'
            });
          }
        },
        swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
          if ((direction == 'left') && (distance < 75)) {
            $('#portada .section').css({
              'transform': 'translateX(' + -distance + 'px)'
            });
          }

          if ((direction == 'right') && (distance < 75)) {
            $('#portada .section').css({
              'transform': 'translateX(' + distance + 'px)'
            });
          }
        },

        //Default is 75px, set to 0 for demo so any distance triggers swipe
        // threshold: 150,
        excludedElements: $.fn.swipe.defaults.excludedElements + "#logo, #menu, .slogan-box button, #portada-points .point",
        allowPageScroll: "vertical",

      });


      function cambioPortada() {

        $('#des, #ilust, #web, #video, #bbaa, #ux').removeClass('pos-left pos-right on-top');
        $('#logo h1, #logo h2').removeClass();
        $('#portada-points li').removeClass('active');
        $('.barra-tiempo').css('width', '0');
        $('.active').attr('class', 'active');

        switch (cont) {

          case 1: // Diseño Grafico
            $('#des').addClass('on-top');
            $('#ilust, #web, #video, #bbaa, #ux').addClass('pos-right');
            $('#logo h1').addClass('azul-dark');
            $('#logo h2').addClass('azul-light');
            $('#portada-points li').eq(0).addClass('active');
            $('#des .barra-tiempo').css('width', '100%');
            $('.active').addClass('bk-azul');
            break;
          case 2: // Ilustración
            $('#des').addClass('pos-left');
            $('#ilust').addClass('on-top');
            $('#web, #video, #bbaa, #ux').addClass('pos-right');
            $('#logo h1').addClass('verde-dark');
            $('#logo h2').addClass('verde-light');
            $('#portada-points li').eq(1).addClass('active');
            $('#ilust .barra-tiempo').css('width', '100%');
            $('.active').addClass('bk-verde');
            break;
          case 3: // Desarollo web
            $('#des, #ilust').addClass('pos-left');
            $('#web').addClass('on-top');
            $('#video, #bbaa, #ux').addClass('pos-right');
            $('#logo h1').addClass('magenta-dark');
            $('#logo h2').addClass('magenta-light');
            $('#portada-points li').eq(2).addClass('active');
            $('#web .barra-tiempo').css('width', '100%');
            $('.active').addClass('bk-magenta');
            break;
          case 4: // Video
            $('#des, #ilust, #web').addClass('pos-left');
            $('#video').addClass('on-top');
            $('#bbaa, #ux').addClass('pos-right');
            $('#logo h1').addClass('cyan-dark');
            $('#logo h2').addClass('cyan-light');
            $('#portada-points li').eq(3).addClass('active');
            $('#video .barra-tiempo').css('width', '100%');
            $('.active').addClass('bk-cyan');
            break;
          case 5: // Artes tradicionales
            $('#des, #ilust, #web, #video').addClass('pos-left');
            $('#bbaa').addClass('on-top');
            $('#ux').addClass('pos-right');
            $('#logo h1').addClass('naranja-dark');
            $('#logo h2').addClass('naranja-light');
            $('#portada-points li').eq(4).addClass('active');
            $('#bbaa .barra-tiempo').css('width', '100%');
            $('.active').addClass('bk-naranja');
            break;
          case 6: // UX / UI
            $('#des, #ilust, #web, #video, #bbaa').addClass('pos-left');
            $('#ux').addClass('on-top');
            $('#logo h1').addClass('morado-dark');
            $('#logo h2').addClass('morado-light');
            $('#portada-points li').eq(5).addClass('active');
            $('#ux .barra-tiempo').css('width', '100%');
            $('.active').addClass('bk-morado');
            break;
          default:
            // code block
        }
        // FIN cambioPortada
      }


      // CAMBIO LOGO
      var flag = false;
      var scroll;

      $(window).on('scroll', function() {
        scroll = $(window).scrollTop();

        if (scroll > 80) {
          if (!flag) {
            $('header').addClass('header-scroll').removeClass('header-intro');
            $('#logo').addClass('logo-scroll').removeClass('logo-intro');
            $('#menu').addClass('menu-scroll').removeClass('menu-intro');
            flag = true;
          }
        } else {
          if (flag) {
            $('header').addClass('header-intro').removeClass('header-scroll');
            $('#logo').addClass('logo-intro').removeClass('logo-scroll');
            $('#menu').addClass('menu-intro').removeClass('menu-scroll');
            flag = false;
          }
        }
      });

      scroll = $(window).scrollTop();
      if (scroll > 80) {
        $('header').addClass('header-scroll').removeClass('header-intro');
        $('#logo').addClass('logo-scroll').removeClass('logo-intro');
        $('#menu').addClass('menu-scroll').removeClass('menu-intro');
        flag = true;
      }

      // ANCLAS ANIMADAS
      $('#open-trabajo').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $('#portfolio').offset().top - 80
        }, 1500);
      });

    });


    $(document).ready(function() {

      if (window.location == "https://www.andressanz.es/index.php#ancla-portfolio") {
        // if(window.location == "https://www.andressanz.es/index.php#ancla-portfolio"){

        $('html, body').animate({
          scrollTop: $('#portfolio').offset().top - 200
        }, 500);

        $('.figure, .false-figure.des-image, .false-figure.bbaa-image, .false-figure.ilust-image, .false-figure.ux-image').removeClass('width-cero');

        $('.b-todo span').text('TODO');
        $('#sp-tab').removeClass().addClass('deg-todo');
      }

      if (window.location == "https://www.andressanz.es/index.php#ancla-design") {
        $('html, body').animate({
          scrollTop: $('#botones-box').offset().top - 200
        }, 500);

        $('.figure').addClass('width-cero');
        $('.des-image').removeClass('width-cero');

        $('.b-todo span').text('Diseño Gráfico');
        $('#sp-tab').removeClass().addClass('deg-azul');
      }



      if (window.location == "https://www.andressanz.es/index.php#ancla-ilustration") {
        $('html, body').animate({
          scrollTop: $('#botones-box').offset().top - 200
        }, 500);
        $('.figure').addClass('width-cero');
        $('.ilust-image').removeClass('width-cero');

        $('.b-todo span').text('Ilustración');
        $('#sp-tab').removeClass().addClass('deg-verde');
      }

      if (window.location == "https://www.andressanz.es/index.php#ancla-web") {
        $('html, body').animate({
          scrollTop: $('#botones-box').offset().top - 200
        }, 500);

        $('.figure').addClass('width-cero');
        $('.web-image').removeClass('width-cero');

        $('.b-todo span').text('Desarrollo web');
        $('#sp-tab').removeClass().addClass('deg-magenta');
      }

      if (window.location == "https://www.andressanz.es/index.php#ancla-video") {
        $('html, body').animate({
          scrollTop: $('#botones-box').offset().top - 200
        }, 500);

        $('.figure').addClass('width-cero');
        $('.vid-image').removeClass('width-cero');

        $('.b-todo span').text('Video y animación');
        $('#sp-tab').removeClass().addClass('deg-cyan');
      }

      if (window.location == "https://www.andressanz.es/index.php#ancla-bbaa") {
        $('html, body').animate({
          scrollTop: $('#botones-box').offset().top - 200
        }, 500);

        $('.figure').addClass('width-cero');
        $('.bbaa-image').removeClass('width-cero');

        $('.b-todo span').text('Artes tradicionales');
        $('#sp-tab').removeClass().addClass('deg-naranja');
      }

      if (window.location == "https://www.andressanz.es/index.php#ancla-ux-ui") {
        $('html, body').animate({
          scrollTop: $('#botones-box').offset().top - 200
        }, 500);

        $('.figure').addClass('width-cero');
        $('.ux-image').removeClass('width-cero');

        $('.b-todo span').text('UX / UI');
        $('#sp-tab').removeClass().addClass('deg-morado');
      }

    });


    // HACER QUE LA PALABRA PORTFOLIO SE MARQUE AL LLEGAR A LA GALERIA

    $(document).ready(function() {

      $(window).on("scroll", function() {
        if ($(this).scrollTop() >= $("#portfolio").offset().top - $(this).height() + 200) {
          $('#open-trabajo').addClass('active bk-azul');
        } else {
          $('#open-trabajo').removeClass();
        }
      });

    });

    
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
	</script>
  </script>


</body>

</html>