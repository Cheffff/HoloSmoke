function toggleView() {
    if ($(".listView").is(":visible")) {
        $(".listView").hide();
        $(".SetupView").hide();
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
        $(".listView").hide();        
        $(".SetupView").fadeIn();
        $("#viewbtn").html("List");
    }
    else {
        $(".SetupView").hide();
        $(".mapView").hide();
        $(".listView").fadeIn();
        $("#viewbtn").html("Map");
    }
}

function radius() {
    var x = document.getElementById("range").value;
    range = Math.round(x);
}

function initRadius() {
    alert("Test");
    $("#range").after('<h3><center><output></output>m</center></h3>');
    $("#range").live('change', function () {
        var valof = $(this).val();
        $('output').text(valof);
    });
}
