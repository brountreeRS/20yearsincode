(function ($) {
    "use strict";
    var xhr;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "svg/places.svg", false);
    // Following line is just to be on the safe side;
    // not needed if your server delivers SVG with correct MIME type
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    document.getElementById("places-map").appendChild(xhr.responseXML.documentElement);
    xhr = new XMLHttpRequest();
    xhr.open("GET", "svg/random-charts.svg", false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    document.getElementById("random").appendChild(xhr.responseXML.documentElement);
    xhr = new XMLHttpRequest();
    xhr.open("GET", "svg/divorce.svg", false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    document.getElementById("divorce").appendChild(xhr.responseXML.documentElement);
    xhr = new XMLHttpRequest();
    xhr.open("GET", "svg/celeb-divorces.svg", false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    document.getElementById("celebs").appendChild(xhr.responseXML.documentElement);

    $(document).ready(function () {
        $(function(){
            var timeline = new VMM.Timeline();
            timeline.init("data/timeline2.json");
        });

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

        /* ======= SCROLL ITEMS ======= */
        var height_menu = $("nav").css("height");
        height_menu = parseInt(height_menu, 10);
        $('.scrolling-links').localScroll({offset: {top: -height_menu}, duration: 1000});
        $('.home_bottom_arrow').localScroll({offset: {top: 0}, duration: 1000});

        /* ======= PARALLAX ======= */
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it"s outerHeight option to determine when a section is in the viewport

        $(".home_parallax").parallax("100%", 0.35, true);
        $(".content_box_parallax").parallax("100%", 0.2, true);
        $(".timeline_parallax").parallax("100%", 0.3, true);
        $(".connections_parallax").parallax("100%", 0.2, true);
        $(".chico_parallax").parallax("100%", 0.6, true);
        $(".charts_parallax").parallax("100%", 0.5, true);
        $(".hugh_parallax").parallax("100%", 0.3, true);
        $(".info_parallax").parallax("0", 0.12, true);

        /* ======= STICKY MENU ======= */

        $(".sticky-menu").sticky({topSpacing: 0});

        /* ======= CLIENT CAROUSEL ======= */

        $(".client-carousel").flexisel({visibleItems: 5});

    });
})(jQuery);

var graph = {
    "nodes": [
        {"name": "Hugh Donagher", "group": 1 },
        {"name": "Family", "group": 2 },
        {"name": "San Diego", "group": 3 },
        {"name": "Mountain View", "group": 4 },
        {"name": "San Antonio", "group": 5 },
        {"name": "Mark Interrante", "group": 6 },
        {"name": "Gigi Geoffrion", "group": 6 },
        {"name": "Mary Walker", "group": 6 },
        {"name": "Brittney Ware", "group": 6},
        {"name": "Jason Anderson", "group": 6},
        {"name": "Ronee Anderson", "group": 6},
        {"name": "Michael Rosetti", "group": 6},
        {"name": "Olga Kucerak", "group": 6},
        {"name": "Adelle Williams", "group": 6},
        {"name": "Amy Cunningham Teten", "group": 6},
        {"name": "Lewis Sussman", "group": 6},
        {"name": "Bradley Toland", "group": 6},
        {"name": "Bret Piatt", "group": 6},
        {"name": "Barbara Donagher", "group": 2},
        {"name": "Mary Ann Donagher", "group": 2},
        {"name": "Mike Donagher", "group": 2},
        {"name": "Jessica Brand", "group": 2},
        {"name": "Kelly Donagher Klein", "group": 2},
        {"name": "Krista Donagher O'Shea", "group": 2},
        {"name": "John Donagher", "group": 2},
        {"name": "Kimberly Pinard", "group": 2},
        {"name": "Brian Rountree", "group": 2},
        {"name": "Chico", "group": 2},
        {"name": "Jeff Rountree", "group": 2},
        {"name": "Kay Cullen", "group": 2},
        {"name": "Craig Deutsch", "group": 3},
        {"name": "Charles Hoscowitz", "group": 3},
        {"name": "Ronald Plasied", "group": 3},
        {"name": "William Purves", "group": 3},
        {"name": "Don Schmidt", "group": 3},
        {"name": "Anna M. Davison", "group": 3},
        {"name": "Brian Bragg", "group": 3},
        {"name": "Liz Crooke", "group": 4},
        {"name": "Meredith Marine", "group": 4},
        {"name": "Ernie Hsiung", "group": 4},
        {"name": "Allen King", "group": 4},
        {"name": "Eric Childs", "group": 4},
        {"name": "John Kelly", "group": 4},
        {"name": "Liz Crooke", "group": 4},
        {"name": "Shelly King", "group": 4},
        {"name": "Amy Saunders", "group": 4},
        {"name": "Annette Cardwell", "group": 4},
        {"name": "Glen Campbell", "group": 4},
        {"name": "Cheri Gross", "group": 4},
        {"name": "Dave Beckett", "group": 4},
        {"name": "Dirk Ginader", "group": 4},
        {"name": "Cotta Nestler-Ginader", "group": 4},
        {"name": "Ken Wronkiewicz", "group": 4},
        {"name": "James Kittock", "group": 4},
        {"name": "Kathleen Podrasky", "group": 4},
        {"name": "Leslie Sommer", "group": 4},
        {"name": "Margaret Abe-Koga", "group": 4},
        {"name": "Brent Harrison", "group": 4},
        {"name": "Bob Torroid", "group": 4},
        {"name": "Caryl Cunningham Teten", "group": 5},
        {"name": "Cherise Alle", "group": 5},
        {"name": "Curtis Bowers", "group": 5},
        {"name": "Dina Toland", "group": 5},
        {"name": "Gloria Carey", "group": 5},
        {"name": "Jennifer Abad  ", "group": 5},
        {"name": "Jessica Owen Rose ", "group": 5},
        {"name": "Jessica Underbrink", "group": 5},
        {"name": "Jody Bailey Newman", "group": 5},
        {"name": "Julie Hooper Abad", "group": 5},
        {"name": "Krista Wagner Bowers", "group": 5},
        {"name": "Michael J Rossetti", "group": 5},
        {"name": "Naomi Neuburger", "group": 5}
    ],
    "links": [
        {"source": 1, "target": 0, "value": 1},
        {"source": 2, "target": 0, "value": 1},
        {"source": 3, "target": 0, "value": 1},
        {"source": 4, "target": 0, "value": 1},
        {"source": 5, "target": 4, "value": 1},
        {"source": 6, "target": 4, "value": 1},
        {"source": 7, "target": 4, "value": 1},
        {"source": 8, "target": 4, "value": 1},
        {"source": 8, "target": 4, "value": 1},
        {"source": 9, "target": 4, "value": 1},
        {"source": 10, "target": 4, "value": 1},
        {"source": 11, "target": 4, "value": 1},
        {"source": 12, "target": 4, "value": 1},
        {"source": 13, "target": 4, "value": 1},
        {"source": 14, "target": 4, "value": 1},
        {"source": 15, "target": 4, "value": 1},
        {"source": 16, "target": 4, "value": 1},
        {"source": 17, "target": 4, "value": 1},
        {"source": 18, "target": 1, "value": 1},
        {"source": 19, "target": 1, "value": 1},
        {"source": 20, "target": 1, "value": 1},
        {"source": 21, "target": 1, "value": 1},
        {"source": 22, "target": 1, "value": 1},
        {"source": 23, "target": 1, "value": 1},
        {"source": 24, "target": 1, "value": 1},
        {"source": 25, "target": 1, "value": 1},
        {"source": 26, "target": 1, "value": 1},
        {"source": 27, "target": 1, "value": 1},
        {"source": 28, "target": 1, "value": 1},
        {"source": 29, "target": 1, "value": 1},
        {"source": 30, "target": 2, "value": 1},
        {"source": 31, "target": 2, "value": 1},
        {"source": 32, "target": 2, "value": 1},
        {"source": 33, "target": 2, "value": 1},
        {"source": 34, "target": 2, "value": 1},
        {"source": 35, "target": 2, "value": 1},
        {"source": 36, "target": 2, "value": 1},
        {"source": 37, "target": 3, "value": 1},
        {"source": 38, "target": 3, "value": 1},
        {"source": 39, "target": 3, "value": 1},
        {"source": 40, "target": 3, "value": 1},
        {"source": 41, "target": 3, "value": 1},
        {"source": 42, "target": 3, "value": 1},
        {"source": 43, "target": 3, "value": 1},
        {"source": 44, "target": 3, "value": 1},
        {"source": 45, "target": 3, "value": 1},
        {"source": 46, "target": 3, "value": 1},
        {"source": 47, "target": 3, "value": 1},
        {"source": 48, "target": 3, "value": 1},
        {"source": 49, "target": 3, "value": 1},
        {"source": 50, "target": 3, "value": 1},
        {"source": 51, "target": 3, "value": 1},
        {"source": 52, "target": 3, "value": 1},
        {"source": 53, "target": 3, "value": 1},
        {"source": 54, "target": 3, "value": 1},
        {"source": 55, "target": 3, "value": 1},
        {"source": 56, "target": 3, "value": 1},
        {"source": 57, "target": 3, "value": 1},
        {"source": 58, "target": 3, "value": 1},
        {"source": 59, "target": 3, "value": 1},
        {"source": 60, "target": 4, "value": 1},
        {"source": 61, "target": 4, "value": 1},
        {"source": 62, "target": 4, "value": 1},
        {"source": 63, "target": 4, "value": 1},
        {"source": 64, "target": 4, "value": 1},
        {"source": 65, "target": 4, "value": 1},
        {"source": 66, "target": 4, "value": 1},
        {"source": 67, "target": 4, "value": 1},
        {"source": 68, "target": 4, "value": 1},
        {"source": 69, "target": 4, "value": 1},
        {"source": 70, "target": 4, "value": 1},
        {"source": 71, "target": 4, "value": 1},
        {"source": 5, "target": 2, "value": 10}
    ]
};
var width = 1000, height = 740;
var color = d3.scale.ordinal().range(["#e74c3c", "#2ecc71", "#f39c12", "#3498db", "#f1c40f"]);
var force = d3.layout.force()
    .charge(-470)
    .linkDistance(80)
    .size([width, height]);
var svg = d3.select("#force").append("svg")
    .attr("width", width)
    .attr("height", height);
var drawGraph = function (graph) {
    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();
    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function (d) {return d.value;});
    var gnodes = svg.selectAll('g.gnode')
        .data(graph.nodes)
        .enter()
        .append('g')
        .classed('gnode', true);
    var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", 14)
        .style("fill", function (d) {return color(d.group);})
        .style("stroke-width", function (d) {return Math.sqrt(d.value);})
        .call(force.drag);
    var labels = gnodes.append("text")
        .text(function (d) {return d.name;})
        .style('fill', "#f2f2f2");

    force.on("tick", function () {
        link.attr("x1", function (d) {return d.source.x;})
            .attr("y1", function (d) {return d.source.y;})
            .attr("x2", function (d) {return d.target.x;})
            .attr("y2", function (d) {return d.target.y;});
        gnodes.attr("transform", function (d) {return 'translate(' + [d.x, d.y] + ')';});
    });
};
drawGraph(graph);

document.body.classList.add('ready');