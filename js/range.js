$(document).ready(function(e){
	$('.slider-range').slider({
		range: true,
        min: 0,
        max: 800,
        values: [ 10, 599 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "Price $" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
	});

	$( "#amount" ).val( "Price $" + $( ".slider-range" ).slider( "values", 0 ) +
	      " - $" + $( ".slider-range" ).slider( "values", 1 ) )

})	