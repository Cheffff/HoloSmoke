/*
 * SNAPSHOT API
*/

//Event Snapshot
function doSnapshot() {
    //hide snapbtn so it will not be in snapshot image
    document.getElementById("snapbtn").style.display = "none";

    //give dom chance to hide snapbtn before image capture
    setTimeout(Snapshot, 10);
}

// Take Snapshot
function Snapshot() {
    ezar.snapshot(onSnapshotSuccess, onSnapshotError, { "saveToPhotoAlbum": true });
}

// onSuccess: Get Snapshot
function onSnapshotSuccess(data) {
    alert("Snapshot complete.\nSee Gallery for image");
    document.getElementById("snapbtn").style.display = "block";
}

// onError: Failed to get Snapshot
function onSnapshotError(err) {
    alert("Error: " + err);
    document.getElementById("snapbtn").style.display = "block";
}