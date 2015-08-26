"use strict";

function initMap() {
  var location_1 = new google.maps.LatLng(-12.1159736,-76.9787482);
  var location_2 = new google.maps.LatLng(-12.114026,-77.0419739);
  var center = new google.maps.LatLng(-12.1091448,-77.0088176);

  var mapOptions = {
    zoom: 13,
    center: center
  }

  var map = new google.maps.Map(document.getElementById("location"), mapOptions);

  var marker_1 = new google.maps.Marker({
      position: location_1,
      title:"Local 1",
      map: map
  });
  var marker_2 = new google.maps.Marker({
      position: location_2,
      title:"Local 2",
      map: map
  });

  var contentString_1 = "<b>Local 1</b><br/>Dirección";
  var contentString_2 = "<b>Local 2</b><br/>Dirección";
  var infowindow_1 = new google.maps.InfoWindow({
    content: contentString_1
  });
  var infowindow_2 = new google.maps.InfoWindow({
    content: contentString_2
  });

  infowindow_1.open(map, marker_1);
  infowindow_2.open(map, marker_2);
}

jQuery(document).ready(function($){
  // $(".product-fancybox").fancybox({
  //   helpers : {
  //     overlays : {
  //       css : {
  //         'background' : 'rgba(58, 42, 45, 0.95)'
  //       }
  //     }
  //   },
  //   maxWidth  : 800,
  //   maxHeight : 600,
  //   fitToView : false,
  //   width   : '70%',
  //   height    : '70%',
  //   autoSize  : false,
  //   closeClick  : false,
  //   openEffect  : 'none',
  //   closeEffect : 'none'
  // });
});
