//(function () {
//
//    var width = 970,
//        height = 800,
//        mugDiameter = 40,
//        mugSize = 80;
//
//    var bounds = d3.geom.polygon([
//        [0, 0],
//        [0, height],
//        [width, height],
//        [width, 0]
//    ]);
//
//    var awardType = {
//        "Friend": "friend",
//        "San Antonio": "sat",
//        "Best Supporting Actor": "actor",
//        "Best Supporting Actress": "actor",
//        "Family": "family",
//        "Lions": "lion"
//    };
//
//    var awardRank = {
//        "Best Picture": 1,
//        "Best Director": 2,
//        "Best Actor": 3,
//        "Best Actress": 3,
//        "Best Supporting Actor": 4,
//        "Best Supporting Actress": 4
//    };
//
//    var color = self.color = d3.scale.ordinal()
//        .domain(["friend", "family", "lion", "sat"])
//        .range(["#3182bd", "#42a48d", "#7d4098", "#ff6600", "#969696", "#969696", "#969696", "#969696"]);
//
//    var svg = d3.select(".g-graphic").insert("svg", ".g-note")
//        .attr("width", width)
//        .attr("height", height);
//
//    svg.append("defs").append("clipPath")
//        .attr("id", "g-mug-clip")
//        .append("circle")
//        .attr("r", mugDiameter / 2);
//
//    var tooltip = d3.select(".g-graphic").append("div")
//        .attr("class", "g-tooltip")
//        .style("display", "none");
//
//    var tooltipPath = tooltip.append("svg")
//        .attr("class", "g-tooltip-path");
//
//    tooltipPath.append("path");
//
//    var tooltipContent = tooltip.append("div")
//        .style("position", "relative")
//        .style("z-index", 2)
//        .style("padding", "8px");
//
//    var tooltipName = tooltipContent.append("div")
//        .attr("class", "g-name");
//
//    var tooltipDescription = tooltipContent.append("div")
//        .attr("class", "g-description");
//
//    var overlay = d3.select(".g-graphic").append("svg")
//        .attr("width", width)
//        .attr("height", height)
//        .style("z-index", 3);
//
//    d3.json("data/network.json", function (error, network) {
//
//        network.persons.forEach(function (a, i) {
//            a.index = i;
//            a.links = [];
//        });
//
//        network.movies.forEach(function (m, i) {
//            m.index = i;
//            m.nominations = [];
//            m.links.forEach(function (l) {
//                var p = l.person = network.persons[l.person];
//                l.movie = m;
//                p.links.push(l);
//                return p;
//            });
//        });
//
//        network.persons.forEach(function (a, i) {
//            a.nominations.forEach(function (n) {
//                n.movie = network.movies[n.movie];
//                n.movie.nominations.push(n);
//                n.person = a;
//            });
//        });
//
//        svg.append("g")
//            .attr("class", "g-movie-clips")
//            .selectAll("clipPath")
//            .data(network.movies)
//            .enter().append("clipPath")
//            .attr("id", function (d, i) {
//                return "g-movie-clip-" + i;
//            })
//            .append("circle")
//            .attr("transform", function (d) {
//                return "translate(" + d.x + "," + d.y + ")";
//            })
//            .attr("r", 80);
//
//        svg.append("g")
//            .attr("class", "g-person-hulls")
//            .selectAll("path")
//            .data(d3.merge(network.persons.map(function (p) {
//                return p.links;
//            })))
//            .enter().append("path")
//            .sort(function (a, b) {
//                return d3.descending(a.role, b.role);
//            })
//            .style("stroke", function (d) {
//                return d3.interpolate(color(d.role), "#fff")(.65);
//            })
//            .attr("d", movieToPersonLink);
//
//        svg.append("g")
//            .attr("class", "g-movie-links")
//            .selectAll("path")
//            .data(d3.merge(network.movies.map(function (m) {
//                return m.links;
//            })))
//            .enter().append("path")
//            .classed("g-current-nomination", currentNomination)
//            .classed("g-win", win)
//            .attr("d", movieToPersonLink);
//
//        svg.append("g")
//            .attr("class", "g-movie-dots")
//            .selectAll("circle")
//            .data(network.movies)
//            .enter().append("circle")
//            .attr("transform", function (d) {
//                return "translate(" + d.x + "," + d.y + ")";
//            })
//            .classed("g-current-nomination", function (m) {
//                return m.links.some(currentNomination);
//            })
//            .classed("g-win", function (m) {
//                return m.links.some(win);
//            })
//            .attr("r", function (m) {
//                return m.links.some(currentNomination) ? 5 : 3;
//            });
//
//        svg.append("g")
//            .attr("class", "g-movie-labels")
//            .selectAll("text")
//            .data(network.movies)
//            .enter().append("text")
//            .text(function (m) {
//                return m.name;
//            })
//            .attr("transform", function (d) {
//                return "translate(" + d.x + "," + d.y + ")";
//            })
//            .classed("g-current-nomination", function (m) {
//                return m.links.some(currentNomination);
//            })
//            .classed("g-win", function (m) {
//                return m.links.some(win);
//            });
//
//
//        var movieTarget = overlay.append("g")
//            .attr("class", "g-voronoi")
//            .selectAll("path")
//            .data(d3.geom.voronoi(network.movies.map(function (d) {
//                    return [d.x, d.y];
//                })).map(function (d) {
//                    return bounds.clip(d);
//                }))
//            .enter().append("path")
//            .attr("clip-path", function (d, i) {
//                return "url(#g-movie-clip-" + i + ")";
//            })
//            .attr("d", function (d) {
//                return "M" + d.join("L") + "Z";
//            })
//            .datum(function (d, i) {
//                return network.movies[i];
//            })
//            .on("mouseover", mouseoverMovie)
//            .on("mouseout", mouseout)
//            .on("click", click);
//
//        var personTarget = overlay.selectAll(".g-person-target")
//            .data(network.persons)
//            .enter().append("circle")
//            .attr("transform", function (d) {
//                return "translate(" + d.x + "," + d.y + ")";
//            })
//            .attr("class", "g-person-target")
//            .attr("r", mugDiameter / 2 + 2.5)
//            .style("stroke-width", 5)
//            .on("mouseover", mouseoverPerson)
//            .on("mouseout", mouseout);
//
//        var personDot = svg.append("g")
//            .attr("class", "g-person-dots")
//            .selectAll("g")
//            .data(network.persons)
//            .enter().append("g")
//            .attr("transform", function (d) {
//                return "translate(" + d.x + "," + d.y + ")";
//            });
//
//        personDot.append("circle")
//            .attr("r", mugDiameter / 2 + 2.5)
//            .style("stroke", function (d) {
//                return d3.lab(color(d.type)).darker(.2);
//            })
//            .style("stroke-width", 5);
//
//        personDot.append("image")
//            .attr("xlink:href", "images/muggles-exp.jpg")
//            .attr("x", function (d, i) {
//                return -mugDiameter / 2 - mugDiameter * (i % 9);
//            })
//            .attr("y", function (d, i) {
//                return -mugDiameter / 2 - mugDiameter * (i / 9 | 0);
//            })
//            .attr("width", 9 * mugDiameter)
//            .attr("height", 6 * mugDiameter)
//            .attr("clip-path", "url(#g-mug-clip)")
//            .style("pointer-events", "none");
//
//        var personLabel = svg.append("g")
//            .attr("class", "g-person-labels")
//            .selectAll("g")
//            .data(network.persons)
//            .enter().append("g")
//            .attr("transform", function (d) {
//                return "translate(" + d.label.x + "," + d.label.y + ")";
//            })
//            .style("pointer-events", "none");
//
//        personLabel.append("text")
//            .attr("class", "g-halo")
//            .attr("dy", ".35em")
//            .text(function (d) {
//                return d.name;
//            });
//
//        personLabel.append("text")
//            .attr("dy", ".35em")
//            .style("fill", function (d) {
//                return d3.lab(color(d.type)).darker(.2);
//            })
//            .text(function (d) {
//                return d.name;
//            });
//
//        var gkey = svg.append("g")
//            .attr("class", "g-key")
//            .attr("transform", "translate(" + (width - 180) + ",16)");
//
//        gkey.append("text")
//            .style("font-weight", "bold")
//            .attr("y", -6)
//            .text("Connection Types");
//
//        var key = gkey.selectAll("g")
//            .data(color.domain().slice(0, 4).concat(["Multiple roles"]))
//            .enter().append("g")
//            .attr("transform", function (d, i) {
//                return "translate(0," + i * 20 + ")";
//            });
//
//        key.append("circle")
//            .attr("r", 6)
//            .attr("cx", 9)
//            .attr("cy", 9)
//            // .style("fill-opacity", .5)
//            .style("opacity", .6)
//            .style("fill", "none")
//            .style("stroke", function (d) {
//                return d3.lab(color(d)).darker(.2);
//            })
//            .style("stroke-width", 5);
//
//        key.append("text")
//            .attr("x", 23)
//            .attr("y", 9)
//            .attr("dy", ".35em")
//            .text(function (d) {
//                var first = d.substring(0, 1), rest = d.substring(1);
//                return first.toUpperCase() + rest.replace(/-/g, " and ");
//            });
//
//        function mouseoverPerson(p) {
//            var g = svg.insert("g", ".g-movie-dots")
//                .attr("class", "g-movie-links g-active");
//
//            g.selectAll("path")
//                .data(p.links)
//                .enter().append("path")
//                .attr("d", personToMovieLink)
//                .style("stroke-dasharray", "0,250")
//                .transition()
//                .ease("cubic-in")
//                .style("stroke-dasharray", "950,0");
//
//            d3.selectAll(".g-person-dots circle")
//                .filter(function (o) {
//                    return o === p;
//                })
//                .classed("g-active", true);
//        }
//
//        function mouseoverMovie(m) {
//            var g = svg.insert("g", ".g-movie-dots")
//                .attr("class", "g-movie-links g-active");
//
//            g.selectAll("path")
//                .data(m.links)
//                .enter().append("path")
//                .attr("d", movieToPersonLink)
//                .style("stroke-dasharray", "0,250")
//                .transition()
//                .ease("cubic-in")
//                .style("stroke-dasharray", "250,250");
//
//            d3.selectAll(".g-movie-dots circle")
//                .filter(function (o) {
//                    return o === m;
//                })
//                .classed("g-active", true);
//
//            d3.selectAll(".g-person-dots circle")
//                .filter(function (p) {
//                    return p.links.some(function (l) {
//                        return l.movie === m;
//                    });
//                })
//                .classed("g-active", true);
//
//        }
//
//        function click() {
//            tooltip.style("display", "none");
//        }
//
//        function mouseout() {
//            d3.selectAll(".g-movie-links.g-active")
//                .remove();
//
//            d3.selectAll(".g-active")
//                .classed("g-active", false)
//                .style("stroke-dasharray", null);
//
//            tooltip.style("display", "none");
//        }
//
//        function movieToPersonLink(d) {
//            return "M" + d.movie.x + "," + d.movie.y
//                + "S" + d.x + "," + d.y
//                + " " + d.person.x + "," + d.person.y;
//        }
//
//        function personToMovieLink(d) {
//            return "M" + d.person.x + "," + d.person.y
//                + "C" + d.x + "," + d.y
//                + " " + d.movie.x + "," + d.movie.y
//                + " " + d.movie.x + "," + d.movie.y;
//        }
//
//        // function hull(p) {
//        //   return p.links.map(movieToPersonLink).join("");
//        // }
//
//        function currentNomination(l) {
//            return l.person.nominations.some(function (n) {
//                return n.year === 2013 && n.movie === l.movie;
//            });
//        }
//
//        function currentBestPictureNomination(l) {
//            return l.person.nominations.some(function (n) {
//                return n.year === 2013 && n.movie === l.movie && n.name === "Best Picture";
//            });
//        }
//
//        function win(l) {
//            return l.person.nominations.some(function (n) {
//                return n.won && n.movie === l.movie;
//            });
//        }
//    });
//
//})();

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
        {"name": "Mike Kasperzak", "group": 4},
        {"name": "Caryl Cunningham Teten", "group": 5},
        {"name": "Chad Parker Carey", "group": 5},
        {"name": "Cherise Alle", "group": 5},
        {"name": "Curtis Bowers", "group": 5},
        {"name": "Dina Toland", "group": 5},
        {"name": "Giancarlo Glenn", "group": 5},
        {"name": "Gloria Carey", "group": 5},
        {"name": "Jennifer Abad  ", "group": 5},
        {"name": "Jennifer Hussey", "group": 5},
        {"name": "Jennifer McInnis", "group": 5},
        {"name": "Jessica Owen Rose ", "group": 5},
        {"name": "Jessica Underbrink", "group": 5},
        {"name": "Jim Meyer", "group": 5},
        {"name": "Jody Bailey Newman", "group": 5},
        {"name": "Julie Hooper Abad", "group": 5},
        {"name": "Krista Wagner Bowers", "group": 5},
        {"name": "Michael J Rossetti", "group": 5},
        {"name": "Misael González", "group": 5},
        {"name": "Naomi Neuburger", "group": 5}
    ],
    "links": [
        {"source": 1, "target": 0, "value": 10},
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
        {"source": 72, "target": 4, "value": 1},
        {"source": 73, "target": 4, "value": 1},
        {"source": 74, "target": 4, "value": 1},
        {"source": 75, "target": 4, "value": 1},
        {"source": 76, "target": 4, "value": 1},
        {"source": 77, "target": 4, "value": 1},
        {"source": 78, "target": 4, "value": 1}
    ]

};
var width = 960,
    height = 700;

//var color = d3.scale.category20();

var color = d3.scale.ordinal().range(["#e74c3c", "#2ecc71", "#f39c12", "#3498db", "#f1c40f", "#1abc9c", "#9b59b6"]);


var force = d3.layout.force()
    .charge(-500)
    .linkDistance(120)
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
        .style("stroke-width", function (d) {
            return Math.sqrt(d.value);
        });

    var gnodes = svg.selectAll('g.gnode')
        .data(graph.nodes)
        .enter()
        .append('g')
        .classed('gnode', true);

    var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", 20)
        .style("fill", function (d) {
            return color(d.group);
        })
        .style("stroke-width", function (d) {
            return Math.sqrt(d.value);
        })
        .call(force.drag);

    var labels = gnodes.append("text")
        .text(function (d) {
            return d.name;
        })
        .style('fill', "#f2f2f2");

    //console.log(labels);

    force.on("tick", function () {
        link.attr("x1", function (d) {
            return d.source.x;
        })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        gnodes.attr("transform", function (d) {
            return 'translate(' + [d.x, d.y] + ')';
        });


    });
};

drawGraph(graph);