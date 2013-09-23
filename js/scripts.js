(function ($) {
    "use strict";

    /* ======= CURRENT MENU ITEM ======= */

    var _height,
        pos,
        id_slide;

    $(document).scroll(function () {
        pos = $(this).scrollTop();
        $(".slide-menu").each(function () {
            id_slide = $(this).attr("id");
            _height = $(this).css("height");
            if ($(this).offset().top <= pos + 100) {
                $("#main_menu .menu li").removeAttr("id");
                $("#main_menu .menu li").find("a[href^='#" + id_slide + "']").parent().attr("id", "current_menu_item");
            }
        });
    });

    $(document).ready(function () {



        /* ======= BACK TO TOP ======= */

        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $('#backtop').css("opacity", 1);
            } else {
                $('#backtop').css("opacity", 0);
            }
        });

        $('#backtop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /* ======= MOBILE MENU ======= */

        $(".menu-mobile-button").click(function () {
            if ($("#mobile-menu").css("display") == "none") {
                $("#mobile-menu").slideDown(300);
            }
            else {
                $("#mobile-menu").slideUp(300);
            }
        });

        $("#mobile-menu ul li a").click(function () {
            $("#mobile-menu").css("display", "none");
        });

        /* ======= SCROLL ITEMS ======= */

        var height_menu = $("#main_menu").css("height");
        height_menu = parseInt(height_menu, 10);
        $('#main_menu #desktop-menu .scrolling-links').localScroll({offset: {top: -height_menu}, duration: 1000});
        $('#mobile-menu').localScroll({offset: {top: 0}, duration: 1000});
        $('.home_bottom_arrow').localScroll({offset: {top: 0}, duration: 1000});


        /* ======= PARALLAX ======= */

        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it"s outerHeight option to determine when a section is in the viewport

        $(".home_parallax").parallax("100%", 0.35);
        $(".content_box_parallax").parallax("100%", 0.2);
        $(".bg").parallax("100%", 0.4);
        $(".timeline_parallax").parallax("100%", 0.3);

        // $(".connections_parallax").parallax("100%", 1.3);
        $(".chico_parallax").parallax("100%", 0.6);
        $(".testimonials_parallax").parallax("100%", 0.5);
        $(".twitter_parallax").parallax("100%", 0.3);

        /* ======= STICKY MENU ======= */

        $(".sticky-menu").sticky({topSpacing: 0});


        /* ======= COUNTDOWN ======= */

//        $('.countto').appear(function () {
//			$(".number_container .number").each(function() {
//            $("html").each(function () {
//                var count_element = $(this).html();
//                $(this).countTo({
//                    from: 0,
//                    to: 100,
//                    speed: 2000,
//                    refreshInterval: 10
//                });
//            });
//        });

        /* ======= CLIENT CAROUSEL ======= */

        $(".client-carousel").flexisel({
            visibleItems: 5
        });


        /* ======= RESPONSIVE SLIDES ======= */

        $(function () {
            $(".rslides-testimonials").responsiveSlides({
                nav: true,
                auto: false,
                prevText: "<i class='icon-angle-left'></i>",
                nextText: "<i class='icon-angle-right'></i>",
                navContainer: ".testimonials-navi"
            });
        });


    });
})(jQuery);