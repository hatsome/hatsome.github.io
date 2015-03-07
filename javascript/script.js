$(document).ready(function() {
	$('.work img').hover(function() {
	    $(this).fadeTo(200, 1);
	  }, function() {
	    $(this).fadeTo(200, 0);
	});


	$('#imgblock img').click(function() {
		$('.activeImg').not(this).removeClass('activeImg');

		$('#gallery img').attr('src', $(this).attr('src'));

		if ($(this).hasClass('activeImg') || $('#gallery').hasClass('hidden'))
		{
			$('#gallery').slideToggle();
			$('#gallery').toggleClass('hidden');
		}
		
		$(this).addClass('activeImg');
	});
});