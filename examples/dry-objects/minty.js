function selectedLocation() {
  var selected = document.getElementById( "countyLocation" ).value;

  var locations = {
    "Ireland" : {
      lat : 53.527248,
      lng : -8.327637,
      zoom : 6
    },
    "Clare" : {
      lat : 52.988337,
      lng : -9.102173,
      zoom : 8
    },
    "Dublin" : {
      lat : 53.399707,
      lng : -6.262207,
      zoom : 9
    }
  };

  var location = locations[ selected ];
  var center = new google.maps.LatLng( location.lat, location.lng );

  map.setCenter( center );
  map.setZoom( location.zoom );
}