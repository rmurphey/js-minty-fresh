function selectedLocation() {
  var selected = document.getElementById("countyLocation").value;

  if (selected == "Ireland") {
    var Ireland = new google.maps.LatLng(53.527248, -8.327637);
    map.setCenter(Ireland);
    map.setZoom(6);
  }

  if (selected == "Clare") {
    var Clare = new google.maps.LatLng(52.988337, -9.102173);
    map.setCenter(Clare);
    map.setZoom(8);
  }

  if (selected == "Dublin") {
    var Dublin = new google.maps.LatLng(53.399707, -6.262207);
    map.setCenter(Dublin);
    map.setZoom(9);
  }
}