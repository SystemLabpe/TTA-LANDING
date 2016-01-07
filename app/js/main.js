"use strict";

var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       100,
    mobile:       true,
    live:         true
  }
);
wow.init();

function initMap() {
  var location_1 = new google.maps.LatLng(-12.091729, -77.003827);
  var location_2 = new google.maps.LatLng(-12.090793,-77.058296);
  var location_3 = new google.maps.LatLng(-12.098075, -76.972316);
  var location_4 = new google.maps.LatLng(-12.098767, -77.057831);
  var location_5 = new google.maps.LatLng(-12.114796, -76.981396);
  var location_6 = new google.maps.LatLng(-12.115262, -77.046447);
  var location_7 = new google.maps.LatLng(-12.098191, -76.975378);
  var center = new google.maps.LatLng(-12.0999736,-77.0144617);

  var mapOptions = {
    zoom: 12,
    center: center
  };

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
  var marker_7 = new google.maps.Marker({
      position: location_7,
      title:"Sede Jockey Club",
      map: map
  });

  var contentString_1 = "<b>Sede Principal</b><br/>Morelli 344 San Borja";
  var contentString_2 = "<b>All Star Elite</b><br/>Juan de Aliaga 723 Magdalena";
  var contentString_3 = "<b>All Star Elite</b><br/>Av El Derby 250 - Edificio Capital. Oficina 1903 Surco ";
  var contentString_4 = "<b>All Star Elite</b><br/>Parque Acosta 161 San Isidro";
  var contentString_5 = "<b>Medical Alliance</b><br/>Monte flor 320 Chacarilla";
  var contentString_6 = "<b>Royalty</b><br/>Avenida del Ejército 612, Miraflores";
  var contentString_7 = "<b>Sede Jockey Club</b><br/>Gimnasio VO2 ingreso puerta 4 a la derecha";

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
  var infowindow_7 = new google.maps.InfoWindow({
    content: contentString_7
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
  marker_7.addListener('click', function() {
    infowindow_7.open(map, marker_7);
  });
}

jQuery(document).ready(function($){

  $(".home-slider").nerveSlider({
    sliderWidth: "100%",
    sliderResizable: true,
    sliderHeightAdaptable: true,
    showTimer: false,
    showArrows: false,
    showDots: false
  });

  var secondaryNav = $('.tta-nav'),
  secondaryNavTopPosition = secondaryNav.offset().top,
  contentSections = $('.tta-section');

  $(window).on('scroll', function(){
    if($(window).scrollTop() > secondaryNavTopPosition ) {
      secondaryNav.addClass('is-fixed');
      console.log('entro');
      setTimeout(function() {
        $('#logo-header').addClass('slide-in');
        secondaryNav.addClass('animate-children');
      }, 50);
    } else {
      secondaryNav.removeClass('is-fixed');
      setTimeout(function() {
        secondaryNav.removeClass('animate-children');
        $('#logo-header').removeClass('slide-in');
      }, 50);
    }
    updateSecondaryNavigation();
  });

  function updateSecondaryNavigation() {
    contentSections.each(function(){
      var actual = $(this),
      actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
      actualAnchor = secondaryNav.find('a[href="#'+actual.attr('id')+'"]');
      if ( ( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - secondaryNav.height() > $(window).scrollTop() ) ) {
        actualAnchor.addClass('active');
      }else {
        actualAnchor.removeClass('active');
      }
    });
  }

  $('.tta-nav-trigger').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('menu-is-open');
    secondaryNav.find('ul').toggleClass('is-visible');
  });

  //smooth scrolling when clicking on the secondary navigation items
  secondaryNav.find('ul a').on('click', function(event){
    event.preventDefault();
    var target= $(this.hash);
    $('body,html').animate({
      'scrollTop': target.offset().top - secondaryNav.height() + 1
    }, 400
    );
    //on mobile - close secondary navigation
    $('.tta-nav-trigger').removeClass('menu-is-open');
    secondaryNav.find('ul').removeClass('is-visible');
  });

  $('#logo-header').find('a').on('click', function(event){
   event.preventDefault();
   var target= $(this.hash);
   $('body,html').animate({
    'scrollTop': target.offset().top - secondaryNav.height() + 1
   },400);
  });

  //on mobile - open/close primary navigation clicking/tapping the menu icon
  $('.cd-primary-nav').on('click', function(event){
    if($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
  });

  $(".video-fancybox").fancybox();
  $(".fancybox").fancybox({
    padding    : 0,
    margin     : 5,
    autoCenter : false,
    afterLoad  : function () {
      $.extend(this, {
          aspectRatio : false,
          type    : 'html',
          width   : '100%',
          height  : '100%',
          content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
      });
    }
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
