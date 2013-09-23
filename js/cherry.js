/*jshint nonstandard: true, browser: true, boss: true *//*global jQuery*/
(function (e) {
    "use strict";
    var t = e(document), n = e(window).width(), r = {Android: function () {
        return navigator.userAgent.match(/Android/i)
    }, BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    }, iPad: function () {
        return navigator.userAgent.match(/iPad/i)
    }, iPhone: function () {
        return navigator.userAgent.match(/iPhone|iPod/i)
    }, iOS: function () {
        return r.iPad() || r.iPhone()
    }, Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    }, Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    }, Mobile: function () {
        return!!(r.Android() || r.BlackBerry() || r.iOS() || r.Opera() || r.Windows())
    }, IE: function () {
        return e.browser.msie
    }, IE7: function () {
        return r.IE() && e.browser.version < 8
    }}, i = function (e, t) {
        for (var n in t)e = e.replace(new RegExp("{" + n + "}", "g"), t[n]);
        return e
    }, s = function () {
        var e = new google.maps.LatLng(50.860686, 4.367838), t = [
            {stylers: [
                {invert_lightness: !0},
                {hue: "#D61258"},
                {saturation: 0}
            ]}
        ], n = new google.maps.StyledMapType(t, {name: "Styled Map"}), r = {center: new google.maps.LatLng(50.861686, 4.367838), mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControl: !1, navigationControl: !0, navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL, mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]}, scrollwheel: !1, zoom: 16, zoomControl: !0, zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL}}, i = new google.maps.Map(document.getElementById("map_canvas"), r), s = new google.maps.MarkerImage("/assets/img/marker.png", new google.maps.Size(52, 55), new google.maps.Point(0, 0), new google.maps.Point(18, 70)), o = new google.maps.Marker({position: e, title: "Hello World!", map: i, icon: s}), u = '<div id="content"><div id="siteNotice"><h3 id="firstHeading" class="firstHeading">Cherry Pulp SPRL</h3><div id="bodyContent"><p><a href="http://www.google.com/maps?q=Rue+des+Palais+44,+Schaerbeek,+Belgique&hl=fr&sll=37.0625,-95.677068&sspn=48.555061,92.373047&oq=rue+des+palais+44&hnear=Rue+des+Palais+44,+Schaerbeek+1030+Schaerbeek,+Bruxelles,+Belgique&t=m&z=16" target="_blank">Rue des Palais 44, <br/>1030 Brussels, Belgium</a></p></div></div></div>', a = new google.maps.InfoWindow({content: u});
        i.mapTypes.set("map_style", n);
        i.setMapTypeId("map_style");
        o.setMap(i);
        google.maps.event.addListener(o, "click", function () {
            a.open(i, o)
        })
    };
    e(function () {
        n = e(window).width();
        e.fn.foundationAlerts ? t.foundationAlerts() : null;
        e.fn.foundationButtons ? t.foundationButtons() : null;
        e.fn.foundationAccordion ? t.foundationAccordion() : null;
        e.fn.foundationNavigation ? t.foundationNavigation() : null;
        e.fn.foundationTopBar ? t.foundationTopBar() : null;
        e.fn.foundationCustomForms ? t.foundationCustomForms() : null;
        e.fn.foundationMediaQueryViewer ? t.foundationMediaQueryViewer() : null;
        e.fn.foundationTabs ? t.foundationTabs({callback: e.foundation.customForms.appendCustomMarkup}) : null;
        e.fn.foundationTooltips ? t.foundationTooltips() : null;
        e.fn.foundationMagellan ? t.foundationMagellan() : null;
        e.fn.foundationClearing ? t.foundationClearing() : null;
        e.fn.placeholder ? e("input, textarea").placeholder() : null;
        e.supersized({slideshow: 0, autoplay: 1, start_slide: 1, stop_loop: 0, random: 0, slide_interval: 3e3, transition: 1, transition_speed: 1500, new_window: 1, pause_hover: 0, keyboard_nav: 1, performance: 1, image_protect: 1, min_width: 0, min_height: 0, vertical_center: 1, horizontal_center: 1, fit_always: 0, fit_portrait: 1, fit_landscape: 0, slide_links: 0, thumb_links: 0, thumbnail_navigation: 0, slides: [
            {image: "images/homepage-slideshow/1.jpg", title: ""}
        ], progress_bar: 1, mouse_scrub: 0});
        e(".parallax-one").css({marginTop: e(window).height()});
        e('a[rel^="prettyPhoto"]').prettyPhoto();
        var r = "helocrypu@".split(""), s = e('a[href^="#mailto"]');
        r = r[0] + r[1] + r[2] + r[2] + r[3] + r[9] + r[4] + r[0] + r[1] + r[5] + r[5] + r[6] + r[7] + r[8] + r[2] + r[7] + ".com";
        s.html(i(s.html(), {mailto: r})).attr("href", "mailto:" + r);
        e(window).resize(function () {
            n = e(window).width()
        });
        e(".QapTcha").QapTcha({disabledSubmit: !0, autoRevert: !0, autoSubmit: !1, PHPfile: "controllers/qaptcha.php"});
        e("#submit").on("click", function () {
            var t = e(this).closest("form"), n = e("input[name=name]"), r = e("input[name=email]"), i = e("input[name=phone]"), s = e("input[name=website]"), o = e("textarea[name=message]");
            if (n.val() == "") {
                n.addClass("hightlight");
                return!1
            }
            n.removeClass("hightlight");
            if (r.val() == "" || !/^[a-z0-9\._-]+@([a-z0-9][a-z0-9-]*[a-z0-9]\.)+([a-z]+\.)?([a-z]+)/i.test(r.val())) {
                r.addClass("hightlight");
                return!1
            }
            r.removeClass("hightlight");
            if (o.val() == "") {
                o.addClass("hightlight-message");
                return!1
            }
            o.removeClass("hightlight-message");
            var u = "name=" + n.val() + "&email=" + r.val() + "&phone=" + i.val() + "&website=" + s.val() + "&message=" + encodeURIComponent(o.val());
            e(".text").attr("disabled", "true");
            document.getElementById("submit").disabled = !0;
            e("#submit").text("Please Wait..");
            e.ajax({url: t.attr("action"), type: t.attr("method"), data: u, cache: !1, success: function (t) {
                console.log(t);
                if (t.result) {
                    e(".contact-form-div").fadeOut("slow");
                    e(".done").fadeIn("slow")
                } else alert("Sorry, unexpected error. Please try again later.")
            }});
            return!1
        });
        setTimeout(function () {
            e("#loading").fadeOut(800, function () {
                e(this).remove()
            })
        }, 2e3)
    });
    e(window).load(function () {
        n = e(window).width();
        r.Mobile() ? window.location.hash || setTimeout(function () {
            window.scrollTo(0, 1)
        }, 0) : s();
        if (n > 1024) {
            e(".parallax-one, .parallax-two, .parallax-three, .parallax-four, .parallax-five, .parallax-six").each(function () {
                e(this).parallax("50%", .5)
            });
            e("#contact-slider").orbit({fluid: "16x5", timer: !1, directionalNav: !1, bullets: !0, bulletThumbs: !0, bulletThumbLocation: ""})
        } else n > 765 && e("#contact-slider").orbit({fluid: "16x6", timer: !1, directionalNav: !1, bullets: !0, bulletThumbs: !0, bulletThumbLocation: ""})
    })
})(jQuery);