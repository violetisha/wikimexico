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
		
		if($(this).hasClass('activo')){
			$(this).removeClass("activo");
		}
		else {
			$("#main-nav > ul > li > a").removeClass("activo");
			$(this).addClass("activo");
		}
		// fix brinco en menu
		$("#main-nav").css("position", "absolute")
	});

	// fix brinco en menu
	$('.close-menu').click(function() {
		
		$("#main-nav").css("position", "fixed")
	});

	

});

$(window).load(function(){
	var alto;
	// alto minimo
	alto = $(".page-wrap").height()
	$("#main-nav").css("min-height", alto)
});

$(window).resize(function() {
	var alto;
	// alto minimo
	alto = $(".page-wrap").height()
	$("#main-nav").css("min-height", alto)
});