"use strict";

function initMap() {
  var location_1 = new google.maps.LatLng(-12.091729, -77.003827);
  var location_2 = new google.maps.LatLng(-12.090793,-77.058296);
  var location_3 = new google.maps.LatLng(-12.098075, -76.972316);
  var location_4 = new google.maps.LatLng(-12.098767, -77.057831);
  var location_5 = new google.maps.LatLng(-12.114796, -76.981396);
  var location_6 = new google.maps.LatLng(-12.115262, -77.046447);
  var center = new google.maps.LatLng(-12.1091448,-77.0088176);

  var mapOptions = {
    zoom: 13,
    center: center
  }

  var map = new google.maps.Map(document.getElementById("location"), mapOptions);

  var marker_1 = new google.maps.Marker({
      position: location_1,
      title:"Sede Principal",
      map: map
  });
  var marker_2 = new google.maps.Marker({
      position: location_2,
      title:"All Star Elite",
      map: map
  });
  var marker_3 = new google.maps.Marker({
      position: location_3,
      title:"All Star Elite",
      map: map
  });
  var marker_4 = new google.maps.Marker({
      position: location_4,
      title:"All Star Elite",
      map: map
  });
  var marker_5 = new google.maps.Marker({
      position: location_5,
      title:"Medical Alliance",
      map: map
  });
  var marker_6 = new google.maps.Marker({
      position: location_6,
      title:"Royalty",
      map: map
  });

  var contentString_1 = "<b>Sede Principal</b><br/>Morelli 344 San Borja";
  var contentString_2 = "<b>All Star Elite</b><br/>Juan de Aliaga 723 Magdalena";
  var contentString_3 = "<b>All Star Elite</b><br/>Av El Derby 250 - Edificio Capital. Oficina 1903 Surco ";
  var contentString_4 = "<b>All Star Elite</b><br/>Parque Acosta 161 San Isidro";
  var contentString_5 = "<b>Medical Alliance</b><br/>Monte flor 320 Chacarilla";
  var contentString_6 = "<b>Royalty</b><br/>Avenida del Ejército 612, Miraflores";

  var infowindow_1 = new google.maps.InfoWindow({
    content: contentString_1
  });
  var infowindow_2 = new google.maps.InfoWindow({
    content: contentString_2
  });
  var infowindow_3 = new google.maps.InfoWindow({
    content: contentString_3
  });
  var infowindow_4 = new google.maps.InfoWindow({
    content: contentString_4
  });
  var infowindow_5 = new google.maps.InfoWindow({
    content: contentString_5
  });
  var infowindow_6 = new google.maps.InfoWindow({
    content: contentString_6
  });

  marker_1.addListener('click', function() {
    infowindow_1.open(map, marker_1);
  });
  marker_2.addListener('click', function() {
    infowindow_2.open(map, marker_2);
  });
  marker_3.addListener('click', function() {
    infowindow_3.open(map, marker_3);
  });
  marker_4.addListener('click', function() {
    infowindow_4.open(map, marker_4);
  });
  marker_5.addListener('click', function() {
    infowindow_5.open(map, marker_5);
  });
  marker_6.addListener('click', function() {
    infowindow_6.open(map, marker_6);
  });
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

  $(".home-slider").nerveSlider({
    sliderWidth: "100%",
    sliderResizable: true,
    sliderHeightAdaptable: true,
    showTimer: false,
    showArrows: false,
    showDots: false
  });

    $("#contact-submit").on('click',function() {
    var $contact_form = $('#tta-contact');
    var fields = $contact_form.serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: fields,
      dataType: 'json',
      success: function(response) {

        if(response.status){
          $('#tta-contact input').val('');
        }

        $('#contact-response').empty().html(response.html);
      }
    });
    return false;
  });

});
