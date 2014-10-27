function getCoordinates (address, callback) {
  var geocoder = new google.maps.Geocoder();
  var coordinates;
  geocoder.geocode({ address: address}, function (results, status) {
    obj = results[0].geometry.location;
    coordinates= [obj.k, obj.B];
    callback(coordinates);
  })
}


function distance(lat1, lon1, lat2, lon2, unit) {
  var R = unit;
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a =
    0.5 - Math.cos(dLat)/2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    (1 - Math.cos(dLon))/2;

  return Math.round(R * 2 * Math.asin(Math.sqrt(a)));
}

function writeCoordinates(id1, id2, coordinates){
  $(id1).val(coordinates[0]);
  $(id2).val(coordinates[1]);
}

function calc(unit){
  var address1 = $("#city1").val();
  getCoordinates(address1, function(coordinates){writeCoordinates("#lat1", "#lon1", coordinates)});
  var address2 = $("#city2").val();
  getCoordinates(address2, function(coordinates){writeCoordinates("#lat2", "#lon2", coordinates)});
  $("#distance").val(convertToFloat(unit));
}

function convertToFloat(unit){
  var a = parseInt($("#lat1").val());
  var b = parseInt($("#lon1").val());
  var c = parseInt($("#lat2").val());
  var d = parseInt($("#lon2").val());
  return distance(a,b,c,d,unit);
}

