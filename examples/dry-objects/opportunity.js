var selected = document.getElementById( "countyLocation" ).value;

$.getJSON( '/data/locations.json?q=' + selected, function( location ) {
  var center = new google.maps.LatLng( location.lat, location.lng );
  map.setCenter( center );
  map.setZoom( location.zoom );
});