$(document).ready(function(e){

	// nav menu //

	$('.menu').click(function(e){
		$('#header').find('.nav').toggleClass('active');
	})

	// slider range bar //

	$('.slider-range').slider({
		range: true,
        min: 0,
        max: 800,
        values: [ 10, 599 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "Price $" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
	})

	$( "#amount" ).val( "Price $" + $( ".slider-range" ).slider( "values", 0 ) +
	      " - $" + $( ".slider-range" ).slider( "values", 1 ) )

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