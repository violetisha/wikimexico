$(function() {

	// slider
	$('#slider').slidesjs({
		width: 420,
		height: 237,
		navigation: false,
		play: {
					active: false,
					auto: true,
					interval: 2000,
					swap: true,
					pauseOnHover: true,
					restartDelay: 2500
				},
		pagination: false
	});

	//submenu
	$('#main-nav > ul li a').click(function() {
		$("#main-nav > ul li a").removeClass("activo");
		$(this).addClass("activo");
	});

});