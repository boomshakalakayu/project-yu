$(document).ready(function(e){

	$('#popup').fadeIn();
	$('#popup, #popup .close').click(function(){
		$('#popup').fadeOut();
	});

	// nav menu //

	$('.menu').click(function(){
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

	$('.search .nav-link').click(function(){
		$('.search-panel').fadeToggle().find('.form-control').focus();
		$('body').toggleClass('hidden-scroll');
	})

	$('.dropdown-title').click(function(){
		$(this).closest('div').siblings('ul').toggleClass('active');
	})

	// side bar menu //

	$('.filter-option').click(function(){
		$('.filter').addClass('show');
		$('.bg-cover').fadeIn();
	})

	$('.categories-option').click(function(){
		$('.categories').addClass('show');
		$('.bg-cover').fadeIn();
	})

	$('.close-menu').click(function(){
		$('.filter, .categories').removeClass('show');
		$('.bg-cover').fadeOut();
	})

	$('.bg-cover').click(function(){
		$('.close-menu').click();
	})

	//button tap

	$('.cover button').click(function(){
		if ($(this).is('.heart')){
			$(this).children('i').toggleClass('icon-heart');
			$(this).toggleClass('btn-tap');
		}
		else {
			$(this).toggleClass('btn-tap');			
		}
	})

	//delete and cancel button

	$('.delete').on('click', function(){
		$(this).closest('li').remove();
	})

	$('.close-search').click(function(){
		$('.search-panel').fadeOut();
		$('body').toggleClass('hidden-scroll');
	})
});