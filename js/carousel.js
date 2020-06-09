$(document).ready(function(e){
	// workspace carousel

	$('.aboutSlide').slick({
		// autoplay: true,
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

	$('.productListSlide').slick({
		arrows: false,
	});

	$('.prev').click(function(){
		$(this).closest('.product-list').find('.productListSlide').slick('slickPrev');
	})

	$('.next').click(function(){
		$(this).closest('.product-list').find('.productListSlide').slick('slickNext');
	})

	// $('.feature .prev').click(function(){
	// 	$('.productListSlide').slick('slickPrev');
	// })

	// $('.feature .next').click(function(){
	// 	$('.productListSlide').slick('slickNext');
	// })
})	