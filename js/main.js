$(document).ready(function(){


			$('.owl-carousel').owlCarousel({
					items:1, /* К-во картинок, выводящихся на экран, в слайдере*/
				    loop:true,/*цыкличность слайдеров*/
				    dots: false,
				    nav: true,
				    navSpeed:1000,
				    // autoplay: true/*автоматическое переключение слайдеров*/
				});

			$('.navbar-toggle').on('click', function() {
				$(this).toggleClass('active');

				$('.navbar-collapse').slideToggle('fast', function(){
					$('.navbar-collapse').removeAttr('style').toggleClass('show');
				});
				// $('.navbar-collapse').toggleClass('show');
			});

});