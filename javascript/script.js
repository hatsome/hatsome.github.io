$(document).ready(function() {
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