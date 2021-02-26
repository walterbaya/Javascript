//Lo mejor es usar jQuery.fn.extend y declarar internamente el codigo deseado generando asi una funcion.

jQuery.fn.extend({
	//Creamos aquí dentro las funciones
	setBackground: function(color) {
		this.each(function(){
			jQuery(this).css("background-color", color);
		});
	}
})


jQuery.fn.extend({
	//Creamos aquí dentro las funciones
	setColor: function(color) {
		jQuery(this).css("color", color);
	}
})

/*
(function($){
	$.fn.extend({
		setBackground: function(color){
			$(this).each(function(){
				$(this).css("background-color", color)
			})
		}
	})
})

jQuery.fn.setBackground = function(color){
	this.each(function(){
		jQuery(this).css("background-color", "#ccc")
	})
}

*/
/*
jQuery.fn.extend({
	setBackground: function(options){
		defaults = {
			color: '#999',
			text: 'Visita codejobs.biz'
		}
		var options = $.extend({}, defaults, options);
		
		this.each(function(){
			jQuery(this).css("background-color", options.color)
			jQuery('h1').text(options.text);

		})
	}
})
*/