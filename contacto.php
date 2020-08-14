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
					<a id="open-contact" href="contacto.php<?= $ext ?>" class="activee"><?= $menu4 ?></a>
				</li>

			</ul>
			<a id="lspa" href="<?= rtrim($url, "?leng=$lg") ?>?leng=es">ESP</a>

			<a id="leng" href="<?= rtrim($url, "?leng=$lg") ?>?leng=en">ENG</a>
		</nav>
	</header>


	<?php include 'inc/cargando.php'; ?>

	<!-- --------------------------------------------------------------------------------
CONTACTO
-------------------------------------------------------------------------------- -->

	<section id="contacto">

		<div class="titular col-12 mb8 sp-apear sp-hide">
			<h2 class="sp-hide sp2"><?= $cont1 ?></h2>
			<div class="separador bk-azul sp-hide sp3"></div>
			<h3 class="sp-hide sp4"><?= $cont2 ?></h3>
		</div>

		<?php
		//MENSAJE DE CONFIRMACIÓN
		$sms = "";
		if (isset($_GET['si'])) {
			$sms = "<h3 style='color: #39b54a';>Email enviado correctamente, nos pondremos pronto en contacto con usted.</h3><hr><h4>En caso de no recibir un mensaje de contestación por mi parte en pocos días, por favor contacte conmigo usando el teléfono 690 766 583 o al correo andressanzgonzalez.asg@gmail.com</h4>";
		}

		if (isset($_GET['no'])) {
			$sms = "<h3 style='color: red';>Error al enviar el email, intentelo de nuevo por favor.</h3><br><hr><br><h4>Si el problema persiste, revise si su conexión a internet funciona correctamente o contacte conmigo usando el teléfono 690 766 583 o al correo andressanzgonzalez.asg@gmail.com</h4>";
		}
		?>

		<div class="mensaje" id="ancla-mail"><?= $sms ?>
			<img src="img/icons/close.svg" alt="Close" class="close">
		</div>

		<div class="contact-container" class="sp-apear sp-hide">

			<form id="form" action="inc/mail.php" method="post" class="sp-apear">
				<p class="sp-hide sp2"><?= $cont3 ?></p>
				<p class="sp-hide sp3"><?= $cont4 ?></p>

				<div class="box-input1 sp-input sp-hide sp3">
					<label for="nombre"><?= $cont5 ?></label>
					<input type="text" name="nombre" required>
				</div>

				<div class="box-input1 sp-input sp-hide sp4">
					<label for="email"><?= $cont6 ?></label>
					<input type="email" name="email" required>
				</div>

				<div class="box-input2 sp-input sp-hide sp5">
					<label for="telefono"><?= $cont7 ?></label>
					<input type="tel" name="telefono">
				</div>

				<div class="sp-textarea box-input2 sp-hide sp6">
					<label for="mensaje"><?= $cont8 ?></label>
					<textarea name="mensaje" cols="30" rows="10"></textarea>
				</div>


				<input type="submit" value="<?= $cont9 ?>" class="sp-hide sp7">
			</form>

			<div class="datos-contacto-box sp-apear sp-hide">
				<ul>
					<!-- Email -->
					<li class="sp-hide sp2">
						<a href="mailto:Andressanzgonzalez.asg@gmail.com">
							<img src="img/icons/icon-email.svg" alt="Email">
							<p>Andressanzgonzalez.asg@gmail.com</p>
						</a>
					</li>

					<!-- Descargar Curriculum -->
					<li class="sp-hide sp3">
						<a id="show-cv-modal" href="#">
							<img src="img/icons/icon-cv.svg" alt="Cv">
							<p><?= $cont10 ?></p>
						</a>
					</li>

					<!-- Telefono -->
					<li class="sp-hide sp4">
						<a href="tel:+34 690766 583" target="_blank">
							<img src="img/icons/icon-telf.svg" alt="Teléfono">
							<p>+34 690 766 583</p>
						</a>
					</li>

					<!-- Facebook -->
					<li class="sp-hide sp5">
						<a href="https://www.facebook.com/AndresSanzGonzalez.ASG/" target="_blank">
							<img src="img/icons/icon-face.svg" alt="Facebook">
							<p>Facebook</p>
						</a>
					</li>

					<!-- Instagram -->
					<li class="sp-hide sp6">
						<a href="https://www.instagram.com/creativo_multidisplinar/" target="_blank">
							<img src="img/icons/icon-inst.svg" alt="Instagram">
							<p>Instagram</p>
						</a>
					</li>

					<!-- Linkedin -->
					<li class="sp-hide sp7">
						<a href="https://www.linkedin.com/in/andres-sanz/" target="_blank">
							<img src="img/icons/icon-link.svg" alt="Linkedin">
							<p>Linkedin</p>
						</a>
					</li>

				</ul>
			</div>


		</div>

		<div class="cv-shadow"></div>
		<div id="cv-modal">
			<h2><?= $cont11 ?></h2>

			<img class="close" src="img/icons/close.svg" alt="Close">

			<div class="cv-table">
				<div class="cv-vert">
					<div class="cv-hor empty"></div>
					<div class="cv-hor cv-tit-left"><?= $cont12 ?></div>
					<div class="cv-hor cv-tit-left"><?= $cont13 ?></div>
				</div>
				<div class="cv-vert">
					<div class="cv-hor cv-title"><?= $cont ?></div>
					<div class="cv-hor">
						<a href="img/cv-andres_ESP-2020.pdf" target="_blank" class="cv-button">CV ESP-A4</a>
					</div>
					<div class="cv-hor cv-button">
						<a href="img/cv-andres_ESP_Movil.pdf" target="_blank" class="cv-button">CV ESP-Screen</a>
					</div>
				</div>
				<div class="cv-vert">
					<div class="cv-hor cv-title"><?= $cont ?></div>
					<div class="cv-hor">
						<a href="img/cv-andres_ENG.pdf" target="_blank" class="cv-button">
							CV ENG-A4
						</a>

					</div>
					<div class="cv-hor">
						<a href="img/cv-andres_ENG_Movil.pdf" target="_blank" class="cv-button">
							CV ENG-Screen
						</a>

					</div>
				</div>
			</div>
		</div>
	</section>

	<?php include 'inc/footer.php'; ?>

	<script>
		// Modal contacto

		$('#show-cv-modal').click(function() {
			$('.cv-shadow, #cv-modal').fadeIn(500);
		})
		$('.cv-shadow, #cv-modal .close').click(function() {
			$('.cv-shadow, #cv-modal').fadeOut(500);
		})


		var URLsearch = window.location.search;
		// alert(URLsearch);

		// CAMBIO DE IDIOMA
		if (URLsearch == '?leng=en') {
			$('#leng').css('display', 'none');
			$('#lspa').css('display', 'flex');
			// $('body').css('background','blue');

		}

		if (URLsearch == '?leng=es') {
			$('#lspa').css('display', 'none');
			$('#leng').css('display', 'flex');
			// $('body').css('background','red');
			// alert(URLsearch);
		}
	</script>


	<script>
		document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
	</script>
</body>

</html>