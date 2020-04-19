$(document).ready(function(e){

	$('#popup').fadeIn();
	$('#popup, #popup .close').click(function(){
		$('#popup').fadeOut();
	});

	// nav menu //

	$('.menu').click(function(e){
		$('#header').find('.nav').toggleClass('active');
	})

	$('.cart').click(function(){
		$('.cart-panel').addClass('show');
		$('.bg-cover').fadeIn();		
	})

	$('.bg-cover').click(function(e){
		e.stopPropagation();
		$('.cart-panel').removeClass('show');
		$('.bg-cover').fadeOut();
	})

	$('.search .nav-link').click(function(e){
		$('.search-panel').fadeToggle().find('.form-control').focus();
		$('body').toggleClass('hidden-scroll');
	})

	$('.dropdown-title').click(function(e){
		$(this).closest('div').siblings('ul').toggleClass('active');
	})

	// side bar menu //

	$('.filter-option').click(function(e){
		$('.filter').addClass('show');
		$('.bg-cover').fadeIn();
	})

	$('.categories-option').click(function(e){
		$('.categories').addClass('show');
		$('.bg-cover').fadeIn();
	})

	$('.close-menu').click(function(e){
		$('.filter, .categories').removeClass('show');
		$('.bg-cover').fadeOut();
	})

	$('.bg-cover').click(function(e){
		$('.close-menu').click();
	})
});