(function loadmapa()  {
    
    var center = new google.maps.LatLng(39.47849, -0.357264);
    
    var svOptions = {
	position: center,
    addressControl: false,
    linksControl: false,
    panControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    enableCloseButton: false
    };
    
    var sv = new google.maps.StreetViewPanorama(document.getElementById('mapastreet'),svOptions);


})()


/* MAPA FONDO */

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(39.47849, -0.357264),
          zoom: 15,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
   