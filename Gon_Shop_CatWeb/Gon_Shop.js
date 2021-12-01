$(function () {
	$(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
	    if(pos_body>20){
	        $('.navigation').addClass('fixed-menu');
	    }
	    else {
	        $('.navigation').removeClass('fixed-menu');
	    }
	    if(pos_body>1200){
	        $('.back-to-top').addClass('appear');
	    }
	    else{
	        $('.back-to-top').removeClass('appear');
	    }
	});
	$('.back-to-top').click(function(event) {
        $('html,body').animate({scrollTop: 0},1400);
   	});

	new WOW().init();
	$('.pro_1 a').fancybox({openEffect : 'elastic'});
});