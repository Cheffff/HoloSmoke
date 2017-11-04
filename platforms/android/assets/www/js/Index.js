function toggleView() {
    if ($(".listView").is(":visible")) {
        $(".listView").hide();
        $("#map").height($(window).height() - 60);
        $(".mapView").fadeIn(
            function () {
                google.maps.event.trigger(map, "resize");
                map.fitBounds(bounds);
            });
        $("#viewbtn").html("Setup");
    }
    else if ($(".mapView").is(":visible")) {
        $(".mapView").hide();
        $(".SetupView").fadeIn();
        $("#viewbtn").html("List");
    }
    else {
        $(".SetupView").hide();
        $(".listView").fadeIn();
        $("#viewbtn").html("Map");
    }
}