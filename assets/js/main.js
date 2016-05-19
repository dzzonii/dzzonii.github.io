$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

		// INPUTS EVENTS
		$(".input_1 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_1 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});
	
		//THUMBNAIL ONCLICK CHANGES MAC BG
		$(".thumbnails a").on("click", function () {
			var imglink = $(this).find("img").attr("dir");
		$(".viewport").css("background-image", "url("+ imglink +")");
		$('html, body').animate({
				scrollTop: $("#main").offset().top
		}, 2000);
		});

});