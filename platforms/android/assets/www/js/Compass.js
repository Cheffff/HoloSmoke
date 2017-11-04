/*
 * COMPASS API
*/

// Start Compass API
function startCompass() {
    var options = { frequency: 100 };
    watchCompassID = navigator.compass.watchHeading(onCompassSuccess, onCompassError, options);
}

// Stop Compass API
function stopCompass() {
    if (watchCompassID) {
        navigator.compass.clearWatch(watchCompassID);
        watchCompassID = null;
    }
}

// onSuccess: Get the current heading
function onCompassSuccess(heading) {
    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO', 'N'];
    var direction = directions[Math.abs(parseInt((heading.magneticHeading) / 45) + 1)];
    document.getElementById('compass').innerHTML = heading.magneticHeading + "<br>" + direction;
    document.getElementById('direction').innerHTML = direction;
    var degree = heading.magneticHeading;
    if ($("#arView").is(":visible") && dataStatus != "loading") {
        calculateDirection(degree);
    }
}

// onError: Failed to get the heading
function onCompassError(compassError) {
    alert("Compass initialization failed");
    document.getElementById('log').innerHTML += "onError=." + compassError.code;
}