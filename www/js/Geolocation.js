/*
 * GEOLOCATION API
*/

// Start Geolocation API
function startGeolocation() {
    var options = { timeout: 30000 };
    watchGeoID = navigator.geolocation.watchPosition(onGeoSuccess, onGeoError, options);
}

// Stop Geolocation API
function stopGeolocation() {
    if (watchGeoID) {
        navigator.geolocation.clearWatch(watchGeoID);
        watchGeoID = null;
    }
}

// onSuccess: Get the current location
function onGeoSuccess(position) {
    document.getElementById('geolocation').innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude;
    myLat = position.coords.latitude;
    myLng = position.coords.longitude;
    latlng = new google.maps.LatLng(myLat, myLng);
    cordova.plugin.pDialog.setProgress(60);

    range = 800;
    StartData(range);
}

// onError: Failed to get the location
function onGeoError() {
    document.getElementById('log').innerHTML += "onError=.";
}