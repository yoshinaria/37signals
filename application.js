$(document).ready(function(){
  $(".Basecamp").hover(function(){
  		$(".defaultHeader").toggle(); 
      	$(".BasecampHeader").toggle();  
    	$("img.BaseArrow").toggle();
  });
  $(".Highrise").hover(function(){
  		$(".defaultHeader").toggle(); 
      	$(".HighriseHeader").toggle();  
    	$("img.HighArrow").toggle();
  });
  $(".Campfire").hover(function(){
  		$(".defaultHeader").toggle(); 
      	$(".CampfireHeader").toggle();  
    	$("img.CampArrow").toggle();
  });
 });