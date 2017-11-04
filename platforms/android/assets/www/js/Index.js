function toggleView() {
    if ($(".listView").is(":visible")) {
        $(".listView").hide();
        $("#map").height($(window).height() - 60);
        $(".mapView").fadeIn(
            function () {
                google.maps.event.trigger(map, "resize");
                map.fitBounds(bounds);
            });
        $("#viewbtn").html("List");
    } else {
        $(".mapView").hide();
        $(".listView").fadeIn();
        $("#viewbtn").html("Map");
    }
}