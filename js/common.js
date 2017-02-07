$(document).ready(function() {
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});
	/*
	// ScrollTo
	$('.navbar-collapse a').mPageScroll2id();
	*/


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});



	/*
	//slick carousel
	$('.photo_carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.photo_carousel_for',
		focusOnSelect: true,
		appendDots: '.review .nav_slider',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
			}
		]
	});*/
	/*
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	*/

	/*
	//video player + button
	$('#mainVideo').click(function(){
		if (this.paused) {
			this.play();
			$('#videoButton').fadeOut('fast');
		} else {
			$('#videoButton').fadeIn('fast');
			this.pause();
		}
	});
	$('#videoButton').on('click', function(event) {
		event.preventDefault();
		$('#videoButton').fadeOut('fast');
		$('#mainVideo').get(0).play();
	});
	*/

	/*
	//validation
	$('#').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});

	*/


});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/