/*
 * CAMERA API
*/

//Start Ezar API
function startCamera() {
    ezar.initializeVideoOverlay(onCameraSuccess, onCameraError);
}

//Stop Ezar API
function stopCamera() {
    ezar.stop();
    alert("Stop Ezar");
}

// onSuccess: Start Camera
function onCameraSuccess() {
    ezar.getBackCamera().start();
}

// onError: Failed to start Camera
function onCameraError(cameraError) {
    alert("Camera initialization failed");
    document.getElementById('log').innerHTML += "onError." + cameraError.code;
}