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

/*function StartData() {
    var request = { location: latlng, radius: '500', name: ['tabac'] };
    var service = new google.maps.places.PlacesService(map);
    service.search(request, callback);
}*/

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
    else
        alert("Google initialization failed");
}