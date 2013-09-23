(function ($) {

	$.fn.scrollTo = function (options) {
		var settings = $.extend({
			speed: 600,
			direction: 'data-to' //it is attr of tag where you add id or class of box scrolling to you need
		}, options);
		this.each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				var el = $($(this).attr(settings.direction));
				if (typeof el[0] != 'undefined') {
					var offset = el.offset().top;
					$('body, html').stop().animate({scrollTop: offset}, settings.speed);
				}//if
			});//click
		});//each
		return this;
	};//plugin

}(jQuery));