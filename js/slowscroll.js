$(document).ready(function() {	
  $("#arrow_up").show();
  $("#arrow_down").show();
   
	mouse_over = null;	
	$("#arrow_up").mouseenter(function() {
    if (mouse_over === null) {
      	mouse_over = setInterval(function() {
        	var xpos = $(window).scrollTop() - 200;
        	$('html,body').scrollTo(0, xpos); 			
        }, 50);
    }
	});
		
	$("#arrow_up").mouseleave(function() {
		$('html,body').stop();
    clearTimeout(mouse_over);
    mouse_over = null;
	}); 
			
	$("#arrow_down").mouseenter(function(e) {
    if (mouse_over === null) {
		  mouse_over = setInterval(function() {
			  var xpos = $(window).scrollTop() + 200;
	      $('html,body').scrollTo(0, xpos); 		
			}, 50);
		}
	});
	
  $("#arrow_down").mouseleave(function() {
		$('html,body').stop();
    clearInterval(mouse_over);
    mouse_over = null;
	});  
});	  