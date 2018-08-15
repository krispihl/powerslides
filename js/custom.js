/* show hide menu*/

$(document).ready(function(){

'use strict';
	
	$(window).scroll(function(){

		'use strict';

		if($(window).scrollTop() < 80 ){
			$('.navbar').css({
				'margin-top': '-100px',
				'opacity': '0'
			});

			$('.navbar-light').css({
				'background-color': 'rgba(59, 59, 59, 0)'
			});
		} else {
			$('.navbar').css({
			'margin-top': '0px',
			'opacity': '1'
			});

			$('.navbar-light').css({
				'background-color': 'rgba(59, 59, 59, 0.7)',
				'border-color': '#444'
			});
		}

	});

});

/* smooth scrolling*/

$(document).ready(function(){

	'use strict';

	$('.nav-link, #scroll-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

/* active menu item on click*/

// $(document).ready(function() {

// 	'use strict';

// 	$('.navbar-nav li a').click(function(){

// 		'use strict';

// 		$('.navbar-nav li a').parent().removeClass("active");

// 		$(this).parent().addClass("active");

// 	});

// });

/* highlight menu on scroll */

// $(document).ready(function(){
// 	'use strict';
// 	$(window).scroll(function(){
// 		'use strict';
// 		$("section").each(function(){
// 			'use strict';

// 			var idee = $(this).attr("id");
// 			var hght = $(this).outerHeight();
// 			var ttop = $(this).offset().top - 70;

// 			if ($(window).scrollTop() > ttop && $(window).scrollTop < ttop +hght ) {
// 				$(".navbar-nav li a[href='#" + idee + "']").parent().addClass("active");
// 			} else {
// 				$(".navbar-nav li a[href='#" + idee + "']").parent().removeClass("active");
// 			}

// 		});
// 	});
// });

/* add bxslider to Other skates section*/

  $(document).ready(function(){
    $('.slider').bxSlider({

    	slideWidth: 350,
    	auto: true,
    	minSlides: 1,
    	maxSlides: 3,
    	slideMargin: 30
    });
  });

/* add counter*/

$(document).ready(function(){
	$('.counter-num').counterUp({
		delay: 10,
		time: 2000
	});
});

/* add animation, init Woo */

$(document).ready(function(){
	'use strict';
	new WOW().init();
});


