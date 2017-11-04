cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device-orientation.CompassError",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.compass",
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.Acceleration",
        "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.accelerometer",
        "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-ezar-videooverlay.videoOverlay",
        "file": "plugins/cordova-plugin-ezar-videooverlay/www/videoOverlay.js",
        "pluginId": "cordova-plugin-ezar-videooverlay",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "cordova-plugin-ezar-videooverlay.camera",
        "file": "plugins/cordova-plugin-ezar-videooverlay/www/camera.js",
        "pluginId": "cordova-plugin-ezar-videooverlay",
        "clobbers": [
            "camera"
        ]
    },
    {
        "id": "cordova-plugin-ezar-snapshot.snapshot",
        "file": "plugins/cordova-plugin-ezar-snapshot/www/snapshot.js",
        "pluginId": "cordova-plugin-ezar-snapshot",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "cordova-plugin-googlemaps.BaseClass",
        "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.BaseArrayClass",
        "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.LatLng",
        "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.LatLngBounds",
        "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.VisibleRegion",
        "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Location",
        "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.CameraPosition",
        "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Polyline",
        "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Polygon",
        "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Marker",
        "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
        "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Circle",
        "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.TileOverlay",
        "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.GroundOverlay",
        "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Common",
        "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.encoding",
        "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.spherical",
        "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.poly",
        "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Geocoder",
        "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Map",
        "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.event",
        "file": "plugins/cordova-plugin-googlemaps/www/event.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.MapTypeId",
        "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.KmlOverlay",
        "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Environment",
        "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.MarkerCluster",
        "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Cluster",
        "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.geomodel",
        "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
        "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
        "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
            "plugin.google.maps"
        ]
    },
    {
        "id": "cordova-plugin-pdialog.PDialog",
        "file": "plugins/cordova-plugin-pdialog/www/plugins.PDialog.js",
        "pluginId": "cordova-plugin-pdialog",
        "clobbers": [
            "cordova.plugin.pDialog"
        ]
    },
    {
        "id": "cordova-plugin-progress.Progress",
        "file": "plugins/cordova-plugin-progress/www/progress.js",
        "pluginId": "cordova-plugin-progress",
        "clobbers": [
            "progress"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-device-orientation": "1.0.7",
    "cordova-plugin-device-motion": "1.2.5",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.3.0",
    "cordova-plugin-ezar-videooverlay": "1.0.0",
    "cordova-plugin-ezar-snapshot": "1.0.0",
    "cordova-plugin-googlemaps": "2.1.1",
    "cordova-plugin-pdialog": "2.0.1",
    "cordova-plugin-progress": "0.3.0"
};
// BOTTOM OF METADATA
});