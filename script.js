$(document).ready(function(){

  // TODO: change the easing here to whatever more smooth. :) 
  $(".sexytabs").tabs({ 
    show: { effect: "slide", direction: "left", duration: 200, easing: "easeOutBack" } ,
    hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" } 
  });

});