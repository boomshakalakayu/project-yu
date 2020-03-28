$(document).ready(function(e){
	// workspace carousel

	$('.aboutSlide').slick({
		autoplay: true,
		dots: true,
	});

	// product carousel

	$('.product-slide').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    asNavFor: '.product-nav'
	});
	$('.product-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-slide',
		centerMode: true,
		focusOnSelect: true
	})
})	