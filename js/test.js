
$(function() {
	
	$('.openSidebar').toggle(
		function() {
			$('#content').animate({right: '30%'})
		}, function() {
			$('#content').animate({right:0})
	})

});
	

