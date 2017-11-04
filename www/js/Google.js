/*
 * GOOGLE API
*/

// Setup Google Maps API
function setupMap() {
    $("#map").height($(window).height() - 60);
    var mapOptions = {
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        navigationControl: true,
        scrollwheel: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function StartData() {
    cordova.plugin.pDialog.setMessage('Loading Data...');
    var request = { location: latlng, radius: range, name: ['tabac'] };
    var service = new google.maps.places.PlacesService(map);
    service.search(request, callback);
}

function callback(results, status) {
    // Modification du tableau
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        pin = [];
        $(".listItems").html("");
        for (i = 0; i < results.length; i++) {
            //var place = result[i];
            var data = { "name": "" + results[i].name + "", "lat": "" + results[i].geometry.location.lat() + "", "lng": "" + results[i].geometry.location.lng() + "" };
            pin.push(data);
        }
        loadData();
        // Fermeture fenetre de chargement
        cordova.plugin.pDialog.dismiss();
    }
    //else
        //alert("Google Search initialization failed");
}

// get data from API and store in array, add to list view and create markers on map, calculate
function loadData() {
    dataStatus = "loading";
    markersArray = [];
    bounds = new google.maps.LatLngBounds();
    // add blue gps marker
    var icon = new google.maps.MarkerImage('http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png', new google.maps.Size(30, 28), new google.maps.Point(0, 0), new google.maps.Point(9, 28));
    var gpsMarker = new google.maps.Marker({ position: new google.maps.LatLng(myLat, myLng), map: map, title: "My Position", icon: icon });
    bounds.extend(new google.maps.LatLng(myLat, myLng));
    markersArray.push(gpsMarker);
    // add all location markers to map and list view and array
    for (var i = 0; i < pin.length; i++) {
        $(".listItems").append("<div class='item'>" + pin[i].name + "</div>");
        addMarker(i);
        relativePosition(i);
    }
    map.fitBounds(bounds);
    google.maps.event.trigger(map, "resize");
    dataStatus = "loaded";
}

// add marker to map and in array
function addMarker(i) {
    var marker = new google.maps.Marker({ position: new google.maps.LatLng(pin[i].lat, pin[i].lng), map: map, title: pin[i].name });
    bounds.extend(new google.maps.LatLng(pin[i].lat, pin[i].lng));
    markersArray.push(marker);
}

// clear all markers from map and array
function clearMarkers() {
    while (markersArray.length) {
        markersArray.pop().setMap(null);
    }
}

// calulate distance and bearing value for each of the points wrt gps lat/lng
function relativePosition(i) {
    var pinLat = pin[i].lat;
    var pinLng = pin[i].lng;
    var dLat = (myLat - pinLat) * Math.PI / 180;
    var dLon = (myLng - pinLng) * Math.PI / 180;
    var lat1 = pinLat * Math.PI / 180;
    var lat2 = myLat * Math.PI / 180;
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    bearing = Math.atan2(y, x) * 180 / Math.PI;
    bearing = bearing + 180;
    pin[i]['bearing'] = bearing;

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = 6371010 * c;
    pin[i]['distance'] = distance;
}

// calculate direction of points and display
function calculateDirection(degree) {
    var detected = 0;
    $("#spot").html("");
    for (var i = 0; i < pin.length; i++) {
        if (Math.abs(pin[i].bearing - degree) <= 20) {
            var away, fontSize, fontColor;
            // varry font size based on distance from gps location
            if (pin[i].distance > 1500) {
                away = Math.round(pin[i].distance);
                fontSize = "16";
                fontColor = "#ccc";
            } else if (pin[i].distance > 500) {
                away = Math.round(pin[i].distance);
                fontSize = "24";
                fontColor = "#ddd";
            } else {
                away = pin[i].distance.toFixed(2);
                fontSize = "30";
                fontColor = "#eee";
            }
            $("#spot").append('<div class="name" data-id="' + i + '" style="margin-left:' + (((pin[i].bearing - degree) * 5) + 50) + 'px;width:' + ($(window).width() - 100) + 'px;font-size:' + fontSize + 'px;color:' + fontColor + '">' + pin[i].name + '<div class="distance">' + away + ' mètre(s) de distance</div></div>');
            detected = 1;
        } else {
            if (!detected) {
                $("#spot").html("");
            }
        }
    }
}