(function ($) {

	$.fn.scrollTo = function (options) {
		var settings = $.extend({
			speed: 600,
			direction: 'data-to', //it is attr of tag where you add id or class of box scrolling to you need
			currentClass: 'active',
			holderClass: 'scrollLink'
		}, options);
		
		//add active state after page refresh
		if (! location.hash) {			
			$("." + settings.holderClass).first().addClass(settings.currentClass);
		};
		$('a[href^="'+ location.hash +'"]').addClass(settings.currentClass);
		
		this.each(function () {
			$(this).on('click', function (e) {
				var el = $($(this).attr(settings.direction));
				$("." + settings.currentClass).removeClass();//remove active class
				if (typeof el[0] != 'undefined') {
					var offset = el.offset().top;
					$('body, html').stop().animate({scrollTop: offset}, settings.speed);
					$(this).addClass(settings.currentClass);//add active class					
				}//if
			});//click
		});//each
		return this;
	};//plugin

}(jQuery));