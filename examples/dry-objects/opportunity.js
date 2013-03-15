$('#countyLocation').change(selectedLocation);

function selectedLocation () {
  var selected = $("#countyLocation").val();

  return $.get('/data/locations.json', function(locations) {
    var location = locations[selected];
    var center = new google.maps.LatLng(location.lat, location.lng);

    map.setCenter(center);
    map.setZoom(location.zoom);
  });
}

