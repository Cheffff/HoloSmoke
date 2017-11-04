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
    cordova.plugin.pDialog.setProgress(60);

    cordova.plugin.pDialog.setMessage('Loading Data...');
    var latlng = new google.maps.LatLng(myLat, myLng);
    var request = {
        location: latlng,
        radius: '500',
        name: ['tabac']
    };
    var service = new google.maps.places.PlacesService(map);
    service.search(request, callback);
}

// onError: Failed to get the location
function onGeoError() {
    document.getElementById('log').innerHTML += "onError=.";
}