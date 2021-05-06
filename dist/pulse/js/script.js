$(document).ready(function() {
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide (item){
		$(item).each(function(i) {
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
	
		}); 
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');


	//modal

	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});


	//Validation
	function valideForms (form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 3
				},
				email: {
					required: true,
					email: true
				  },
				phone: "required"
			},
			messages: {
				name: {
					required: "Введите пожалуйста имя",
					minlength: jQuery.validator.format('введите минимум {0} символа')
				},
				email: "Введите email",
				phone: "Телефон тоже введите"
			}
		});
	}
	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');


	$('input[name=phone]').mask("+48 (999) 999-999");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();


			$("form").trigger("reset");
		});
		return false;
	});


	//Smooth scroll (pageup)

	$(window).scroll(function() {
		if($(this).scrollTop() > 1600) {
			$('.pageUp').fadeIn();
		} else {
			$('.pageUp').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
	
	new WOW().init();
});


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: true,
	navPosition: 'bottom',	
    controls: false,
  });

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
  });
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
  });