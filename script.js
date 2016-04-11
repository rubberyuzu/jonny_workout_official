
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
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

 // variable to hold request
  var request;
  // bind to the submit event of our form
  $("#foo").submit(function(event){
    // abort any pending request
    if (request) {
      request.abort();
    }
    // setup some local variables
    var $form = $(this);
    // let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    // serialize the data in the form
    var serializedData = $form.serialize();
    // let's disable the inputs for the duration of the ajax request
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);
    $('#result').text('Sending data...');
    // fire off the request to /form.php
    request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwZNOvYYxSmCJPR6a3OVLquym3e1tRhpCLgwZwYYxVw9CnGOKc/exec",
      type: "post",
      data: serializedData
    });
    // callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
      // log a message to the console
      console.log(response, textStatus, jqXHR);
      $('#result').html('<a href="https://docs.google.com/spreadsheets/d/1A9P0aQ0CCu4MHVRb-Kt0qBRQ8NkREPOH9biHxD6kIn4/edit#gid=406008481" target="_blank">Success - see Google Sheet</a>');
      console.log("Hooray, it worked!");
    });
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
      // log the error to the console
      console.error(
        "The following error occured: "+
        textStatus, errorThrown
      );
    });
    // callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
      // reenable the inputs
      $inputs.prop("disabled", false);
    });
    // prevent default posting of form
    event.preventDefault();
  });

});