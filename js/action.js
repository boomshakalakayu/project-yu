$(document).ready(function(e){

	// nav menu //

	$('.menu').click(function(e){
		$('#header').find('.nav').toggleClass('active');
	})

	$('.cart').click(function(){
		$('.cart-panel').addClass('show');
		$('.bg-cover').fadeIn();		
	})
	$('.bg-cover').click(function(){
		$('.cart-panel').removeClass('show');
		$('.bg-cover').fadeOut();
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