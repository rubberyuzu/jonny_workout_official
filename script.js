
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 35.6895, lng: 139.6917}
  });
  var georssLayer = new google.maps.KmlLayer({
    url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
  });
  georssLayer.setMap(map);
}

$(document).ready(function(){

  // TODO: change the easing here to whatever more smooth. :) 
  $(".sexytabs").tabs({ 
    show: { effect: "slide", direction: "left", duration: 200, easing: "easeOutBack" } ,
    hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" } 
  });

});