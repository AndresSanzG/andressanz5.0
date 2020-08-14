<?php include 'inc/head.php'; ?>

<?php

$url = "";
//RECOGEMOS LA URL POR PHP
$url = "http://" . $_SERVER['HTTP_HOST'] . ":" . $_SERVER['SERVER_PORT'] . $_SERVER['REQUEST_URI'];

?>


<body>

	<!-- ---------------------------------------------------------------------------------
MENU Y LOGO
--------------------------------------------------------------------------------- -->
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
					<a id="open-servicios" href="servicios.php<?= $ext ?>" class="activee"><?= $menu1 ?></a>
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

	<!-- ---------------------------------------------------------------------------------
SERVICIOS
--------------------------------------------------------------------------------- -->

	<div id="servicios-titular" class="titular col-12 mb8 sp-apear sp-hide">
		<h2 class=""><?= $serv1 ?></h2>
		<div class="separador bk-azul"></div>
		<h3><?= $serv2 ?></h3>
	</div>


	<section id="servicios-box" class="col-10">
		<!-- Diseño Gráfico -->
		<div class="servicio mb8 sp-apear sp-hide">
			<a href="index.php#ancla-design">
				<img src="img/basic/ilust/serv-des.svg" alt="Diseño Gráfico">
			</a>
			<h4>
				<a class="azul-dark" href="index.php#ancla-design"> <?= $serv3 ?> </a>
			</h4>
			<h5 class="azul-light"> <?= $serv4 ?> </h5>
			<div class="separador bk-azul"></div>
			<p> <?= $serv5 ?> </p>
		</div>

		<!-- Ilustración -->
		<div class="servicio mb8 sp-apear sp-hide sp2">
			<a href="index.php#ancla-ilustration">
				<img src="img/basic/ilust/serv-ilust.svg" alt="Ilustración">
			</a>
			<h4>
				<a class="verde-dark" href="index.php#ancla-ilustration"><?= $serv6 ?></a>
			</h4>
			<h5 class="verde-light"><?= $serv7 ?></h5>
			<div class="separador bk-verde"></div>
			<p> <?= $serv8 ?></p>
		</div>

		<!-- Desarrollo web -->
		<div class="servicio mb8 sp-apear sp-hide sp3">
			<a href="index.php#ancla-web">
				<img src="img/basic/ilust/serv-web.svg" alt="Desarrollo web">
			</a>
			<h4>
				<a class="magenta-dark" href="index.php#ancla-web"><?= $serv9 ?></a>
			</h4>
			<h5 class="magenta-light"><?= $serv10 ?></h5>
			<div class="separador bk-magenta"></div>
			<p> <?= $serv11 ?> </p>
		</div>

		<!-- Video y animación -->
		<div class="servicio mb8 sp-apear sp-hide">
			<a href="index.php#ancla-video">
				<img src="img/basic/ilust/serv-vid.svg" alt="Video y animación">
			</a>
			<h4>
				<a class="cyan-dark" href="index.php#ancla-video"><?= $serv12 ?></a>
			</h4>
			<h5 class="cyan-light"><?= $serv13 ?></h5>
			<div class="separador bk-cyan"></div>
			<p><?= $serv14 ?></p>
		</div>

		<!-- Artes tradicionales -->
		<div class="servicio mb8 sp-apear sp-hide sp2">
			<a href="index.php#ancla-bbaa">
				<img src="img/basic/ilust/serv-bbaa.svg" alt="Artes tradicionales">
			</a>
			<h4>
				<a class="naranja-dark" href="index.php#ancla-bbaa"><?= $serv15 ?></a>
			</h4>
			<h5 class="naranja-light"><?= $serv16 ?></h5>
			<div class="separador bk-naranja"></div>
			<p><?= $serv17 ?></p>
		</div>

		<!-- UX / UI -->
		<div class="servicio mb8 sp-apear sp-hide sp3">
			<a href="index.php#ancla-ux-ui">
				<img src="img/basic/ilust/serv-ux.svg" alt="UX / UI">
			</a>
			<h4>
				<a class="morado-dark" href="index.php#ancla-ux-ui"><?= $serv18 ?></a>
			</h4>
			<h5 class="morado-light"><?= $serv19 ?></h5>
			<div class="separador bk-morado"></div>
			<p><?= $serv20 ?></p>
		</div>

	</section>
	<!-- ---------------------------------------------------------------------------------
HERRAMIENTAS
--------------------------------------------------------------------------------- -->
	<section id="herramientas-section">
		<div class="titular col-12 mb8 sp-apear sp-hide">
			<h2 class=""><?= $tool1 ?></h2>
			<div class="separador bk-azul"></div>
			<h3><?= $tool2 ?></h3>
		</div>


		<div id="herramientas-box" class="col-8  sp-apear sp-hide">

			<!-- Desarrollo y programación web -->
			<div class="herramientas">
				<h4 class="mb5"><?= $tool3 ?></h4>
				<!-- HTML5 -->
				<div class="herramienta sp-apear sp-hide">
					<img src="img/icons/tools/html5.svg" alt="Html5">
					<div class="info-oculta">
						<p class="p-top">HTML5</p>
						<p class="p-bot"><?= $tool4 ?></p>
					</div>
				</div>
				<!-- Css3 -->
				<div class="herramienta sp-apear sp-hide sp2">
					<img src="img/icons/tools/css3.svg" alt="Css3">
					<div class="info-oculta">
						<p class="p-top">Css3</p>
						<p class="p-bot"><?= $tool5 ?></p>
					</div>
				</div>
				<!-- Js/Jquery -->
				<div class="herramienta sp-apear sp-hide sp3">
					<img src="img/icons/tools/js-jquery.svg" alt="JS / Jquery">
					<div class="info-oculta">
						<p class="p-top">Js / Jquery</p>
						<p class="p-bot"><?= $tool6 ?></p>
					</div>
				</div>
				<!-- Bootstrap -->
				<div class="herramienta sp-apear sp-hide sp4">
					<img src="img/icons/tools/bootstrap.svg" alt="Bootstrap">
					<div class="info-oculta">
						<p class="p-top">Bootstrap</p>
						<p class="p-bot"><?= $tool7 ?></p>
					</div>
				</div>
				<div class="herramienta sp-apear sp-hide sp5">
					<img src="img/icons/tools/wordpress.svg" alt="Wordpress">
					<div class="info-oculta">
						<p class="p-top">Wordpress</p>
						<p class="p-bot"><?= $tool8 ?></p>
					</div>
				</div>
			</div>

			<!-- Diseño gráfico y prototipado -->
			<div class="herramientas sp-apear sp-hide mt8">
				<h4 class="mt8 mb5"><?= $tool9 ?></h4>
				<!-- Photoshop -->
				<div class="herramienta sp-apear sp-hide">
					<img src="img/icons/tools/photoshop.svg" alt="Photoshop">
					<div class="info-oculta">
						<p class="p-top">Photoshop</p>
						<p class="p-bot"><?= $tool10 ?></p>
					</div>
				</div>
				<!-- Illustrator -->
				<div class="herramienta sp-apear sp-hide sp2">
					<img src="img/icons/tools/illustrator.svg" alt="Illustrator">
					<div class="info-oculta">
						<p class="p-top">Illustrator</p>
						<p class="p-bot"><?= $tool11 ?></p>
					</div>
				</div>
				<!-- Indesign -->
				<div class="herramienta sp-apear sp-hide sp3">
					<img src="img/icons/tools/indesign.svg" alt="Indesign">
					<div class="info-oculta">
						<p class="p-top">Indesign</p>
						<p class="p-bot"><?= $tool12 ?></p>
					</div>
				</div>
				<!-- Adobe Xd -->
				<div class="herramienta sp-apear sp-hide sp4">
					<img src="img/icons/tools/adobe-xd.svg" alt="Adobe Xd">
					<div class="info-oculta">
						<p class="p-top">Adobe Xd</p>
						<p class="p-bot"><?= $tool13 ?></p>
					</div>
				</div>
				<!-- Sketch -->
				<div class="herramienta sp-apear sp-hide sp5">
					<img src="img/icons/tools/sketch.svg" alt="Sketch">
					<div class="info-oculta">
						<p class="p-top">Sketch</p>
						<p class="p-bot"><?= $tool14 ?></p>
					</div>
				</div>
			</div>

			<!-- Video, animación y ofimática -->
			<div class="herramientas sp-apear sp-hide mt8">
				<h4 class="mt8 mb5"><?= $tool15 ?></h4>
				<!-- Premiere -->
				<div class="herramienta sp-apear sp-hide">
					<img src="img/icons/tools/premiere.svg" alt="Premiere">
					<div class="info-oculta">
						<p class="p-top">Premiere</p>
						<p class="p-bot"><?= $tool16 ?></p>
					</div>
				</div>
				<!-- After Effects -->
				<div class="herramienta sp-apear sp-hide sp2">
					<img src="img/icons/tools/after-effects.svg" alt="After Effects">
					<div class="info-oculta">
						<p class="p-top">After Effects</p>
						<p class="p-bot"><?= $tool17 ?></p>
					</div>
				</div>
				<!-- Word -->
				<div class="herramienta sp-apear sp-hide sp3">
					<img src="img/icons/tools/word.svg" alt="Word">
					<div class="info-oculta">
						<p class="p-top">Word</p>
						<p class="p-bot"><?= $tool18 ?></p>
					</div>
				</div>
				<!-- Powerpoint -->
				<div class="herramienta sp-apear sp-hide sp4">
					<img src="img/icons/tools/powerpoint.svg" alt="Powerpoint">
					<div class="info-oculta">
						<p class="p-top">Powerpoint</p>
						<p class="p-bot"><?= $tool19 ?></p>
					</div>
				</div>

				<div class="herramienta sp-apear sp-hide sp5">
					<img src="img/icons/tools/excel.svg" alt="Excel">
					<div class="info-oculta">
						<p class="p-top">Excel</p>
						<p class="p-bot"><?= $tool20 ?></p>
					</div>
				</div>
			</div>

			<!-- Experiencia de usuario y sistemas operativos -->
			<div class="herramientas sp-apear sp-hide mt8 mb10">
				<h4 class="mt8 mb5"><?= $tool21 ?></h4>
				<!-- Hotjar -->
				<div class="herramienta sp-apear sp-hide">
					<img src="img/icons/tools/hotjar.svg" alt="Hotjar">
					<div class="info-oculta">
						<p class="p-top">Hotjar</p>
						<p class="p-bot"><?= $tool22 ?></p>
					</div>
				</div>
				<!-- Treejack -->
				<div class="herramienta sp-apear sp-hide sp2">
					<img src="img/icons/tools/treejack.svg" alt="Treejack">
					<div class="info-oculta">
						<p class="p-top">Treejack</p>
						<p class="p-bot"><?= $tool23 ?></p>
					</div>
				</div>
				<!-- Mural -->
				<div class="herramienta sp-apear sp-hide sp3">
					<img src="img/icons/tools/mural.svg" alt="Mural">
					<div class="info-oculta">
						<p class="p-top">Mural</p>
						<p class="p-bot"><?= $tool24 ?></p>
					</div>
				</div>
				<!-- Macintosh -->
				<div class="herramienta sp-apear sp-hide sp4">
					<img src="img/icons/tools/apple.svg" alt="Macintosh">
					<div class="info-oculta">
						<p class="p-top">Macintosh</p>
						<p class="p-bot"><?= $tool25 ?></p>
					</div>
				</div>
				<!-- Windows -->
				<div class="herramienta sp-apear sp-hide sp5">
					<img src="img/icons/tools/windows.svg" alt="Windows">
					<div class="info-oculta">
						<p class="p-top">Windows</p>
						<p class="p-bot"><?= $tool26 ?></p>
					</div>
				</div>
			</div>
		</div>

	</section>

<script>
	
    var URLsearch = window.location.search; 
    // alert(URLsearch);

	// CAMBIO DE IDIOMA
	if( URLsearch == '?leng=en'){
        $('#leng').css('display','none');
        $('#lspa').css('display','flex');
        // $('body').css('background','blue');
       
    }

    if( URLsearch == '?leng=es'){
        $('#lspa').css('display','none');
        $('#leng').css('display','flex');
        // $('body').css('background','red');
        // alert(URLsearch);
    }

</script>

	<?php include 'inc/footer.php'; ?>

	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

</body>

</html>