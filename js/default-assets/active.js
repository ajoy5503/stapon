(function ($) {
    'use strict';

    // Variables
    var $constrom_window = $(window);

    // Preloader Active Code
    $constrom_window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // ::  Sticky Header
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    // :: Client Slides Active Code
    if ($.fn.owlCarousel) {
        var topsellerSlider = $('.client-slider');
        topsellerSlider.owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 15,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // :: Partner Slides Active Code
    if ($.fn.owlCarousel) {
        var topsellerSlider = $('.partner-slider');
        topsellerSlider.owlCarousel({
            items: 6,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 15,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200:{
                    items:6
                }
            }
        });
    }

     // :: Screenshot Slides Active Code
     if ($.fn.owlCarousel) {
        var topsellerSlider = $('.screenshot-slider');
        topsellerSlider.owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 15,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // :: Scroll to Top

    let scrollButton = document.getElementById('scrollTopButton');
    let topdistance = 600;

    if (scrollButton) {
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
                scrollButton.classList.add('scrolltop-show');
                scrollButton.classList.remove('scrolltop-hide');
            } else {
                scrollButton.classList.add('scrolltop-hide');
                scrollButton.classList.remove('scrolltop-show');
            }
        });

        scrollButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
})(jQuery);