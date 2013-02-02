/*	***************************************

jaxet 0.1
JQuery Plugin

Author: Matt Lantz
Purpose: An elegantly simple div content loader. 
For the most part, all it is, is a simple ajax-get 
function.
 
****************************************** */

(function($){  
    $.fn.jaxet = function(options) {  
      
    	var defaults = {  
       		url: ''
      	};  

      	var div = $(this).attr('id');
      
	  	var options = $.extend(defaults, options);  
		  
	  	$.ajax({
		  	url: options.url,
		  	success: function(data) {
		  		console.log("jaxet success");
		    	$('#'+div).html(data);
		  	}
		});
	};  

})(jQuery);  