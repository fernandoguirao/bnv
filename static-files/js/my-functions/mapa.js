// Generated by CoffeeScript 1.6.3
(function() {
  var initialize, loadmapa;

  initialize = function() {
    var map, mapOptions;
    mapOptions = {
      center: new google.maps.LatLng(39.47849, -0.357264),
      zoom: 15,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  };

  (loadmapa = function() {
    var center, sv, svOptions;
    center = new google.maps.LatLng(39.47849, -0.357264);
    svOptions = {
      position: center,
      addressControl: false,
      linksControl: false,
      panControl: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      enableCloseButton: false
    };
    return sv = new google.maps.StreetViewPanorama(document.getElementById("mapastreet"), svOptions);
  })();

  google.maps.event.addDomListener(window, "load", initialize);

}).call(this);
