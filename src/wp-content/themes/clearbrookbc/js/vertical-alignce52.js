(function($) {
	//$(document).ready(verticalCenter);
	//$(window).resize(verticalCenter);
	
	function verticalCenter() {
		$('.vertical-center-xs, .vertical-center-sm, .vertical-center-md, .vertical-center-lg').each(function(i, e) {
			$(e).css('margin-top', '0');
		});
		
		$('.vertical-center-xs').each(function(i, e) {
			var parentHeight = $(e).parent().height();
			var elementHeight = $(e).height();
			$(e).css('margin-top', (parentHeight - elementHeight) / 2);
		});
		if(window.innerWidth >= 768) {
			$('.vertical-center-sm').each(function(i, e) {
				var parentHeight = $(e).parent().height();
				var elementHeight = $(e).height();
				$(e).css('margin-top', (parentHeight - elementHeight) / 2);
			});
		}
		if(window.innerWidth >= 992) {
			$('.vertical-center-md').each(function(i, e) {
				var parentHeight = $(e).parent().height();
				var elementHeight = $(e).height();
				$(e).css('margin-top', (parentHeight - elementHeight) / 2);
			});
		}
		if(window.innerWidth >= 1200) {
			$('.vertical-center-lg').each(function(i, e) {
				var parentHeight = $(e).parent().height();
				var elementHeight = $(e).height();
				$(e).css('margin-top', (parentHeight - elementHeight) / 2);
			});
		}
	}
})(jQuery);