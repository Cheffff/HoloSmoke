/*
 * ACCELEROMETER API
*/

// Start Accelerometer API
function startAccelerometer() {
    var options = { frequency: 100 };
    watchAccelerometerID = navigator.accelerometer.watchAcceleration(onAccelerometerSuccess, onAccelerometerError, options);
}

// Stop Accelerometer API
function stopAccelerometer() {
    if (watchAccelerometerID) {
        navigator.accelerometer.clearWatch(watchAccelerometerID);
        watchAccelerometerID = null;
    }
}

// onSuccess: Get current accelerometer values
function onAccelerometerSuccess(acceleration) {
    // for debug purpose to print out accelerometer values
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
        'Acceleration Y: ' + acceleration.y + '<br />' +
        'Acceleration Z: ' + acceleration.z;
    if (acceleration.y > 7) {
        $("#arView").fadeIn();
        $("#topView").hide();
        // document.getElementById('body').style.background = "#d22";
        document.getElementById('body').style.background = "transparent";
    } else {
        $("#arView").hide();
        $("#topView").fadeIn();
        document.getElementById('body').style.background = "#fff";
    }
}

// onError: Failed to get the acceleration
function onAccelerometerError(accelerometerError) {
    alert("Accelerometer initialization failed");
    document.getElementById('log').innerHTML += "onError." + accelerometerError.code;
}