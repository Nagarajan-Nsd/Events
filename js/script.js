(function($) {

    'use strict';




    /*START GOOGLE MAP*/
    function initialize() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: new google.maps.LatLng(40.7127837, -74.00594130000002)
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: 'assets/img/map_pin.png',
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);


    // Init Magnific Popup
    $('a.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $("[data-trigger]").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id =  $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
}); 

$(".btn-close, .screen-overlay").click(function(e){
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 




    $(document).ready(function() {


        /* ----------------------------------------------------------- */
        /*  Fixed header
        /* ----------------------------------------------------------- */



        // $(window).on('scroll', function() {
        //     if ($(window).scrollTop() > 70) {
        //         $('.transparent-black,.transparent-white').addClass('top-nav-collapse');
        //     } else {
        //         $('.transparent-black,.transparent-white').removeClass('top-nav-collapse');
        //     }
        // });


        // $('a.js-scroll').on('click', function(e) {
        //     var anchor = $(this);
        //     $('html, body').stop().animate({
        //         scrollTop: $(anchor.attr('href')).offset().top - 50
        //     }, 1000);
        //     e.preventDefault();
        // });


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


        //CountDown JS
        // $('.counter-item').syotimer({
        // 	year: 2019,
        // 	month: 5,
        // 	day: 9,
        // 	hour: 20,
        // 	minute: 30
        // });




        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.js-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        $('#contact-form').validate({
            rules: {
                user_name: {
                    required: true,
                    minlength: 4
                },
                user_email: {
                    required: true,
                    email: true
                },
                user_phone: {
                    required: true
                },
                user_message: {
                    required: true
                }
            },
            messages: {
                user_name: {
                    required: 'Come on, you have a name don\'t you?',
                    minlength: 'Your name must consist of at least 2 characters'
                },
                user_email: {
                    required: 'Please put your email address'
                },

                user_phone: {
                    required: 'Please put your Phone Number'
                },

                user_message: {
                    required: 'Put some messages here?',
                    minlength: 'Your name must consist of at least 2 characters'
                }

            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: 'POST',
                    data: $(form).serialize(),
                    url: 'sendmail.php',
                    success: function() {
                        $('#contact-form #success').fadeIn();
                    },
                    error: function() {

                        $('#contact-form #error').fadeIn();
                    }
                });
            }
        });









    });

})(jQuery);
